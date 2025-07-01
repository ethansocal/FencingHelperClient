//
//  ContentView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/23/24.
//

import SwiftData
import SwiftUI
import WebKit

struct TournamentsView: View {
    @State private var navPath = NavigationPath()

    func decidePolicy(
        _ webView: WKWebView, _ navigationAction: WKNavigationAction,
        _ decisionHandler: @escaping @MainActor (WKNavigationActionPolicy) -> Void
    ) {
        let path = navigationAction.request.url?.path() ?? ""

        if try! Regex("/tournaments/eventSchedule/(\\w+)").wholeMatch(in: path) != nil {
            onNavigateToSchedule(navigationAction.request.url?.pathComponents.last ?? "")
            decisionHandler(.cancel)
        } else if path == "/tournaments/search/advanced" {
            navPath.append("advanced search")
            decisionHandler(.cancel)
        } else {
            decisionHandler(.allow)
        }
    }

    func onNavigateToSchedule(_ tournamentId: String) {
        navPath.append(tournamentId)
    }

    var body: some View {
        NavigationStack(path: $navPath) {
            FencingTimeLiveWebView(
                url: URL(string: "https://fencingtimelive.com")!, decidePolicy: decidePolicy
            )
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    NavigationLink {
                        AdvancedSearchView(onNavigateToSchedule: { tournamentId in
                            navPath.append(tournamentId)
                        })
                    } label: {
                        Text("Advanced")
                    }
                }
#if targetEnvironment(simulator)
                ToolbarItem(placement: .topBarLeading) {
                    NavigationLink {
                        TournamentView(tournamentId: "5215646B5EEB4B65BE2BEA2FECF40B28")
                    } label: {
                        Label("Debug", systemImage: "ant.circle.fill")
                    }
                }
#endif
                ToolbarItem(placement: .topBarLeading) {
                    NavigationLink {
                        VStack {
                            Text("Thank you for downloading FencingHelper! We hope it assists you in your fencing. Please let Ethan Henry know about any feedback you may have!")
                            Text("If you are looking for the club, country, division, or other information about a fencer, please tap their name. This will expand their information. This also shows the next match in the pool results.")
                        }
                            .navigationTitle("About")
                    } label: {
                        Label("About", systemImage: "info.circle")
                    }
                }
            }
            .toolbarRole(.browser)
            .navigationDestination(for: String.self) { i in
                if i == "advanced search" {
                    AdvancedSearchView(onNavigateToSchedule: { tournamentId in
                        navPath.append(tournamentId)
                    })
                } else {
                    TournamentView(tournamentId: i)
                }
            }
//            .toolbar {
//                ToolbarItem(placement: .topBarLeading) {
//                    Button(action: {
//                        navPath.append("8E76B96EF43049EB9DDC69AA7E3A4305")
//                    }) {
//                        Text("Test")
//                    }
//                }
//            }
            .navigationTitle("Tournaments")
            .navigationBarTitleDisplayMode(.inline)
        }

    }
}

struct AdvancedSearchView: View {
    var onNavigateToSchedule: (String) -> Void

    func decidePolicy(
        _ webView: WKWebView, _ navigationAction: WKNavigationAction,
        _ decisionHandler: @escaping @MainActor (WKNavigationActionPolicy) -> Void
    ) {
        let path = navigationAction.request.url?.path() ?? ""

        if try! Regex("/tournaments/eventSchedule/([\\w\\d]+)").wholeMatch(in: path) != nil {
            onNavigateToSchedule(navigationAction.request.url?.pathComponents.last ?? "")
            decisionHandler(.cancel)
        } else {
            decisionHandler(.allow)
        }
    }

    var body: some View {
        FencingTimeLiveWebView(
            url: URL(string: "https://fencingtimelive.com/tournaments/search/advanced")!,
            decidePolicy: decidePolicy
        )
        .navigationTitle("Advanced Search")
        .navigationBarTitleDisplayMode(.inline)
    }
}
