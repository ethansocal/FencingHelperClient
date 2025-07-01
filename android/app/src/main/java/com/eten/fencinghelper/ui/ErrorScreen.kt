package com.eten.fencinghelper.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import kotlinx.coroutines.launch

@Composable
fun ErrorScreen(error: String?, retry: suspend () -> Unit, modifier: Modifier = Modifier) {
    var fetching by remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope()

    AnimatedVisibility(error != null, enter = fadeIn(), exit = fadeOut()) {
        Column(
            modifier = modifier
                .fillMaxSize()
                .background(MaterialTheme.colorScheme.background),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                "Sorry, something went wrong fetching the data. Error message: ${error ?: "Unknown error"}",
                color = MaterialTheme.colorScheme.error,
                textAlign = TextAlign.Center
            )
            Button(onClick = {
                fetching = true
                scope.launch {
                    retry()
                    fetching = false
                }
            }, enabled = !fetching) {
                Text("Retry")
            }
        }
    }
}