//
//  PoolFencerList.swift
//  FencingHelper
//
//  Created by Ethan Henry on 1/1/25.
//

import SwiftUI

struct PoolFencerList: View {
    var fencers: [PoolFencer]

    @Environment(\.colorScheme) var colorScheme


    var body: some View {
        Group {
            ForEach(fencers) { fencer in
                HStack {
                    Text(fencer.id.formatted())
                        .frame(width: 25)
                    VStack(alignment: .leading) {
                        Text(fencer.formattedName)
                            .font(.headline)
                        Text(fencer.affiliation)
                            .foregroundStyle(.secondary)
                    }
                    Spacer()
                }
                .strikethrough(fencer.withdrawn != nil)
            }
            .multilineTextAlignment(.leading)
        }
    }
}
