//
//  Item.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/23/24.
//

import Foundation
import SwiftData

typealias Membership = MembershipSchemaV1.Membership

enum MembershipSchemaV1: VersionedSchema {
    static var versionIdentifier = Schema.Version(1, 0, 0)

    static var models: [any PersistentModel.Type] {
        [Membership.self]
    }

    @Model
    final class Membership {
        var order: Int
        @Attribute(.unique) var usfaId: Int
        var name: String
        var year: Int?
        var country: String
        var countryIOC: String
        var club: String?
        var clubId: Int?
        var clubSymbol: String?
        var epee: String
        var foil: String
        var saber: String
        var lastRefreshed: Date

        init(
            order: Int, usfaId: Int, name: String, year: Int?, country: String, countryIOC: String,
            club: String?, clubId: Int?, clubSymbol: String?, epee: String, foil: String,
            saber: String,
            lastRefreshed: Date
        ) {
            self.order = order
            self.usfaId = usfaId
            self.name = name
            self.year = year
            self.country = country
            self.countryIOC = countryIOC
            self.club = club
            self.clubId = clubId
            self.clubSymbol = clubSymbol
            self.epee = epee
            self.foil = foil
            self.saber = saber
            self.lastRefreshed = lastRefreshed
        }
    }
}
