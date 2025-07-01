//
//  PoolsUtils.swift
//  FencingHelper
//
//  Created by Ethan Henry on 1/1/25.
//

import SwiftUI

let gridCellLength: CGFloat = 50

func formatScore(_ score: Int, _ won: Bool) -> String {
    return "\(score.formatted())"
}

func scoreColor(_ won: Bool) -> Color {
    return won ? Color.green.opacity(0.5) : Color.red.opacity(0.5)
}

func calculateMostAfter(_ pool: PoolData, _ fencer: String) -> String {
    var counts = [String: Int]()
    for (index, bout) in pool.bouts.enumerated() {
        if index + 1 < pool.bouts.count
            && (pool.bouts[index + 1].leftPoolName == fencer
                || pool.bouts[index + 1].rightPoolName == fencer)
        {
            counts[bout.leftPoolName] = (counts[bout.leftPoolName] ?? 0) + 1
            counts[bout.rightPoolName] = (counts[bout.rightPoolName] ?? 0) + 1
        }
    }
    return counts.max(by: { $0.value < $1.value })?.key ?? ""
}
