//
//  WebView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import Foundation
import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    let url: URL
    var webView: WKWebView = WKWebView()
    var decidePolicy:
        (
            (
                _ webView: WKWebView, _ navigationAction: WKNavigationAction,
                _ decisionHandler: @escaping @MainActor (WKNavigationActionPolicy) -> Void
            ) -> Void
        )?
    @Binding var canGoBack: Bool
    @Binding var canGoForward: Bool

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIView(context: Context) -> WKWebView {
        webView.navigationDelegate = context.coordinator
        webView.isInspectable = true

        let contents = try! String(
            contentsOfFile: Bundle.main.path(forResource: "index", ofType: "js")!, encoding: .utf8)
        webView.configuration.userContentController.addUserScript(
            WKUserScript(source: contents, injectionTime: .atDocumentEnd, forMainFrameOnly: true))

        let refreshControl = UIRefreshControl()
        refreshControl.addTarget(
            context.coordinator, action: #selector(Coordinator.refreshWebView(_:)),
            for: .valueChanged)
        webView.isInspectable = true
        webView.scrollView.refreshControl = refreshControl
        webView.allowsBackForwardNavigationGestures = true

        webView.addObserver(
            context.coordinator, forKeyPath: #keyPath(WKWebView.canGoBack), options: .new,
            context: nil)
        webView.addObserver(
            context.coordinator, forKeyPath: #keyPath(WKWebView.canGoForward), options: .new,
            context: nil
        )

        let request = URLRequest(url: url)
        webView.load(request)

        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
    }

    class Coordinator: NSObject, WKNavigationDelegate {
        let parent: WebView
        var currentSender: UIRefreshControl?

        init(_ parent: WebView) {
            self.parent = parent
        }

        func webView(
            _ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
            decisionHandler: @escaping @MainActor (WKNavigationActionPolicy) -> Void
        ) {
            if let decidePolicy = parent.decidePolicy {
                decidePolicy(webView, navigationAction, decisionHandler)
            } else {
                decisionHandler(.allow)
            }
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            currentSender?.endRefreshing()
            currentSender = nil
        }

        override func observeValue(
            forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?,
            context: UnsafeMutableRawPointer?
        ) {
            if keyPath == #keyPath(WKWebView.canGoBack) {
                parent.canGoBack = parent.webView.canGoBack
            } else if keyPath == #keyPath(WKWebView.canGoForward) {
                parent.canGoForward = parent.webView.canGoForward
            }
        }

        @objc func refreshWebView(_ sender: UIRefreshControl) {
            parent.webView.reload()
            currentSender = sender
        }
    }
}
