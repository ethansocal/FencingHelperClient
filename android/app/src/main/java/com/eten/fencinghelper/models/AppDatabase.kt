package com.eten.fencinghelper.models

import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.TypeConverters

@Database(entities = [Membership::class, StoredBoutDataDao::class], version = 2)
@TypeConverters(Converters::class)
abstract class AppDatabase : RoomDatabase() {
    abstract fun membershipDao(): MembershipDao
    abstract fun storedBoutDataDao(): StoredBoutDataDao
}