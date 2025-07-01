import SwiftData
//
//  MembershipCreateView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//
import SwiftUI

struct MembershipCreateView: View {
    var invalidate: (() -> Void)?

    @Environment(\.modelContext) private var modelContext
    @Environment(\.dismiss) var dismiss

    @Query private var memberships: [Membership]

    @State var debounceTimer: Timer?
    @State private var searchText: String = ""
    @State private var possibilities: [PossibleMembership] = []
    @State private var task: URLSessionDataTask?
    @State private var loading: Bool = false

    var body: some View {
        Group {
            if searchText == "" {
                Text("Enter a name in the search bar")
            } else if (task != nil || debounceTimer != nil) && possibilities.isEmpty {
                ProgressView()
            } else if possibilities.filter({ possibility in
                !self.memberships.contains(where: { possibility.usfa_id == $0.usfaId })
            }).isEmpty {
                Text("No results found")
            } else {
                List {
                    ForEach(
                        possibilities.filter({ possibility in
                            !self.memberships.contains(where: { possibility.usfa_id == $0.usfaId })
                        }), id: \.usfa_id
                    ) { possibility in
                        Button(action: {
                            if let invalidate { invalidate() }
                            loading = true
                            getFencerInfo(name: possibility.name, usfaId: possibility.usfa_id) {
                                fencerInfo in
                                withAnimation {
                                    modelContext.insert(
                                        Membership(
                                            order: (memberships.sorted(by: { $0.order < $1.order })
                                                .last?.order ?? -1)
                                                + 1, usfaId: possibility.usfa_id,
                                            name: possibility.name,
                                            year: fencerInfo.year, country: fencerInfo.country,
                                            countryIOC: fencerInfo.countryIOC,
                                            club: fencerInfo.club,
                                            clubId: fencerInfo.clubId,
                                            clubSymbol: fencerInfo.clubSymbol,
                                            epee: fencerInfo.epee, foil: fencerInfo.foil,
                                            saber: fencerInfo.saber,
                                            lastRefreshed: Date())
                                    )
                                    try? modelContext.save()
                                    dismiss()
                                }
                            }
                        }) {
                            Text(
                                possibility.name.replacingOccurrences(of: "-", with: " ") + " - "
                                    + possibility.club
                            )
                        }
                        .disabled(loading)
                    }
                }
            }
        }
        .searchable(text: $searchText, placement: .navigationBarDrawer(displayMode: .always))
        .navigationTitle("Add Membership")
        .navigationBarTitleDisplayMode(.inline)
        .onChange(of: searchText) {
            self.debounceTimer?.invalidate()
            self.debounceTimer = Timer.scheduledTimer(withTimeInterval: 0.5, repeats: false) { _ in
                guard
                    let url = URL(
                        string: "\(BASE_URL)/possibleMemberships?searchText=\(searchText)")
                else { fatalError("Missing URL") }
                if let task = self.task {
                    task.cancel()
                }
                self.task = URLSession.shared.dataTask(with: url) { data, _, _ in
                    if data == nil {
                        return
                    }
                    let possibleMemberships = try! JSONDecoder().decode(
                        [PossibleMembership].self, from: data!)

                    DispatchQueue.main.async {
                        withAnimation {
                            possibilities = possibleMemberships
                            debounceTimer = nil
                            task = nil
                        }
                    }
                }
                self.task!.resume()
            }

        }
    }
}

func getFencerInfo(name: String, usfaId: Int, completion: @escaping (FencerInfo) -> Void) {
    guard let url = URL(string: "\(BASE_URL)/fencerInfo?name=\(name)&usfaId=\(usfaId)") else {
        fatalError("Missing URL")
    }

    URLSession.shared.dataTask(with: url) { data, _, _ in
        // TODO: Add error handling
        let fencerInfo = try! JSONDecoder().decode(FencerInfo.self, from: data!)

        DispatchQueue.main.async {
            completion(fencerInfo)
        }
    }
    .resume()
}

struct FencerInfo: Decodable {
    var year: Int?
    var country: String
    var countryIOC: String
    var club: String?
    var clubId: Int?
    var clubSymbol: String?
    var epee: String
    var foil: String
    var saber: String
}

struct PossibleMembership: Decodable {
    var name: String
    var usfa_id: Int
    var club: String
}

#Preview {
    NavigationStack {
        MembershipCreateView()
    }
    .modelContainer(for: Membership.self, inMemory: false)
}
