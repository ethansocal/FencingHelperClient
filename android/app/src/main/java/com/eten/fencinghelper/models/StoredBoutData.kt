package com.eten.fencinghelper.models

import androidx.room.Entity

@Entity(primaryKeys = ["poolId", "leftFencerPos", "rightFencerPos"])
data class StoredBoutData(
    val poolId: String,
    val leftFencerPos: Int,
    val rightFencerPos: Int,
    val leftFencerScore: Int?,
    val rightFencerScore: Int?,
    val rightWon: Boolean?,
    val finished: Boolean
)