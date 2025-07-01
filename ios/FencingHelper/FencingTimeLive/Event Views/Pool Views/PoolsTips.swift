//
//  Tips.swift
//  FencingHelper
//
//  Created by Ethan Henry on 1/1/25.
//

import TipKit

struct BoutClickTip: Tip {
    @Parameter
    static var inFakeMode: Bool = false

    var title: Text {
        Text("Clicking Bouts")
    }

    var message: Text? {
        Text(
            "Clicking a bout marks the bout as completed or record a score."
        )
    }

    var image: Image? {
        Image(systemName: "hand.tap.fill")
    }

    var rules: [Rule] {
        // Define a rule based on the app state.
        #Rule(Self.$inFakeMode) {
            // Set the conditions for when the tip displays.
            $0 == true
        }
    }

    var options: [any Option] {
        MaxDisplayCount(3)
    }
}

struct TrackingFencerTip: Tip {
    var title: Text {
        Text("Tracking Fencers")
    }

    var message: Text? {
        Text(
            "Tracking a fencer will highlight their bouts and allow you to enter scores."
        )
    }

    var image: Image? {
        Image(systemName: "figure.fencing")
    }

    var options: [any Option] {
        // Tip will only appear 3 times before it is automatically invalidated.
        MaxDisplayCount(3)
    }
}
