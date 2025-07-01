//
//  FencingTimeLiveWebView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/30/24.
//

import SwiftUI
import WebKit

struct FencingTimeLiveWebView: View {
    var url: URL
    var decidePolicy:
        (
            (
                _ webView: WKWebView, _ navigationAction: WKNavigationAction,
                _ decisionHandler: @escaping @MainActor (WKNavigationActionPolicy) -> Void
            ) -> Void
        )?
    var showNavigationButtons = false

    @State private var webView = WKWebView()
    @State private var canGoBack = false
    @State private var canGoForward = false

    var body: some View {
        WebView(
            url: url, webView: webView, decidePolicy: decidePolicy, canGoBack: $canGoBack,
            canGoForward: $canGoForward
        )
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            if showNavigationButtons {
                ToolbarItem(placement: .topBarTrailing) {
                    Button(action: {
                        if canGoBack {
                            webView.goBack()
                        }
                    }) {
                        Image(systemName: "chevron.backward")
                    }
                    .disabled(!canGoBack)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button(action: {
                        if canGoForward {
                            webView.goForward()
                        }
                    }) {
                        Image(systemName: "chevron.forward")
                    }
                    .disabled(!canGoForward)
                }
            }
        }
    }
}
