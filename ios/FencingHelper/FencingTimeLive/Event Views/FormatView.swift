//
//  FormatView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

struct FormatView: View {
    var event: TournamentData.Day.Event

    @State var formatData: FormatData?
    @State var error: Error?

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/format")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.formatData = try JSONDecoder().decode(FormatData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let formatData {
                List {
                    Text("\(formatData.fencerCount) fencers competing in this event")
                        .font(.title2)
                    ForEach(formatData.rounds) { i in
                        VStack(alignment: .leading) {
                            Text(i.title)
                                .font(.headline)
                            Text(i.body)
                        }
                    }
                }
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Format")
        .navigationBarTitleDisplayMode(.inline)
        .task {
            await fetchData()
        }
        .refreshable {
            await fetchData()
        }
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(string: "https://fencingtimelive.com/events/format/\(event.id)")!)
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
        }
    }
}

struct FormatData: Decodable {
    let fencerCount: Int
    let rounds: [Round]

    struct Round: Identifiable, Decodable {
        let id: Int
        let title: String
        let body: String
    }
}
