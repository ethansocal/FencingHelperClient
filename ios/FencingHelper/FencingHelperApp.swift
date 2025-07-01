//
//  FencingHelperApp.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/23/24.
//

import SwiftData
import SwiftUI
import TipKit

#if targetEnvironment(simulator)
var BASE_URL = "http://localhost:3000/v2"
#else
var BASE_URL = "http://72.194.109.90:3000/v2"
#endif

@main
struct FencingHelperApp: App {
    var sharedModelContainer: ModelContainer = {
        let schema = Schema([
            Membership.self,
            StoredBoutData.self,
            RecordingInfo.self,
        ])
        let modelConfiguration = ModelConfiguration(schema: schema, isStoredInMemoryOnly: false)
        let urlApp = FileManager.default.urls(
            for: .applicationSupportDirectory, in: .userDomainMask
        ).last
        let url = urlApp!.appendingPathComponent("default.store")
        if FileManager.default.fileExists(atPath: url.path) {
            print("swiftdata db at \(url.absoluteString)")
        }

        do {
            return try ModelContainer(for: schema, configurations: [modelConfiguration])
        } catch {
            fatalError("Sadly, could not create ModelContainer: \(error)")
        }
    }()

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(sharedModelContainer)
    }

    init() {
        do {
            try Tips.configure([
                .displayFrequency(.immediate)
            ])
        } catch {
            print("Error initializing TipKit \(error.localizedDescription)")
        }
    }
}
