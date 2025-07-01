//
//  ScoreEntry.swift
//  FencingHelper
//
//  Created by Ethan Henry on 1/1/25.
//

import Combine
import SwiftData
import SwiftUI
import TipKit

struct ScoreEntry: View {
    var bout: Bout
    var poolId: String
    var storedBout: StoredBoutData?
    var tracking: String

    @Environment(\.modelContext) private var modelContext
    @Environment(\.dismiss) var dismiss

    @State var leftPoolScore = ""
    @FocusState var leftFocused
    @State var leftWon = false
    @State var rightPoolScore = ""
    @FocusState var rightFocused

    var body: some View {
        VStack {
            HStack(spacing: 0) {
                HStack {
                    Text("\(bout.rightPoolPos)")
                        .foregroundStyle(.secondary)
                        .frame(minWidth: 20)
                    Text(bout.rightPoolFormattedName)
                        .bold(bout.rightPoolName == tracking)
                    Spacer()
                    TextField("", text: $rightPoolScore)
                        .textFieldStyle(.roundedBorder)
                        .focused($rightFocused)
                        .onReceive(Just(rightPoolScore)) { newValue in
                            let filtered = newValue.filter { "0123456789".contains($0) }
                            if filtered != newValue {
                                self.rightPoolScore = filtered
                            }
                            if Int(self.rightPoolScore) != nil && 0 <= Int(self.rightPoolScore)!
                                && Int(self.rightPoolScore)! < 5 && Int(self.leftPoolScore) == nil
                            {
                                self.leftPoolScore = "5"
                            }
                        }
                        .multilineTextAlignment(.center)
                        .keyboardType(.numberPad)
                        .frame(width: 30, height: 30, alignment: .center)
                }
                HStack {
                    TextField("", text: $leftPoolScore)
                        .textFieldStyle(.roundedBorder)
                        .multilineTextAlignment(.center)
                        .focused($leftFocused)
                        .onReceive(Just(leftPoolScore)) { newValue in
                            let filtered = newValue.filter { "0123456789".contains($0) }
                            if filtered != newValue {
                                self.leftPoolScore = filtered
                            }
                            if Int(self.leftPoolScore) != nil && 0 <= Int(self.leftPoolScore)!
                                && Int(self.leftPoolScore)! < 5 && Int(self.rightPoolScore) == nil
                            {
                                self.rightPoolScore = "5"
                            }
                        }
                        .keyboardType(.numberPad)
                        .frame(width: 30, height: 30, alignment: .center)
                    Spacer()
                    Text(bout.leftPoolFormattedName)
                        .bold(bout.leftPoolName == tracking)
                        .multilineTextAlignment(.trailing)
                    Text("\(bout.leftPoolPos)")
                        .foregroundStyle(.secondary)
                        .frame(minWidth: 20)
                }
            }
            if Int(rightPoolScore) != nil && Int(leftPoolScore) != nil
                && Int(rightPoolScore)! == Int(leftPoolScore)!
            {
                HStack {
                    Toggle("Right Won", isOn: Binding(get: { !leftWon }, set: { leftWon = !$0 }))
                        .toggleStyle(.button)
                    Spacer()
                    Toggle("Left Won", isOn: $leftWon)
                        .toggleStyle(.button)

                }
            }
            Button("Save") {
                if Int(leftPoolScore) != nil && Int(rightPoolScore) != nil {
                    if Int(leftPoolScore)! > Int(rightPoolScore)! {
                        leftWon = true
                    } else if Int(leftPoolScore)! < Int(rightPoolScore)! {
                        leftWon = false
                    }
                    if let storedBout {
                        storedBout.leftFencerScore = Int(leftPoolScore)!
                        storedBout.rightFencerScore = Int(rightPoolScore)!
                        storedBout.leftWon = leftWon
                        storedBout.finished = true
                    } else {
                        modelContext.insert(
                            StoredBoutData(
                                poolId: poolId, leftFencerPos: bout.leftPoolPos,
                                rightFencerPos: bout.rightPoolPos,
                                leftFencerScore: Int(leftPoolScore)!,
                                rightFencerScore: Int(rightPoolScore)!,
                                leftWon: leftWon, finished: true))
                    }
                    dismiss()
                }
            }
            .buttonStyle(.borderedProminent)
        }
        .onAppear {
            if let storedBout {
                if let newLeftPoolScore = storedBout.leftFencerScore {
                    leftPoolScore = String(newLeftPoolScore)
                }
                leftWon = storedBout.leftWon ?? false
                if let newRightPoolScore = storedBout.rightFencerScore {
                    rightPoolScore = String(newRightPoolScore)
                }
            }
        }
    }
}

struct BoutRow: View {
    var bout: Bout
    var poolId: String
    var realData: Bool
    var tracking: String
    var storedBout: StoredBoutData?
    var trackingEveryoneScores: Bool
    var invalidate: () -> Void

    @Environment(\.modelContext) private var modelContext

    @State var showingScoreEntry = false

    var body: some View {
        Button(action: {
            if !realData {
                if bout.rightPoolName == tracking || bout.leftPoolName == tracking
                    || trackingEveryoneScores
                {
                    showingScoreEntry = true
                } else {
                    if let storedBout {
                        storedBout.finished.toggle()
                    } else {
                        modelContext.insert(
                            StoredBoutData(
                                poolId: poolId, leftFencerPos: bout.leftPoolPos,
                                rightFencerPos: bout.rightPoolPos,
                                finished: true))
                    }
                }
            }
            invalidate()
        }) {
            HStack(spacing: 0) {
                HStack {
                    Text("\(bout.rightPoolPos)")
                        .foregroundStyle(.secondary)
                        .frame(minWidth: 20)
                    Text(bout.rightPoolFormattedName)
                        .bold(bout.rightPoolName == tracking)
                    Spacer()
                    if realData {
                        if let rightPoolScore = bout.rightPoolScore, let rightWon = bout.rightWon {
                            Text(formatScore(rightPoolScore, rightWon))
                                .frame(width: 30, height: 30, alignment: .center)
                                .background(scoreColor(rightWon))
                        } else {
                            Text("?")
                                .frame(width: 30, height: 30, alignment: .center)
                        }
                    } else {
                        if let storedBout {
                            if let storedRightFencerScore = storedBout.rightFencerScore,
                                let storedLeftWon = storedBout.leftWon
                            {
                                if !realData || bout.leftPoolName == tracking
                                    || bout.rightPoolName == tracking
                                {
                                    Text(formatScore(storedRightFencerScore, !storedLeftWon))
                                        .frame(width: 30, height: 30, alignment: .center)
                                        .background(scoreColor(!storedLeftWon))
                                }
                            }
                        }
                    }
                }
                .contentShape(Rectangle())
                HStack {
                    if realData {
                        if let leftPoolScore = bout.leftPoolScore,
                            let leftWon = bout.rightWon.map({ !$0 })
                        {
                            Text(formatScore(leftPoolScore, leftWon))
                                .frame(width: 30, height: 30, alignment: .center)
                                .background(scoreColor(leftWon))
                        } else {
                            Text("?")
                                .frame(width: 30, height: 30, alignment: .center)
                        }
                    } else {
                        if let storedBout {
                            if let storedLeftFencerScore = storedBout.leftFencerScore,
                                let storedLeftWon = storedBout.leftWon
                            {
                                if !realData || bout.leftPoolName == tracking
                                    || bout.rightPoolName == tracking
                                {
                                    Text(formatScore(storedLeftFencerScore, storedLeftWon))
                                        .frame(width: 30, height: 30, alignment: .center)
                                        .background(scoreColor(storedLeftWon))
                                }
                            }
                        }
                    }
                    Spacer()
                    Text(bout.leftPoolFormattedName)
                        .bold(bout.leftPoolName == tracking)
                        .multilineTextAlignment(.trailing)
                    Text("\(bout.leftPoolPos)")
                        .foregroundStyle(.secondary)
                        .frame(minWidth: 20)
                }
                .contentShape(Rectangle())
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .sheet(isPresented: $showingScoreEntry) {
            ScoreEntry(bout: bout, poolId: poolId, storedBout: storedBout, tracking: tracking)
                .presentationDetents([.medium])
        }
        .listRowBackground(
            !realData && storedBout != nil && storedBout!.finished
                ? Color.green.opacity(0.2)
                : bout.rightPoolName == tracking || bout.leftPoolName == tracking
                    ? Color.yellow.opacity(0.2) : nil
        )
    }
}

struct PoolView: View {
    var event: TournamentData.Day.Event
    var roundId: String
    var pool: Pool

    var trackingFencerTip = TrackingFencerTip()
    var boutClickTip = BoutClickTip()

    @State var poolData: PoolData?
    @State var error: Error?
    @AppStorage var tracking: String
    @State var realData: Bool = true
    @AppStorage var trackingEveryoneScores: Bool

    @Query var storedBouts: [StoredBoutData]

    init(event: TournamentData.Day.Event, roundId: String, pool: Pool) {
        self.event = event
        self.roundId = roundId
        self.pool = pool

        let poolId = pool.id

        let predicate = #Predicate<StoredBoutData> {
            return $0.poolId == poolId
        }

        _tracking = AppStorage(wrappedValue: "None", "pool.tracking.\(pool.id)")
        _trackingEveryoneScores = AppStorage(
            wrappedValue: false, "pool.trackingEveryoneScores.\(pool.id)")

        _storedBouts = Query(filter: predicate)

    }

    func fetchData() async {
        do {
            error = nil
            let url = URL(
                string: "\(BASE_URL)/event/\(event.id)/\(roundId)/\(pool.id)")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.poolData = try JSONDecoder().decode(PoolData.self, from: data)
        } catch {
            self.error = error
        }
    }

    var test: some View {
        PoolStatsView(pool: pool, realData: $realData, storedBouts: storedBouts)
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let poolData {
                List {
                    Section {
                        if poolData.happened {
                            Toggle("Real Data", isOn: $realData.animation())
                        }
                        if !realData || !poolData.happened {
                            Toggle("Track Everyone's Scores", isOn: $trackingEveryoneScores)
                        }
                        Picker("Tracking Fencer", selection: $tracking.animation()) {
                            Text("None").tag("None")
                            ForEach(poolData.fencers, id: \.self) { fencer in
                                Text(fencer)
                            }
                        }
                        .popoverTip(trackingFencerTip)
                        if tracking != "None" {
                            HStack {
                                Text("Usually After:")
                                Spacer()
                                Text(calculateMostAfter(poolData, tracking))
                                    .foregroundStyle(.secondary)
                            }
                        }
                        NavigationLink {
                            List {
                                PoolFencerList(fencers: pool.fencers)
                            }
                            .navigationTitle("Pool Fencers")
                        } label: {
                            Label("Pool Fencers", systemImage: "person.fill")
                        }
                        NavigationLink {
                            PoolGridView(pool: pool, realData: $realData, storedBouts: storedBouts)
                        } label: {
                            Label("Pool Grid", image: "pool.3x3")
                        }
                        NavigationLink {
                            PoolStatsView(pool: pool, realData: $realData, storedBouts: storedBouts)
                        } label: {
                            Label("Pool Stats", systemImage: "list.number")
                        }
                    }

                    Section("Bout List") {
                        HStack {
                            Text("Right Fencer")
                            Spacer()
                            Text("Left Fencer")
                        }
                        .listRowSeparator(.hidden, edges: .bottom)
                        TipView(boutClickTip, arrowEdge: .bottom)
                        ForEach(poolData.bouts) { bout in
                            BoutRow(
                                bout: bout, poolId: pool.id,
                                realData: realData && poolData.happened,
                                tracking: tracking,
                                storedBout: storedBouts.first {
                                    $0.leftFencerPos == bout.leftPoolPos
                                        && $0.rightFencerPos == bout.rightPoolPos
                                }, trackingEveryoneScores: trackingEveryoneScores,
                                invalidate: { boutClickTip.invalidate(reason: .actionPerformed) })
                        }
                    }
                }
            } else {
                ProgressView()
            }
        }
        .onAppear {
            BoutClickTip.inFakeMode = !pool.finished
        }
        .onChange(of: realData) {
            BoutClickTip.inFakeMode = !realData
        }
        .navigationTitle("Pool #\(pool.poolNum)")
        .task {
            await fetchData()
        }
        .refreshable {
            await fetchData()
        }
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string:
                                "https://fencingtimelive.com/pools/details/\(event.id)/\(roundId)/\(pool.id)"
                        )!
                    )
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
        }
        .onChange(of: tracking) {
            trackingFencerTip.invalidate(reason: .actionPerformed)
        }
    }
}

struct PoolData: Decodable {
    let bouts: [Bout]
    let fencers: [String]
    let formattedFencers: [String]
    let happened: Bool
}

struct Bout: Decodable, Identifiable {
    let id: Int
    let rightPoolPos: Int
    let rightPoolName: String
    let rightPoolFormattedName: String
    let rightPoolScore: Int?
    let rightWon: Bool?
    let leftPoolPos: Int
    let leftPoolName: String
    let leftPoolFormattedName: String
    let leftPoolScore: Int?
    let happened: Bool
}
