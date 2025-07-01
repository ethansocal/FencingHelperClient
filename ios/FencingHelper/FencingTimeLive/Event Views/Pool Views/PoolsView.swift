//
//  PoolsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import Combine
import SwiftData
import SwiftUI
import TipKit

struct PoolRow: View {
    var pool: Pool

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Label(
                title: {
                    Text("Pool #\(pool.poolNum)")
                        .font(.headline)
                        + (pool.poolStripTime != "" ? Text(" - \(pool.poolStripTime)") : Text(""))
                },
                icon: {
                    Image(systemName: pool.finished ? "checkmark" : "xmark")
                })
            Grid(alignment: .leading, horizontalSpacing: 7, verticalSpacing: 5) {
                ForEach(pool.fencers) { fencer in
                    GridRow {
                        Text("\(fencer.id).")
                            .gridColumnAlignment(.trailing)
                        Text(fencer.formattedName)
                            .strikethrough(fencer.withdrawn != nil)
                    }
                }
            }
        }
    }
}

struct PoolsView: View {
    var event: TournamentData.Day.Event
    var roundId: String

    @State var pools: [Pool]?
    @State var error: Error?

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/\(roundId)/pools")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.pools = try JSONDecoder().decode([Pool].self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let pools {
                List {
                    ForEach(pools) { pool in
                        NavigationLink {
                            PoolView(event: event, roundId: roundId, pool: pool)
                        } label: {
                            PoolRow(pool: pool)
                        }
                    }
                }
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Pools")
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
                        url: URL(
                            string:
                                "https://fencingtimelive.com/pools/scores/\(event.id)/\(roundId)")!)
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
        }
    }
}

struct Pool: Identifiable, Decodable {
    let id: String
    let poolNum: Int
    let poolStripTime: String
    let finished: Bool
    let fencers: [PoolFencer]
}

struct PoolFencer: Decodable, Identifiable, Equatable {
    let name: String
    let formattedName: String
    let affiliation: String
    let id: Int
    let scores: [PoolScore]?
    let stats: PoolStats?
    let withdrawn: String?
}

struct PoolStats: Decodable, Equatable {
    let v: Int
    let vm: Float
    let ts: Int
    let tr: Int
    let ind: Int
}

struct PoolScore: Decodable, Identifiable, Equatable {
    let id: String
    let happened: Bool
    let filler: Bool
    let withdrawn: Bool
    let score: Int?
    let win: Bool
}
