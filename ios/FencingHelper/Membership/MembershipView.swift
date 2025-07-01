//
//  MembershipView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/28/24.
//

import SwiftData
import SwiftUI

func flag(country: String) -> String {
    let base: UInt32 = 127397
    var s = ""
    for v in country.unicodeScalars {
        s.unicodeScalars.append(UnicodeScalar(base + v.value)!)
    }
    return String(s)
}

struct MembershipView: View {
    @Environment(\.modelContext) private var modelContext
    let membership: Membership
    @State var refreshing: Bool = false
    @Environment(\.colorScheme) var colorScheme

    var body: some View {
        VStack(spacing: 15) {
            VStack {
                HStack(alignment: .firstTextBaseline) {
                    Text(
                        membership.name.replacingOccurrences(of: "-", with: " ") + " "
                            + flag(country: membership.country)
                    )
                    .bold()
                    .foregroundStyle(Color(UIColor.label))
                    .multilineTextAlignment(.leading)
                    .font(.title2)
                    Link(
                        destination: URL(
                            string:
                                "https://fencingtracker.com/p/\(String(membership.usfaId))/\(membership.name)"
                        )!
                    ) {
                        Label("FencingTracker", systemImage: "chart.line.uptrend.xyaxis")
                            .labelStyle(.iconOnly)
                    }
                    Spacer()
                    if let year = membership.year {
                        Text(String(year))
                            .italic()
                    }
                }
                .padding(EdgeInsets(top: 0, leading: 10, bottom: 5, trailing: 10))
                if let club = membership.club, let clubSymbol = membership.clubSymbol,
                    let clubId = membership.clubId
                {
                    Link(
                        destination: URL(
                            string:
                                "https://fencingtracker.com/club/\(clubId)/\(clubSymbol)/ratings")!
                    ) {
                        Label(club, systemImage: "link")
                            .lineLimit(1)
                    }
                }
                generateBarcode(text: String(membership.usfaId), colorScheme: colorScheme)
                    .resizable()
                    .interpolation(.none)
                    .scaledToFit()
                    .padding(EdgeInsets(top: 5, leading: 15, bottom: 15, trailing: 15))
                Text("Member #: \(String(membership.usfaId))")
            }
            .padding()
            .frame(maxWidth: .infinity, maxHeight: 250)
            .background(colorScheme == .light ? Color.gray.opacity(0.2).gradient : Color.gray.mix(with: .black, by: 0.5).gradient)
            .cornerRadius(10)
            Grid(horizontalSpacing: 20) {
                GridRow {
                    Text("Epee")
                    Text("Foil")
                    Text("Saber")
                }
                Divider()
                GridRow {
                    if refreshing {
                        ProgressView()
                        ProgressView()
                        ProgressView()
                    } else {
                        Text(membership.epee)
                        Text(membership.foil)
                        Text(membership.saber)
                    }
                }
                .bold()
                .font(.system(.title2))
            }
            .frame(maxWidth: 300)
            .onLongPressGesture(minimumDuration: 3) {
                refreshing = true
                refreshMembership(membership: membership) {
                    try? modelContext.save()
                    refreshing = false
                }
            }
        }
        .padding()
    }
}
