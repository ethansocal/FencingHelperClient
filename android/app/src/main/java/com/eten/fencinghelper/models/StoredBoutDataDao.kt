package com.eten.fencinghelper.models

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import kotlinx.coroutines.flow.Flow

@Dao
interface StoredBoutDataDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(storedBoutData: StoredBoutData)

    @Query("SELECT * FROM StoredBoutData WHERE poolId = :poolId")
    fun getStoredBoutData(poolId: String): Flow<List<StoredBoutData>>
}