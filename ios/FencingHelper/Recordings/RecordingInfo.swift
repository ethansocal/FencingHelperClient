//
//  RecordingInfo.swift
//  FencingHelper
//
//  Created by Ethan Henry on 3/15/25.
//
import SwiftData

@Model
final class RecordingInfo {
    var rightFencer: String?
    var rightFencerClub: String?
    var rightScore: Int?
    var leftFencer: String?
    var leftFencerClub: String?
    var leftScore: Int?
    var tournamentName: String?
    var eventName: String?
    var date: String?
    var bout: String?
    @Attribute(.unique) var videoURL: String

    init(
        videoURL: String, rightFencer: String? = nil, rightFencerClub: String? = nil, rightScore: Int? = nil, leftFencer: String? = nil,
        leftFencerClub: String? = nil, leftScore: Int? = nil, tournamentName: String? = nil, eventName: String? = nil,
        date: String? = nil, bout: String? = nil
    ) {
        self.videoURL = videoURL
        self.rightFencer = rightFencer
        self.rightFencerClub = rightFencerClub
        self.rightScore = rightScore
        self.leftFencer = leftFencer
        self.leftFencerClub = leftFencerClub
        self.leftScore = leftScore
        self.tournamentName = tournamentName
        self.eventName = eventName
        self.date = date
        self.bout = bout
    }
}
