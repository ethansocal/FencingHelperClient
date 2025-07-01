//
//  VideoContentView.swift
//  Aespa-iOS
//
//  Created by 이영빈 on 2023/06/07.
//

import Aespa
import SwiftUI

struct RecordingView: View {
    @State var isRecording = false
    @State var isFront = false

    @ObservedObject private var viewModel = VideoContentViewModel()

    var body: some View {
        ZStack {
            viewModel.preview
                .frame(
                    minWidth: 0,
                    maxWidth: .infinity,
                    minHeight: 0,
                    maxHeight: .infinity
                )
                .edgesIgnoringSafeArea(.all)

            VStack {
                Spacer()

                ZStack {
                    HStack {
                        Spacer()

                        // Position change + button
                        Button(action: {
                            viewModel.aespaSession?.common(
                                .position(position: isFront ? .back : .front))
                            isFront.toggle()
                        }) {
                            Image(systemName: "arrow.triangle.2.circlepath.camera.fill")
                                .resizable()
                                .foregroundColor(.white)
                                .scaledToFit()
                                .frame(width: 50, height: 50)
                                .padding(20)
                                .padding(.trailing, 20)
                        }
                        .shadow(radius: 5)
                        .contentShape(Rectangle())
                    }

                    // Shutter + button
                    recordingButtonShape(width: 60).onTapGesture {
                        if isRecording {
                            viewModel.aespaSession?.stopRecording()
                            isRecording = false
                        } else {
                            viewModel.aespaSession?.startRecording(
                                autoVideoOrientationEnabled: true)
                            isRecording = true
                        }
                    }
                }
            }
        }
        .toolbar(.hidden, for: .tabBar)
        .onAppear {
            print("starting")

            viewModel.startPreview()
        }
        .onDisappear {
            print("stopping")
            viewModel.stopPreview()
        }
    }
}

extension RecordingView {
    @ViewBuilder
    func roundRectangleShape(with image: Image, size: CGFloat) -> some View {
        image
            .resizable()
            .scaledToFill()
            .frame(width: size, height: size, alignment: .center)
            .clipped()
            .cornerRadius(10)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(.white, lineWidth: 1)
            )
            .padding(20)
    }

    @ViewBuilder
    func recordingButtonShape(width: CGFloat) -> some View {
        ZStack {
            Circle()
                .strokeBorder(isRecording ? .red : .white, lineWidth: 3)
                .frame(width: width)

            Circle()
                .fill(isRecording ? .red : .white)
                .frame(width: width * 0.8)
        }
        .frame(height: width)
    }
}

enum AssetType {
    case video
    case photo
}

struct VideoContentView_Previews: PreviewProvider {
    static var previews: some View {
        RecordingView()
    }
}
