//
//  ScheduleView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/24/24.
//

import SwiftUI

struct EventLink: View {
    let event: TournamentData.Day.Event
    var body: some View {
        VStack(alignment: .leading) {
            Text("\(event.event) - \(event.time)")
            if event.status != "" {
                Text(event.status.replacingOccurrences(of: "\n", with: " | ")).foregroundStyle(
                    .secondary)
            }
        }
    }
}

func eventToColor(_ name: String) -> Color? {
    let lowercased = name.lowercased()
    if (lowercased.contains("women")) {
        if (lowercased.contains("saber")) {
            return .orange
        } else if (lowercased.contains("foil")) {
            return .yellow
        } else if (lowercased.contains("épée")) {
            return .green
        }
    } else if (lowercased.contains("men")) {
        if (lowercased.contains("saber")) {
            return .red
        } else if (lowercased.contains("foil")) {
            return .blue
        } else if (lowercased.contains("épée")) {
            return .purple
        }
    }
    return nil
}

struct TournamentView: View {
    let tournamentId: String

    @State var tournament: TournamentData?
    @State var error: Error?

    func fetchData() async {
        do {
            self.error = nil
            let url = URL(string: "\(BASE_URL)/tournament/\(tournamentId)/schedule")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.tournament = try JSONDecoder().decode(TournamentData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let schedule = self.tournament {
                List {
                    ForEach(schedule.days, id: \.date) { day in
                        Section(header: Text(day.date)) {
                            ForEach(day.events) { event in
                                NavigationLink {
                                    EventView(event: event)
                                } label: {
                                    EventLink(event: event)
                                }
                                .listRowBackground(eventToColor(event.event).map {$0.opacity(0.2)})
                            }
                        }
                    }
                }
                .navigationTitle(schedule.name)
            } else {
                ProgressView()
                    .navigationTitle("Loading...")
            }
        }
        .refreshable(action: {
            await fetchData()
        })
        .task {
            await fetchData()
        }
        .navigationBarTitleDisplayMode(.large)
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string:
                                "https://fencingtimelive.com/tournaments/eventSchedule/\(tournamentId)"
                        )!,
                        showNavigationButtons: true)
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
            ToolbarItem {
                NavigationLink {
                    MedalsView(tournamentId: tournamentId)
                } label: {
                    Label("Medals", systemImage: "medal.fill")
                }
            }
        }
    }
}

struct TournamentData: Decodable {
    var days: [Day]
    var name: String
    var dates: String
    var location: String

    struct Day: Decodable {
        var date: String
        var events: [Event]

        struct Event: Identifiable, Decodable {
            var time: String
            var event: String
            var status: String
            var id: String
        }
    }
}
