//
//  ContentView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/24/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            Tab("Tournament", systemImage: "figure.fencing") {
                TournamentsView()
            }
            Tab("Memberships", systemImage: "person.text.rectangle") {
                MembershipsView()
            }
//            Tab("Recordings", systemImage: "photo.on.rectangle") {
//                RecordingsView()
//            }
        }
    }
}

#Preview {
    ContentView()
}
