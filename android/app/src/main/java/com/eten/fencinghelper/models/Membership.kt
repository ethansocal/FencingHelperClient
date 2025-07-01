package com.eten.fencinghelper.models

import androidx.room.Entity
import androidx.room.PrimaryKey
import java.util.Date

@Entity
data class Membership(
    @PrimaryKey val usfaId: Int,
    val name: String,
    val year: Int?,
    val country: String,
    val countryIOC: String,
    val club: String?,
    val clubId: Int?,
    val clubSymbol: String?,
    val epee: String,
    val foil: String,
    val saber: String,
    val displayOrder: Int,
    val lastRefreshed: Date
)
