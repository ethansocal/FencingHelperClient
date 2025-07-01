//
//  RecordingsView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 3/15/25.
//

import SwiftData
import SwiftUI
import Photos

struct VideoFetcherView: View {
    var localIdentifier: String
    
    @State private var video: PHAsset?
    
    var body: some View {
        Group {
            if let video {
                VideoView(videoAsset: video)
            } else {
                ProgressView()
            }
        }
            .task {
                video = PHAsset.fetchAssets(withLocalIdentifiers: [localIdentifier], options: nil).firstObject
            }
    }
}

func formatRecordingInfo(recording: RecordingInfo) -> String {
    let tournamentInfo = [recording.tournamentName, recording.eventName, recording.date].compactMap({$0}).joined(separator: ", ")
    
    let fencers = recording.leftFencer == nil && recording.rightFencer == nil ? nil : [recording.leftFencer, recording.rightFencer].compactMap({$0}).joined(separator: " v ")
    
    let score = recording.leftScore == nil && recording.rightScore == nil ? nil : [recording.leftScore, recording.rightScore].compactMap({$0.map(String.init)}).joined(separator: ":")
    
    let resultInfo = [recording.bout, fencers, score].compactMap({$0}).joined(separator: ", ")
    
    return [tournamentInfo, resultInfo].compactMap({$0}).joined(separator: " - ")
}

struct RecordingsView: View {
    @Query private var recordings: [RecordingInfo]
    @Environment(\.modelContext) private var modelContext
    
    var body: some View {
        NavigationStack {
            List {
                if (recordings.isEmpty) {
                    Text("You have no recordings!")
                    NavigationLink {
                        ImportView()
                    } label: {
                        Text("Import recordings")
                    }
                }
                ForEach(recordings) { recording in
                    NavigationLink{
                        VideoFetcherView(localIdentifier: recording.videoURL)
                    } label: {
                        Text(formatRecordingInfo(recording: recording))
                    }
                }
                .onDelete(perform: deleteItems)
            }
            .navigationTitle("Recordings")
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    NavigationLink {
                        ImportView()
                    } label: {
                        Text("Import")
                    }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    EditButton()
                }
                ToolbarItem(placement: .topBarTrailing) {
                    NavigationLink {
                        RecordingView()
                    } label: {
                        Label("Record", systemImage: "record.circle")
                    }
                }
            }
        }
    }
    
    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            for index in offsets {
                modelContext.delete(recordings[index])
            }
            try? modelContext.save()
        }
    }

}

#Preview {
    RecordingsView()
        .modelContainer(for: RecordingInfo.self, inMemory: false)
}
