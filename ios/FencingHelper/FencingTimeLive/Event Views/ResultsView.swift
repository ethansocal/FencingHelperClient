//
//  ResultsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

struct PlaceText: View {
    let place: String
    @Environment(\.colorScheme) var colorScheme

    var body: some View {
        switch place {
        case "1", "1T":
            Text(place)
                .foregroundStyle(.yellow.mix(with: .black, by: colorScheme == .light ? 0.2 : 0.0))
        case "2", "2T":
            Text(place)
                .foregroundStyle(.gray.mix(with: .black, by: colorScheme == .light ? 0.2 : 0.0))
        case "3", "3T":
            Text(place)
                .foregroundStyle(.orange.mix(with: .red, by: 0.5))
        default:
            Text(place)
        }
    }
}

struct ResultRow: View {
    let result: ResultsData.Result
    let columnNames: [String]

    @State var shown: Bool = false
    
    var body: some View {
        Group {
            GridRow {
                PlaceText(place: result.place)
                Text(result.name + (result.oldRating != nil ? " (\(result.oldRating ?? ""))" : " "))
                if columnNames.contains("newRating") {
                    Text(result.newRating ?? "")
                }
                if columnNames.contains("qualFor") {
                    Text(result.qualFor ?? "")
                }
            }
            if shown {
                Text(([result.country, result.div, result.clubs].filter({$0 != nil}) as! [String]).joined(separator: " - "))
                    .lineLimit(.max)
                    .fixedSize(horizontal: false, vertical: true)
                    .frame(width: 300)
            }
        }
        .strikethrough(result.excluded)
        .onTapGesture {
            withAnimation {
                shown.toggle()
            }
        }
    }
}

struct ResultsView: View {
    let event: TournamentData.Day.Event

    @State var resultsData: ResultsData?
    @State var size: CGSize = .zero
    @State var searchText = ""
    @State var error: Error?

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/results")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.resultsData = try JSONDecoder().decode(ResultsData.self, from: data)
        } catch {
            self.error = error
        }
    }

    func filteredResults(
        results: [ResultsData.Result],
        searchText: String
    ) -> [ResultsData.Result] {
        guard !searchText.isEmpty else { return results }
        return results.filter { result in
            result.search.lowercased().contains(searchText.lowercased())
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let resultsData = self.resultsData {
                ScrollView([.horizontal, .vertical]) {
                    VStack(alignment: .leading, spacing: 20) {
                        if let eventClass = resultsData.eventClass {
                            Text(eventClass)
                                .font(.title2)
                        }
                        Grid(alignment: .leading, horizontalSpacing: 25) {
                            GridRow {
                                Text("Place")
                                Text("Name")
                                if resultsData.columnNames.contains("newRating") {
                                    Text("Earned")
                                }
                                if resultsData.columnNames.contains("qualFor") {
                                    Text("Qualified For")
                                }
                            }
                            .bold()
                            let filtered = filteredResults(
                                results: resultsData.results, searchText: searchText)
                            ForEach(filtered) { result in
                                Divider()
                                ResultRow(result: result, columnNames: resultsData.columnNames)
                            }
                            if filtered.isEmpty {
                                Divider()
                                Text("No results found")
                            }
                        }
                    }
                    .frame(minWidth: size.width, minHeight: size.height, alignment: .topLeading)
                    .padding()
                }
                .readSize(onChange: { size = $0 })
                .navigationTitle(resultsData.title)
                .searchable(text: $searchText.animation(), prompt: "Type to filter")
            } else {
                ProgressView()
                    .navigationTitle("Results")
            }
        }
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string: "https://www.fencingtimelive.com/events/results/\(event.id)")!)
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
        }
        .task {
            await fetchData()
        }
        .refreshable {
            await fetchData()
        }
    }
}

struct ResultsData: Decodable {
    let title: String
    let eventClass: String?
    let columnNames: [String]
    let results: [Result]

    struct Result: Decodable, Identifiable {
        let id: String
        let place: String
        let excluded: Bool
        let name: String
        let clubs: String?
        let club1: String?
        let club2: String?
        let country: String?
        let div: String?
        let oldRating: String?
        let newRating: String?
        let qualFor: String?
        let search: String
    }
}
