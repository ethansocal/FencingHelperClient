//
//  MembershipEditView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import Combine
import SwiftData
import SwiftUI

struct MembershipEditView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var memberships: [Membership]

    @State private var isShowingCreateSheet = false

    var body: some View {
        List {
            ForEach(memberships.sorted(by: { $0.order < $1.order })) { membership in
                Text(
                    "\(membership.name.replacingOccurrences(of: "-", with: " ")) - \(String(membership.usfaId))"
                )
            }
            .onMove(perform: moveItems)
            .onDelete(perform: deleteItems)
        }
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                EditButton()
            }
            ToolbarItem(placement: .topBarTrailing) {
                NavigationLink {
                    MembershipCreateView()
                } label: {
                    Label("Add membership", systemImage: "plus")
                }
            }
            //            ToolbarItem(placement: .topBarTrailing) {
            //                Button(action: {}) {
            //                    Label("Refresh data", systemImage: "arrow.clockwise")
            //                }
            //            }
        }
        .navigationTitle("Edit Memberships")
    }

    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            for index in offsets {
                modelContext.delete(memberships.sorted(by: { $0.order < $1.order })[index])
            }
            try? modelContext.save()
        }
    }

    private func moveItems(from source: IndexSet, to destination: Int) {
        withAnimation {
            var revisedItems = memberships.sorted(by: { $0.order < $1.order })
            revisedItems.move(fromOffsets: source, toOffset: destination)
            for (index, item) in revisedItems.enumerated() {
                item.order = index
            }
            try? modelContext.save()
        }
    }
}

#Preview {
    NavigationStack {
        MembershipEditView()
            .modelContainer(for: Membership.self, inMemory: false)
    }
}
