package com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun PoolFencersView(poolViewModel: PoolViewModel, goBack: () -> Unit) {
    Text(poolViewModel.pool.poolNum.toString())
}