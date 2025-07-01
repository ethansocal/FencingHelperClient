//
//  StripsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

struct StripRow: View {
    let strip: StripsData.StripAssignment
    let columnNames: [String]

    var body: some View {
        Text(strip.formattedName + " - " + ([strip.stripNum, strip.startTime, strip.poolNum.map({"Pool " + String($0)})].filter({$0 != nil && $0 != ""}) as! [String]).joined(separator: ", "))
    }
}

struct StripsView: View {
    let event: TournamentData.Day.Event
    let roundId: String

    @State var stripsData: StripsData?
    @State var size: CGSize = .zero
    @State var searchText = ""
    @State var error: Error?

    func filteredStrips(
        strips: [StripsData.StripAssignment],
        searchText: String
    ) -> [StripsData.StripAssignment] {
        guard !searchText.isEmpty else { return strips }
        return strips.filter { strip in
            strip.search.lowercased().contains(searchText.lowercased())
        }
    }

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/\(roundId)/strips")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.stripsData = try JSONDecoder().decode(StripsData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let stripsData = self.stripsData {
                List {
                    let filtered = filteredStrips(
                        strips: stripsData.stripAssignments, searchText: searchText)
                    ForEach(filtered, id: \.self) { strip in
                        StripRow(strip: strip, columnNames: stripsData.columnNames)
                    }
                }
                .readSize(onChange: { size = $0 })
                .searchable(text: $searchText.animation(), prompt: "Type to filter")
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Strip Assignments")
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string: "https://www.fencingtimelive.com/rounds/strips/\(event.id)/\(roundId)")!)
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
        }
        .refreshable {
            await fetchData()
        }
        .task {
            await fetchData()
        }
    }
}

struct StripsData: Decodable {
    var columnNames: [String]
    var stripAssignments: [StripAssignment]

    struct StripAssignment: Decodable, Hashable {
        var poolNum: Int?
        var stripNum: String
        var startTime: String?
        var timeSort: Int
        var name: String
        var formattedName: String
        var club1Name: String?
        var division: String?
        var country: String?
        var search: String
    }
}
