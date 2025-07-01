//
//  MembershipsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftData
import SwiftUI
import TipKit

struct AddMembershipsTip: Tip {
    var title: Text {
        Text("Add Memberships")
    }

    var message: Text? {
        Text(
            "Adding memberships gives you a replica of your card for easy scanning, plus other information."
        )
    }

    var image: Image? {
        Image(systemName: "person.text.rectangle.fill")
    }
}

struct MembershipsView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var memberships: [Membership]

    var addMembershipsTip = AddMembershipsTip()

    var body: some View {
        NavigationStack {
            Group {
                if memberships.isEmpty {
                    NavigationLink {
                        MembershipCreateView(invalidate: {
                            addMembershipsTip.invalidate(reason: .actionPerformed)
                        })
                    } label: {
                        Label("Add membership", systemImage: "plus")
                    }
                    .popoverTip(addMembershipsTip)
                } else {
                    TabView {
                        ForEach(memberships.sorted(by: { $0.order < $1.order })) { membership in
                            MembershipView(membership: membership)
                        }
                    }
                    .tabViewStyle(PageTabViewStyle(indexDisplayMode: .automatic))
                    .onAppear {
                        UIPageControl.appearance().currentPageIndicatorTintColor = UIColor.label
                        UIPageControl.appearance().pageIndicatorTintColor = UIColor.secondaryLabel
                    }
                }
            }
            .toolbar {
                NavigationLink {
                    if memberships.isEmpty {
                        MembershipCreateView()
                    } else {
                        MembershipEditView()
                    }
                } label: {
                    Label("Edit", systemImage: "pencil")
                }
            }
            .navigationTitle("Memberships")
            .navigationBarTitleDisplayMode(.inline)
            .onAppear {
                for membership in memberships {
                    if membership.lastRefreshed.timeIntervalSinceNow.isLess(than: -60 * 60 * 24) {
                        print("refreshing membership")
                        refreshMembership(membership: membership) {
                            try? modelContext.save()
                        }
                    }
                }
            }
        }
    }
}

func refreshMembership(membership: Membership, completion: @escaping () -> Void) {
    getFencerInfo(name: membership.name, usfaId: membership.usfaId) { fencerInfo in
        membership.club = fencerInfo.club
        membership.clubId = fencerInfo.clubId
        membership.clubSymbol = fencerInfo.clubSymbol
        membership.country = fencerInfo.country
        membership.epee = fencerInfo.epee
        membership.foil = fencerInfo.foil
        membership.saber = fencerInfo.saber
        membership.year = fencerInfo.year
        membership.lastRefreshed = Date()
        completion()
    }

}

#Preview {
    MembershipsView()
        .modelContainer(for: Membership.self, inMemory: false)
}
