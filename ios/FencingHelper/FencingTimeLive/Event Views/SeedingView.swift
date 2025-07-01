//
//  SeedingView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

func formatClubs(club1: String?, club2: String?) -> String? {
    return if let club1 {
        club1 + (club2.map({ " / \($0)" }) ?? "")
    } else {
        nil
    }
}

func formatClassRank(rating: String?, rank: String?) -> String {
    return if let rating {
        rating + (rank.map({ " / \($0)" }) ?? "")
    } else {
        ""
    }
}

func statusColor(seeding: SeedingData.Seeding) -> Color {
    return if seeding.bye ?? false {
        Color.red
    } else if seeding.excluded {
        Color.primary
    } else if seeding.elim {
        Color.red
    } else if seeding.advanced {
        Color.green
    } else {
        Color.primary
    }
}

struct SeedingRow: View {
    let seeding: SeedingData.Seeding
    let columnNames: [String]
    
    @State var shown: Bool = false

    var body: some View {
        Group {
            GridRow {
                Text(String(seeding.seed))
                Text(seeding.name + (seeding.rating != nil && seeding.fenRank != nil ? " (\(formatClassRank(rating: seeding.rating, rank: seeding.fenRank.map {String($0)})))" : " "))
                if columnNames.contains("status") {
                    Text(seeding.status)
                        .foregroundStyle(statusColor(seeding: seeding))
                }
            }
            if shown {
                Text(([seeding.country, seeding.div, formatClubs(club1: seeding.club1, club2: seeding.club2)].filter({$0 != nil}) as! [String]).joined(separator: " - "))
                    .lineLimit(.max)
                    .fixedSize(horizontal: false, vertical: true)
                    .frame(width: 300)
            }
        }
        .strikethrough(seeding.excluded)
        .onTapGesture {
            withAnimation {
                shown.toggle()
            }
        }
    }
}

struct SeedingView: View {
    let event: TournamentData.Day.Event
    let roundId: String

    @State var seedingData: SeedingData?
    @State var searchText = ""
    @State var size: CGSize = .zero
    @State var error: Error?

    func filteredSeedings(
        seedings: [SeedingData.Seeding],
        searchText: String
    ) -> [SeedingData.Seeding] {
        guard !searchText.isEmpty else { return seedings }
        return seedings.filter { seeding in
            seeding.search.lowercased().contains(searchText.lowercased())
        }
    }

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/\(roundId)/seeding")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.seedingData = try JSONDecoder().decode(SeedingData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let seedingData = self.seedingData {
                ScrollView([.horizontal, .vertical]) {
                    Grid(alignment: .leading, horizontalSpacing: 25) {
                        GridRow {
                            Text("Seed")
                            Text("Name")
                            if seedingData.columnNames.contains("status") {
                                Text("Status")
                            }
                        }
                        .bold()
                        let filtered = filteredSeedings(
                            seedings: seedingData.seedings, searchText: searchText)
                        ForEach(filtered) { seeding in
                            Divider()
                            SeedingRow(seeding: seeding, columnNames: seedingData.columnNames)
                        }
                        if filtered.isEmpty {
                            Divider()
                            Text("No seedings found")
                        }
                    }
                    .frame(minWidth: size.width, minHeight: size.height, alignment: .topLeading)
                    .padding()
                }
                .navigationTitle(seedingData.title)
                .readSize(onChange: { size = $0 })
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Seeding")
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string:
                                "https://www.fencingtimelive.com/rounds/seedings/\(event.id)/\(roundId)"
                        )!)
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

struct SeedingData: Decodable {
    let title: String
    let columnNames: [String]
    let seedings: [Seeding]

    struct Seeding: Decodable, Identifiable {
        let id: String
        let exempt: Bool
        let excluded: Bool
        let noShow: Bool
        let bye: Bool?
        let elim: Bool
        let advanced: Bool
        let seed: String
        let name: String
        let div: String?
        let country: String?
        let club1: String?
        let club2: String?
        let rating: String?
        let fenRank: Int?
        let status: String
        let search: String
    }
}
