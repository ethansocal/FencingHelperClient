//
//  PoolStatsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 1/1/25.
//
import SwiftUI

struct PoolStatsView: View {
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
                Grid(horizontalSpacing: 0, verticalSpacing: 0) {
                    GridRow {
                        transparent.gridCellUnsizedAxes([.horizontal, .vertical])
                            .frame(width: gridCellLength / 2, height: gridCellLength / 2)
                        ForEach(
                            [
                                String(localized: "V", comment: "pool win count"),
                                String(localized: "V / M"),
                                String(localized: "TS"),
                                String(localized: "TR"),
                                String(localized: "Ind"),
                            ], id: \.self
                        ) { statName in
                            Text(statName)
                                .bold()
                                .border(.gray.opacity(0.2))
                                .frame(width: gridCellLength, height: gridCellLength / 2)
                        }
                    }
                    ForEach(pool.fencers) { fencer in
                        GridRow {
                                Text(fencer.id.formatted())
                                    .foregroundStyle(.yellow)
                            .bold()
                            .frame(width: gridCellLength / 2, height: gridCellLength)
                            .border(.gray.opacity(0.2))
                            if isUsingRealData {
                                if let stats = fencer.stats {
                                    Group {
                                        Text(String(stats.v))
                                        Text(String(stats.vm))
                                        Text(String(stats.ts))
                                        Text(String(stats.tr))
                                        Text(formatIndicator(ind: stats.ind))
                                    }
                                    .font(.system(size: 20))
                                    .frame(width: gridCellLength, height: gridCellLength)
                                    .border(.gray.opacity(0.2))
                                } else if let withdrawn = fencer.withdrawn {
                                    ZStack {
                                        Color.gray.opacity(0.3).gridCellUnsizedAxes([
                                            .horizontal, .vertical,
                                        ])
                                        Text(withdrawn)
                                    }
                                    .gridCellColumns(5)
                                    .frame(width: gridCellLength * 5, height: gridCellLength)
                                }
                            } else {
                                Group {
                                    let v = storedBouts.count {
                                        ($0.leftFencerPos == fencer.id && $0.leftWon ?? false)
                                            || ($0.rightFencerPos == fencer.id
                                                && !($0.leftWon ?? true))
                                    }
                                    let m = storedBouts.count {
                                        $0.leftFencerPos == fencer.id
                                            || $0.rightFencerPos == fencer.id
                                    }
                                    let ts = storedBouts.reduce(
                                        0,
                                        {
                                            ($1.leftFencerPos == fencer.id
                                                ? ($1.leftFencerScore ?? 0)
                                                : ($1.rightFencerPos == fencer.id
                                                    ? ($1.rightFencerScore ?? 0) : 0)) + $0
                                        })
                                    let tr = storedBouts.reduce(
                                        0,
                                        {
                                            ($1.leftFencerPos == fencer.id
                                                ? ($1.rightFencerScore ?? 0)
                                                : ($1.rightFencerPos == fencer.id
                                                    ? ($1.leftFencerScore ?? 0) : 0)) + $0
                                        })
                                    Text(v.formatted())
                                    Text((m != 0 ? Double(v) / Double(m) : 0.0).formatted())
                                    Text(ts.formatted())
                                    Text(tr.formatted())
                                    Text(formatIndicator(ind: ts - tr))
                                }
                                .font(.system(size: 20))
                                .frame(width: gridCellLength, height: gridCellLength)
                                .border(.gray.opacity(0.2))
                            }
                        }
                    }
                }
            }
            Section("Fencers") {
                PoolFencerList(fencers: pool.fencers)
            }
        }
        .navigationTitle("Pool Stats")
    }
}
