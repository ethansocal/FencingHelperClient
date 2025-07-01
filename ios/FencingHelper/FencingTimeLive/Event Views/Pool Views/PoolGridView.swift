//
//  PoolGridView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 1/1/25.
//

import SwiftUI

struct PoolGridView: View {
    var pool: Pool
    var realData: Binding<Bool>
    var storedBouts: [StoredBoutData]

    @Environment(\.colorScheme) var colorScheme

    var transparent: Color {
        Color.white.opacity(0)
    }

    var isUsingRealData: Bool {
        pool.finished && realData.wrappedValue
    }

    var body: some View {
        List {
            if pool.finished {
                Section {
                    Toggle("Real Data", isOn: realData)
                }
            }
            Section {
                ScrollView(.horizontal) {
                    Grid(horizontalSpacing: 0, verticalSpacing: 0) {
                        GridRow {
                            transparent.gridCellUnsizedAxes([.horizontal, .vertical])
                                .frame(width: gridCellLength / 2, height: gridCellLength / 2)
                            ForEach(pool.fencers) { fencer in
                                Text(fencer.id.formatted())
                                    .bold()
                                .frame(width: gridCellLength, height: gridCellLength / 2)
                            }
                        }
                        ForEach(pool.fencers) { fencer in
                            GridRow {
                                Text(fencer.id.formatted())
                                .bold()
                                .frame(width: gridCellLength / 2, height: gridCellLength)
                                if isUsingRealData {
                                    if let scores = fencer.scores {
                                        ForEach(scores) { score in
                                            if score.happened {
                                                Text(formatScore(score.score!, score.win))
                                                    .font(.system(size: 20))
                                                    .frame(
                                                        width: gridCellLength,
                                                        height: gridCellLength
                                                    )
                                                    .background(scoreColor(score.win))
                                            } else if score.filler {
                                                Text("")
                                                    .frame(
                                                        width: gridCellLength,
                                                        height: gridCellLength
                                                    )
                                                    .background(.black)
                                            } else if score.withdrawn {
                                                Text("")
                                                    .frame(
                                                        width: gridCellLength,
                                                        height: gridCellLength
                                                    )
                                                    .background(.gray)
                                            } else {
                                                Text("")
                                                    .frame(
                                                        width: gridCellLength,
                                                        height: gridCellLength
                                                    )
                                                    .background(.gray.opacity(0.1))
                                            }
                                        }
                                        .border(.gray.opacity(0.2))
                                    }
                                } else {
                                    ForEach(1..<(pool.fencers.count + 1), id: \.self) { otherNum in
                                        if fencer.id == otherNum {
                                            Text("")
                                                .frame(
                                                    width: gridCellLength, height: gridCellLength
                                                )
                                                .background(.black)
                                        } else if let boutResult = storedBouts.first(where: {
                                            ($0.leftFencerPos == otherNum
                                                && $0.rightFencerPos == fencer.id)
                                                || ($0.rightFencerPos == otherNum
                                                    && $0.leftFencerPos == fencer.id)
                                        }),
                                            let score = boutResult.leftFencerPos == fencer.id
                                                ? boutResult.leftFencerScore
                                                : boutResult.rightFencerScore,
                                            let won = boutResult.leftFencerPos == fencer.id
                                                ? boutResult.leftWon
                                                : boutResult.leftWon.map({ !$0 })
                                        {
                                            Text(formatScore(score, won))
                                                .font(.system(size: 20))
                                                .frame(
                                                    width: gridCellLength, height: gridCellLength
                                                )
                                                .background(scoreColor(won))
                                        } else {
                                            Text("")
                                                .frame(
                                                    width: gridCellLength, height: gridCellLength
                                                )
                                                .background(.gray.opacity(0.1))
                                        }
                                    }
                                    .border(.gray.opacity(0.2))
                                }
                            }
                        }
                    }
                    .padding(.horizontal, 15)
                }
                .listRowInsets(EdgeInsets(top: 15, leading: 0, bottom: 15, trailing: 0))
            }
            Section("Fencers") {
                PoolFencerList(fencers: pool.fencers)
            }
        }
        .navigationTitle("Pool Grid")
    }
}
