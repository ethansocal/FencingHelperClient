package com.eten.fencinghelper.models

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flowOf

class PreviewStoredBoutDataDao : StoredBoutDataDao {

    override fun getStoredBoutData(poolId: String): Flow<List<StoredBoutData>> {
        return flowOf(
            listOf(
                StoredBoutData(
                    poolId = "1",
                    leftFencerPos = 1,
                    rightFencerPos = 2,
                    leftFencerScore = 5,
                    rightFencerScore = 3,
                    rightWon = false,
                    finished = false
                )
            )
        )
    }

    override suspend fun insert(storedBoutData: StoredBoutData) {
        // No-op for preview
    }

}