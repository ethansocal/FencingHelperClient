//
//  FencersView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

struct FencerCount: View {
    let checkedIn: Int
    let absent: Int
    let scratched: Int

    var body: some View {
        HStack {
            HStack {
                Image(systemName: "circlebadge.fill")
                    .foregroundStyle(.green)
                Text("\(checkedIn) checked in")
            }
            Divider()
            HStack {
                Image(systemName: "circlebadge.fill")
                    .foregroundStyle(.blue)
                Text("\(absent) absent")
            }
            Divider()
            HStack {
                Image(systemName: "circlebadge.fill")
                    .foregroundStyle(.red)
                Text("\(scratched) scratched")
            }
        }
        .font(.system(size: 12))
    }
}

struct FencerRow: View {
    let fencer: FencersData.Fencer
    let columnNames: [String]
    
    @State var shown: Bool = false

    var body: some View {
        Group {
            GridRow {
                switch fencer.status {
                case "CheckedIn":
                    Label("Checked In", systemImage: "circlebadge.fill")
                        .labelStyle(.iconOnly)
                        .foregroundStyle(.green)
                        .gridColumnAlignment(.center)
                case "Absent":
                    Label("Absent", systemImage: "circlebadge.fill")
                        .labelStyle(.iconOnly)
                        .foregroundStyle(.blue)
                        .gridColumnAlignment(.center)
                case "Scratched":
                    Label("Scratched", systemImage: "circlebadge.fill")
                        .labelStyle(.iconOnly)
                        .foregroundStyle(.red)
                        .gridColumnAlignment(.center)
                default:
                    Text(fencer.status)
                }
                Text(fencer.name + (fencer.weaponRating != nil && fencer.rank != nil ? " (\(formatClassRank(rating: fencer.weaponRating, rank: fencer.rank.map {String($0)})))" : " "))
                
            }
            if shown {
                Text(([fencer.country, fencer.div, fencer.clubNames].filter({$0 != nil}) as! [String]).joined(separator: " - "))
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

struct FencersView: View {
    let event: TournamentData.Day.Event

    @State var fencersData: FencersData?
    @State var size: CGSize = .zero
    @State var searchText = ""
    @State var error: Error?

    func filteredFencers(
        fencers: [FencersData.Fencer],
        searchText: String
    ) -> [FencersData.Fencer] {
        guard !searchText.isEmpty else { return fencers }
        return fencers.filter { fencer in
            fencer.search.lowercased().contains(searchText.lowercased())
        }
    }

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/fencers")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.fencersData = try JSONDecoder().decode(FencersData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let fencersData = self.fencersData {
                ScrollView([.horizontal, .vertical]) {
                    VStack(alignment: .leading) {
                        FencerCount(
                            checkedIn: fencersData.checkedIn, absent: fencersData.absent,
                            scratched: fencersData.scratched)
                        Grid(alignment: .leading, horizontalSpacing: 25) {
                            GridRow {
                                Text("Status")
                                Text("Name")
                            }
                            .bold()
                            let filtered = filteredFencers(
                                fencers: fencersData.fencers, searchText: searchText)
                            ForEach(filtered) { fencer in
                                Divider()
                                FencerRow(fencer: fencer, columnNames: fencersData.columnNames)
                            }
                            if filtered.isEmpty {
                                Divider()
                                Text("No fencers found")
                            }
                        }
                    }
                    .frame(minWidth: size.width, minHeight: size.height, alignment: .topLeading)
                    .padding()
                }
                .searchable(text: $searchText.animation(), prompt: "Type to filter")
                .navigationTitle("\(fencersData.checkedIn + fencersData.absent) Fencers")
                .readSize(onChange: { size = $0 })
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Fencers")
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string: "https://www.fencingtimelive.com/events/competitors/\(event.id)"
                        )!)
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

#Preview {
    FencersView(
        event: TournamentData.Day.Event(
            time: "", event: "", status: "", id: "A1DA7520EC58471BB33CF793B5B2DD1A"))
}

struct FencersData: Decodable {
    var columnNames: [String]
    var fencers: [Fencer]
    var checkedIn: Int
    var absent: Int
    var scratched: Int

    struct Fencer: Decodable, Identifiable {
        var id: String
        var status: String
        var name: String
        var club1: String?
        var clubNames: String?
        var club2: String?
        var div: String?
        var country: String?
        var weaponRating: String?
        var weaponRatingSort: Int
        var rank: Int?
        var rankSort: Int?
        var search: String
    }
}
