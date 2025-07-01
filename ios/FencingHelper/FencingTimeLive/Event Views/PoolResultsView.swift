//
//  PoolResultsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

func formatIndicator(ind: Int) -> String {
    if ind > 0 {
        "+\(ind)"
    } else {
        "\(ind)"
    }
}

func nextMatch(
    _ poolResultWithPossiblePlaces: PoolResultWithPossiblePlaces,
    _ poolResults: [PoolResultWithPossiblePlaces]
) -> String {
    let count = poolResults.count
    let roundOf = Int(pow(2, ceil(log2(Double(count)))))

    var possibleCompetitors: Set<PoolResultWithPossiblePlaces> = Set()
    for possiblePlace in poolResultWithPossiblePlaces.possiblePlaces {
        if roundOf - possiblePlace < count {
            poolResults.filter {
                $0.possiblePlaces.contains(roundOf - possiblePlace + 1)
            }.forEach {
                possibleCompetitors.insert($0)
            }
        } else {
            let possibles = poolResults.filter {
                $0.possiblePlaces.contains(Int(roundOf / 2) + possiblePlace)
            }
            if possibles.isEmpty {
                poolResults.filter {
                    $0.possiblePlaces.contains(roundOf / 2 - possiblePlace + 1)
                }.forEach {
                    possibleCompetitors.insert($0)
                }
            } else {
                possibles.forEach {
                    possibleCompetitors.insert($0)
                }
                poolResults.filter {
                    $0.possiblePlaces.contains(roundOf / 2 - possiblePlace + 1)
                }.forEach {
                    possibleCompetitors.insert($0)
                }
            }
        }
    }

    return possibleCompetitors.sorted { $0.poolResult.place > $1.poolResult.place }.map {
        "\($0.poolResult.name) (\(String($0.poolResult.place))\($0.poolResult.tie ? "T" : ""))"
    }.formatted(.list(type: .or))
}

struct PoolResultRow: View {
    let poolResult: PoolResultsData.PoolResult
    let nextMatch: () -> String
    let columnNames: [String]

    @State var shown: Bool = false

    var body: some View {
        Group {
            GridRow {
                Text(String(poolResult.place) + (poolResult.tie ? "T" : ""))
                Text(poolResult.formattedName)
                Text("\(poolResult.v)")
                Text("\(poolResult.m)")
                Text(poolResult.vm.formatted(.number.precision(.fractionLength(2))))
                Text("\(poolResult.ts)")
                Text("\(poolResult.tr)")
                Text("\(formatIndicator(ind: poolResult.ind))")
                switch poolResult.prediction {
                case "CertainPromotion":
                    Text("Certain Promotion")
                        .foregroundStyle(.green)
                case "LikelyPromotion":
                    Text("Likely Promotion")
                        .foregroundStyle(.green)
                case "PossiblePromotion":
                    Text("Possible Promotion")
                case "PossibleElimination":
                    Text("Possible Elimination")
                case "LikelyElimination":
                    Text("Likely Elimination")
                        .foregroundStyle(.red)
                case "Advanced":
                    Text("Advanced")
                        .foregroundStyle(.green)
                case "Eliminated":
                    Text("Eliminated")
                        .foregroundStyle(.red)
                default:
                    Text(poolResult.prediction)
                }
                if columnNames.contains("clubs") {
                    Text(formatClubs(club1: poolResult.club1, club2: poolResult.club2) ?? "")
                }
                if columnNames.contains("div") {
                    Text(poolResult.div ?? "")
                }
                Text(poolResult.country ?? "")
            }
            if shown {
                (Text("Next match: ").bold() + Text(nextMatch()))
                    .lineLimit(.max)
                    .fixedSize(horizontal: false, vertical: true)
                    .frame(width: 300)
            }
        }
        .onTapGesture {
            withAnimation {
                shown.toggle()
            }
        }
    }
}

func addPossiblePlaces(_ poolResults: [PoolResultsData.PoolResult])
    -> [PoolResultWithPossiblePlaces]
{
    poolResults.map { poolResult in
        if !poolResult.tie {
            return PoolResultWithPossiblePlaces(
                possiblePlaces: [poolResult.place], poolResult: poolResult)
        } else {
            let possiblePlaces = Array(
                poolResult.place...poolResult.place
                    + poolResults.count { $0.place == poolResult.place })
            return PoolResultWithPossiblePlaces(
                possiblePlaces: possiblePlaces, poolResult: poolResult)
        }
    }
}

struct PoolResultsView: View {
    let event: TournamentData.Day.Event
    let roundId: String

    @State var poolResultsData: PoolResultsData?
    @State var size: CGSize = .zero
    @State var error: Error?
    @State var searchText = ""

    var poolResultsWithPossiblePlaces: [PoolResultWithPossiblePlaces] {
        addPossiblePlaces(poolResultsData?.poolResults ?? [])
    }

    func filteredPoolResults(
        poolResults: [PoolResultWithPossiblePlaces],
        searchText: String
    ) -> [PoolResultWithPossiblePlaces] {
        guard !searchText.isEmpty else { return poolResults }
        return poolResults.filter { poolResult in
            poolResult.poolResult.search.lowercased().contains(searchText.lowercased())
        }
    }

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/\(roundId)/poolResults")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.poolResultsData = try JSONDecoder().decode(PoolResultsData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let poolResultsData = self.poolResultsData {
                ScrollView([.horizontal, .vertical]) {
                    Grid(alignment: .leading, horizontalSpacing: 25) {
                        GridRow {
                            Text("Place")
                            Text("Name")
                            Text("V", comment: "pool win count")
                            Text("M", comment: "pool match count")
                            Text("V / M")
                            Text("TS")
                            Text("TR")
                            Text("Ind")
                            Text("Status")
                            if poolResultsData.columnNames.contains("clubs") {
                                Text("Club(s)")
                            }
                            if poolResultsData.columnNames.contains("div") {
                                Text("Division")
                            }
                            Text("Country")
                        }
                        .bold()
                        let filtered = filteredPoolResults(
                            poolResults: poolResultsWithPossiblePlaces, searchText: searchText)
                        ForEach(filtered, id: \.poolResult.id) { poolResult in
                            Divider()
                            PoolResultRow(
                                poolResult: poolResult.poolResult,
                                nextMatch: { nextMatch(poolResult, poolResultsWithPossiblePlaces) },
                                columnNames: poolResultsData.columnNames)
                        }
                        if filtered.isEmpty {
                            Divider()
                            Text("No pool results found")
                        }
                    }
                    .frame(minWidth: size.width, minHeight: size.height, alignment: .topLeading)
                    .padding()
                }
                .searchable(text: $searchText.animation(), prompt: "Type to filter")
                .navigationTitle(poolResultsData.title)
                .readSize(onChange: { size = $0 })
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Pool Results")
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string:
                                "https://www.fencingtimelive.com/pools/results/\(event.id)/\(roundId)"
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

struct PoolResultsData: Decodable {
    let title: String
    let columnNames: [String]
    let poolResults: [PoolResult]

    struct PoolResult: Decodable, Identifiable, Hashable {
        let id: String
        let v: Int
        let m: Int
        let vm: Float
        let ts: Int
        let tr: Int
        let ind: Int
        let prediction: String
        let name: String
        let formattedName: String
        let div: String?
        let country: String?
        let club1: String?
        let club2: String?
        let search: String
        let place: Int
        let tie: Bool
    }
}

struct PoolResultWithPossiblePlaces: Hashable {
    let possiblePlaces: [Int]
    let poolResult: PoolResultsData.PoolResult
}
