//
//  ErrorView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/29/24.
//
import SwiftUI

struct ErrorView: View {
    var error: Error
    var retry: () async -> Void

    var body: some View {
        VStack {
            Text("Sorry, something went wrong fetching the data.")
            Text("Error message: \(error.localizedDescription)")
            Button(action: {
                Task {
                    await retry()
                }
            }) {
                Label("Retry", systemImage: "arrow.clockwise")
            }
        }
        .onAppear {
            print("Error: \(error)")
        }
    }
}
