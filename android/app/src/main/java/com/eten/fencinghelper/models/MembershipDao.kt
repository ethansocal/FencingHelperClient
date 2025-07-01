package com.eten.fencinghelper.models

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.Query
import kotlinx.coroutines.flow.Flow

@Dao
interface MembershipDao {
    @Insert(onConflict = REPLACE)
    suspend fun insert(membership: Membership)

    @Query("SELECT * FROM Membership WHERE usfaId = :usfaId")
    suspend fun getMembership(usfaId: Int): Membership?

    @Query("SELECT * FROM Membership ORDER BY displayOrder ASC")
    fun getAllMemberships(): Flow<List<Membership>>

    @Insert(onConflict = REPLACE)
    suspend fun addMembership(membership: Membership)

    @Delete
    suspend fun deleteMembership(membership: Membership)

}