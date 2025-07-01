//
//  ImportView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 3/15/25.
//

import AVKit
import PhotosUI
import SwiftData
import SwiftUI

struct CheckBoxView: View {
    @Binding var checked: Bool

    var body: some View {
        HStack {
            Image(systemName: checked ? "checkmark.square.fill" : "square")
                .foregroundColor(checked ? Color(UIColor.systemBlue) : Color.secondary)
        }
        .onTapGesture {
            self.checked.toggle()
        }
        .contentShape(Rectangle())
    }
}

struct VideoView: View {
    var videoAsset: PHAsset

    @State private var loadedVideo: AVAsset? = nil
    @State private var assetRequest: PHImageRequestID? = nil

    var body: some View {
        ZStack {
            if let loadedVideo {
                VideoPlayer(player: AVPlayer(playerItem: AVPlayerItem(asset: loadedVideo)))
                    .scaledToFit()
                    .frame(width: 300, height: 300)
            } else {
                ProgressView()
            }
        }
        .task {
            let requestOptions = PHVideoRequestOptions()
            requestOptions.isNetworkAccessAllowed = true
            print("Finding video")
            assetRequest = PHCachingImageManager.default().requestAVAsset(
                forVideo: videoAsset, options: requestOptions
            ) { (video, _, info) in
                print(info)
                if let video = video {
                    // Launch video player in the main thread
                    self.loadedVideo = video
                }
            }
        }
        .onDisappear {
            if let assetRequest {
                PHCachingImageManager.default().cancelImageRequest(assetRequest)
            }
        }
    }
}

struct ThumbnailView: View {
    var video: PHAsset
    @State private var image: UIImage? = nil

    var body: some View {
        ZStack {
            if let image {
                Image(uiImage: image)
            } else {
                ProgressView()
            }
        }
        .task {
            PHCachingImageManager.default().requestImage(
                for: video,
                targetSize: CGSize(width: 100, height: 100),
                contentMode: .aspectFill,
                options: nil
            ) { (photo, _) in

                self.image = photo

            }
        }
    }
}

//struct ImportInfo {
//    var thing;
//}

struct ImportView: View {
    @Query private var memberships: [Membership]
    @Query private var alreadyImportedVideos: [RecordingInfo]
    @State private var videos = [PHAsset: Bool]()
    @State private var importingPeople: [Membership] = []
    
    @Environment(\.dismiss) private var dismiss
    

    func requestVideoAuthorization() {
        PHPhotoLibrary.requestAuthorization(for: .readWrite) { status in

            // Handle restricted or denied state
            if status == .restricted || status == .denied {
                print("Status: Restricted or Denied")
            }

            // Handle limited state
            if status == .limited {
                self.fetchVideos()
                print("Status: Limited")
            }

            // Handle authorized state
            if status == .authorized {
                self.fetchVideos()
                print("Status: Full access")
            }
        }

    }
    func fetchVideos() {
        // Fetch all video assets from the Photos Library as fetch results
        let fetchResults = PHAsset.fetchAssets(with: PHAssetMediaType.video, options: nil)

        // Loop through all fetched results
        
        var newVideos = [PHAsset: Bool]()

        fetchResults.enumerateObjects({ (object, count, stop) in
            if (!alreadyImportedVideos.contains(where: {object.localIdentifier == $0.videoURL})) {
                newVideos[object] = self.videos[object] ?? false
            }
        })
        self.videos = newVideos
    }

    var body: some View {
        List {
            if memberships.count > 1 {
                Section("People in Imported Videos") {
                    ForEach(memberships, id: \.id) { membership in
                        HStack {
                            Text(membership.name.replacingOccurrences(of: "-", with: " "))
                            Spacer()
                            CheckBoxView(
                                checked: Binding(
                                    get: { importingPeople.contains(membership) },
                                    set: {
                                        if $0 {
                                            importingPeople.append(membership)
                                        } else {
                                            importingPeople.removeAll {
                                                $0.id == membership.id
                                            }
                                        }
                                    }))
                        }
                    }
                }
            }
            else if memberships.isEmpty {
                Text("Adding someone to your memberships makes importing videos easier!")
                NavigationLink {
                    MembershipCreateView()
                } label: {
                    Label("Add membership", systemImage: "plus")
                }
            }
            Text("Mark the checkbox for the videos that are of fencing")
            if !videos.isEmpty {
                Section("Fencing Videos") {
                    ForEach(
                        videos.filter({ $0.value }).sorted(by: {
                            ($0.key.creationDate ?? Date.distantPast)
                                > ($1.key.creationDate ?? Date.distantPast)
                        }), id: \.key.localIdentifier
                    ) { i in
                        HStack {
                            NavigationLink {
                                VideoView(videoAsset: i.key)
                            } label: {
                                ThumbnailView(video: i.key)
                            }
                            Spacer()
                            CheckBoxView(
                                checked: Binding(get: { i.value }, set: { videos[i.key] = $0 }))
                        }
                    }
                }
                Section("Not Fencing Videos") {
                    ForEach(
                        videos.filter({ !$0.value }).sorted(by: {
                            ($0.key.creationDate ?? Date.distantPast)
                                > ($1.key.creationDate ?? Date.distantPast)
                        }), id: \.key.localIdentifier
                    ) { i in
                        HStack {
                            NavigationLink {
                                VideoView(videoAsset: i.key)
                            } label: {
                                ThumbnailView(video: i.key)
                            }
                            Spacer()
                            CheckBoxView(
                                checked: Binding(get: { i.value }, set: { videos[i.key] = $0 }))
                        }
                    }
                }
            } else {
                Text("No videos found!")
            }
        }
        .task {
            requestVideoAuthorization()
        }
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                NavigationLink {
                    ImportStep2View(
                        videos: videos.filter({ $0.value }),
                        people: memberships.count == 1 ? memberships : importingPeople,
                        dismissTopLevel: dismiss
                    )
                } label: {
                    Label("Import", systemImage: "arrow.right.circle")
                }
                .disabled(!videos.values.contains(true))
            }
        }
    }
}

#Preview {
    ImportView()
}

struct BoutWithEvent: Hashable {
    var bout: BoutHistoryEvent.Bout
    var event: BoutHistoryEvent
}

struct BoutDataEditor: View {
    var video: PHAsset
    var editVideoInfo: (String?, String?, Int?, String?, String?, Int?, String?, String?, String?, String?) -> Void
    var events: [BoutHistoryEvent]
    
    @State var picked: BoutWithEvent?
    
    var body: some View {
        List {
            VideoView(videoAsset: video)
            Picker("Choose bout", selection: $picked, content: {
                Text("None").tag(nil as BoutWithEvent?)
                ForEach(events, id: \.self) { event in
                    ForEach(event.bouts, id: \.self) { bout in
                        Text("\(event.competitionTitle), \(event.eventTitle), \(event.eventDate) - \(bout.bout), \(event.name) v \(bout.opponent)")
                            .tag(BoutWithEvent(bout: bout, event: event))
                    }
                }
            })
            .pickerStyle(.navigationLink)
        }
        .onDisappear {
            print(picked)
            editVideoInfo(picked?.bout.opponent, picked?.bout.opponentClub, picked?.bout.opponentScore, picked?.event.name, picked?.event.club, picked?.bout.score, picked?.event.competitionTitle, picked?.event.eventTitle, picked?.event.eventDate, picked?.bout.bout)
        }
    }
}


struct ImportStep2View: View {
    var videos: [PHAsset: Bool]
    var people: [Membership]
    var dismissTopLevel: DismissAction
    
    @State var error: Error?
    @State var bouts: [BoutHistoryEvent] = []
    
    @State var videosInfo: [PHAsset: RecordingInfo] = [:]
    @Environment(\.modelContext) private var modelContext
    @Environment(\.dismiss) private var dismiss
    
    
    func fetchData(usfaId: String, name: String) async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/boutHistory?usfaId=\(usfaId)&name=\(name)")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.bouts.append(contentsOf: try JSONDecoder().decode([BoutHistoryEvent].self, from: data))
            print("fetched bouts")
        } catch {
            print(error)
            print("\(BASE_URL)/boutHistory?usfaId=\(String(usfaId))&name=\(name)")
            self.error = error
        }
    }

    
    var body: some View {
        List {
            let sorted = videosInfo.sorted(by: {
                ($0.key.creationDate ?? Date.distantPast)
                    > ($1.key.creationDate ?? Date.distantPast)
            })
            ForEach(
                Array(zip(sorted.indices, sorted)), id: \.1.key.localIdentifier
            ) { index, i in
                HStack {
                    NavigationLink {
                        BoutDataEditor(video: i.key, editVideoInfo: { rightFencer, rightFencerClub, rightScore, leftFencer,
                            leftFencerClub, leftScore, tournamentName, eventName,
                            date, bout in
                            sorted[index].value.rightFencer = rightFencer
                            sorted[index].value.rightFencerClub = rightFencerClub
                            sorted[index].value.rightScore = rightScore
                            sorted[index].value.leftFencer = leftFencer
                            sorted[index].value.leftFencerClub = leftFencerClub
                            sorted[index].value.leftScore = leftScore
                            sorted[index].value.tournamentName = tournamentName
                            sorted[index].value.eventName = eventName
                            sorted[index].value.date = date
                            sorted[index].value.bout = bout
                        }, events: bouts)
                    } label: {
                        ThumbnailView(video: i.key)
                    }
                }
            }
        }
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button("Import") {
                    for video in videosInfo.values {
                        print("importing video")
                        print(video.videoURL)
                        print(video.date)
                        modelContext.insert(video)
                    }
                    try? modelContext.save()
                    dismiss()
                    dismissTopLevel()
                }
            }
        }
        .task {
            bouts = []
            videos.keys.forEach { video in
                videosInfo[video] = RecordingInfo(videoURL: video.localIdentifier)
            }
            print(people)
            for i in people {
                await fetchData(usfaId: String(i.usfaId), name: i.name)
            }
        }
    }
}

struct BoutHistoryEvent: Decodable, Hashable {
    var name: String
    var competitionTitle: String
    var eventTitle: String
    var eventRating: String
    var eventAgeGroup: String?
    var eventDate: String
    var place: Int
    var eventTotalPeople: Int
    var seed: Int
    var rank: String
    var rating: String
    var club: String
    var bouts: [Bout]
    
    struct Bout: Decodable, Hashable {
        var bout: String
        var won: Bool
        var difficulty: String
        var score: Int
        var opponentScore: Int
        var country: String
        var countryIOC: String
        var opponent: String
        var opponentUsfaId: String
        var opponentUrlName: String
        var opponentSeed: String
        var opponentRank: String
        var opponentRating: String
        var opponentPlace: Int
        var opponentClub: String
        var opponentStrength: String
        var strength: String
        var strengthChange: String
        var strengthWentUp: Bool
        var chanceOfVictory: String
    }
}
