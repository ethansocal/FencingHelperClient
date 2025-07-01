//
//  EventView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/24/24.
//

import SwiftUI

struct TabLink: View {
    let tab: AvailableTab
    let event: TournamentData.Day.Event
    @Environment(\.colorScheme) var colorScheme


    var body: some View {
        if tab.type == "competitors" {
            NavigationLink {
                FencersView(event: event)
            } label: {
                Label("Fencers", systemImage: "person.fill")
            }
        } else if tab.type == "seeding" {
            NavigationLink {
                SeedingView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Seeding", systemImage: "list.number")
            }
        } else if tab.type == "format" {
            Link(destination: URL(string: "https://fencingtimelive.com/events/format/\(event.id)")!, label: {
                Label {
                    Text("Format")
                        .foregroundStyle(colorScheme == .light ? .black : .white)
                } icon: {
                    Image(systemName: "info.circle.fill")
                        .foregroundColor(.blue)
                }

            })
        } else if tab.type == "pools" {
            NavigationLink {
                PoolsView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Pools", image: "pool.3x3")
            }
            NavigationLink {
                SeedingView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Seeding", systemImage: "list.number")
            }
            NavigationLink {
                StripsView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Strips", systemImage: "location.fill")
            }
            NavigationLink {
                PoolResultsView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Pool Results", systemImage: "arrow.up.arrow.down")
            }
        } else if tab.type == "tableaus" {
            NavigationLink {
                TableausView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Tableau", systemImage: "list.bullet.clipboard.fill")
            }
            NavigationLink {
                SeedingView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Seeding", systemImage: "list.number")
            }
            NavigationLink {
                StripsView(event: event, roundId: tab.roundId!)
            } label: {
                Label("Strips", systemImage: "location.fill")
            }
        } else if tab.type == "results" {
            NavigationLink {
                ResultsView(event: event)
            } label: {
                Label("Results", systemImage: "trophy.fill")
            }
        } else {
            NavigationLink {
                Text("Sorry, we don't recognize this yet.")
            } label: {
                Text(tab.type)
            }
        }
    }
}

struct EventView: View {
    let event: TournamentData.Day.Event

    @State var tabGroups: [TabGroup]?
    @State var error: Error?

    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/tabs")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.tabGroups = groupTabs(try JSONDecoder().decode([AvailableTab].self, from: data))
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let tabGroups = self.tabGroups {
                List {
                    ForEach(tabGroups, id: \.name) { tabGroup in
                        Section(header: Text(tabGroup.name)) {
                            ForEach(tabGroup.tabs, id: \.type) { tab in
                                TabLink(tab: tab, event: event)
                            }
                        }
                    }

                }
            } else {
                ProgressView()
            }
        }
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(string: "https://fencingtimelive.com/events/view/\(event.id)")!,
                        showNavigationButtons: true)
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
        .navigationTitle(Text(event.event))
    }
}

func groupTabs(_ tabs: [AvailableTab]) -> [TabGroup] {
    var groups = [TabGroup(name: "Event", tabs: [])]
    for tab in tabs {
        if tab.type == "pools" {
            groups.append(TabGroup(name: "Pools", tabs: [tab]))
        } else if tab.type == "tableaus" {
            groups.append(TabGroup(name: "Tableau", tabs: [tab]))
        } else {
            groups[0].tabs.append(tab)
        }
    }
    return groups
}

struct TabGroup {
    var name: String
    var tabs: [AvailableTab]
}

struct AvailableTab: Decodable {
    var type: String
    var roundId: String?
}
