package com.eten.fencinghelper.feature.fencingtimelive

import android.annotation.SuppressLint
import android.os.Build
import android.util.Log
import android.view.ViewGroup
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import com.eten.fencinghelper.R
import com.eten.fencinghelper.ui.LoadingScreen


class FencingTimeLiveWebViewClient(
    val navigateToTournament: (String) -> Unit,
    val navigateToAdvancedSearch: () -> Unit,
    val loadJavascript: () -> Unit
) : WebViewClient() {
    override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
        Log.d("Webview", request?.url?.path ?: "")
        if (Regex("/tournaments/eventSchedule/(\\w+)").matches(request?.url?.path ?: "")) {
            navigateToTournament(request?.url?.path?.split("/")?.get(3) ?: "")
            return true
        } else if (request?.url?.path == "/tournaments/search/advanced") {
            navigateToAdvancedSearch()
            return true
        }
        return false
    }

    override fun onPageFinished(view: WebView?, url: String?) {
        loadJavascript()
    }
}

const val TAG = "FencingTimeLiveWebViewClient"

@SuppressLint("SetJavaScriptEnabled")
@OptIn(ExperimentalMaterial3Api::class)
@ExperimentalMaterial3ExpressiveApi
@Composable
fun TournamentsView(navigateToTournament: (String) -> Unit, navigateToAdvancedSearch: () -> Unit) {
    val context = LocalContext.current
    var loading by remember { mutableStateOf(true) }
    Scaffold(topBar = {
        TopAppBar(
            title = { Text("Tournaments") }
        )
    }, contentWindowInsets = WindowInsets(0.dp)) { innerPadding ->
        AndroidView(
            factory = {
                WebView(it).apply {
                    layoutParams = ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                    webViewClient =
                        FencingTimeLiveWebViewClient(
                            navigateToTournament,
                            navigateToAdvancedSearch
                        ) {
                            this@apply.evaluateJavascript(
                                context.resources.openRawResource(R.raw.index).bufferedReader()
                                    .use { it.readText() }
                            ) { result ->
                                Log.d(TAG, result)
                                loading = false
                            }
                        }
                    settings.javaScriptEnabled = true
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU)
                        settings.isAlgorithmicDarkeningAllowed = true
                }
            }, update = {
                it.loadUrl("https://fencingtimelive.com")
            }, modifier = Modifier
                .padding(innerPadding)
                .consumeWindowInsets(innerPadding)
        )
        LoadingScreen(
            loading, modifier = Modifier
                .padding(innerPadding)
        )
    }
}