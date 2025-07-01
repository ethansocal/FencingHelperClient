//
//  MedalsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

struct MedalsView: View {
    var tournamentId: String

    @State var size: CGSize = .zero
    @State var medalCounts: [MedalCount]?
    @State var error: Error?

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/tournament/\(tournamentId)/medals")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.medalCounts = try JSONDecoder().decode([MedalCount].self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let medalCounts {
                ScrollView([.horizontal, .vertical]) {
                    Grid(alignment: .leading) {
                        GridRow {
                            Text("Place")
                            Text("Country")
                            Text("Gold")
                            Text("Silver")
                            Text("Bronze")
                            Text("Total")
                        }.bold()
                        ForEach(medalCounts, id: \.country) { medalCount in
                            Divider()
                            GridRow {
                                Text(String(medalCount.place))
                                Text(medalCount.country)
                                Text(String(medalCount.gold))
                                Text(String(medalCount.silver))
                                Text(String(medalCount.bronze))
                                Text(String(medalCount.total))
                            }
                        }
                    }
                    .frame(minWidth: size.width, minHeight: size.height, alignment: .topLeading)
                    .padding()
                }
                .readSize(onChange: { size = $0 })
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Medal Counts")
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string: "https://fencingtimelive.com/tournaments/medals/\(tournamentId)"
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

typealias MedalsData = [MedalCount]

struct MedalCount: Decodable {
    var place: Int
    var country: String
    var gold: Int
    var silver: Int
    var bronze: Int
    var total: Int
}
