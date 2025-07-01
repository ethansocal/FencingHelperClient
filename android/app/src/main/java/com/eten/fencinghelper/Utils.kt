package com.eten.fencinghelper

import android.content.Context
import androidx.browser.customtabs.CustomTabsIntent
import androidx.core.net.toUri

fun openLink(link: String, context: Context) {

    val customTabsIntent =
        CustomTabsIntent.Builder().apply {

        }
            .build()
    customTabsIntent.launchUrl(context, link.toUri())
}

fun formatRank(rating: String?, rank: Int? = null): String {
    return if (rating != null && rank != null) {
        " ($rating / $rank)"
    } else if (rating != null) {
        " ($rating)"
    } else if (rank != null) {
        " ($rank)"
    } else {
        ""
    }
}