//
//  StoredBoutData.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/31/24.
//

import SwiftData

typealias StoredBoutData = StoredBoutDataSchemaV1.StoredBoutData

enum StoredBoutDataSchemaV1: VersionedSchema {
    static var versionIdentifier = Schema.Version(1, 0, 0)

    static var models: [any PersistentModel.Type] {
        [StoredBoutData.self]
    }

    @Model
    class StoredBoutData {
        var poolId: String
        var leftFencerPos: Int
        var rightFencerPos: Int
        var leftFencerScore: Int?
        var rightFencerScore: Int?
        var leftWon: Bool?
        var finished: Bool

        init(
            poolId: String, leftFencerPos: Int, rightFencerPos: Int, leftFencerScore: Int? = nil,
            rightFencerScore: Int? = nil, leftWon: Bool? = nil, finished: Bool
        ) {
            self.poolId = poolId
            self.leftFencerPos = leftFencerPos
            self.rightFencerPos = rightFencerPos
            self.leftFencerScore = leftFencerScore
            self.rightFencerScore = rightFencerScore
            self.leftWon = leftWon
            self.finished = finished
        }
    }
}
