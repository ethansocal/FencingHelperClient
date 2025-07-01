package com.eten.fencinghelper.modules

import android.content.Context
import androidx.room.Room
import com.eten.fencinghelper.models.AppDatabase
import com.eten.fencinghelper.models.MembershipDao
import com.eten.fencinghelper.models.StoredBoutDataDao
import org.koin.dsl.module

fun provideDatabase(context: Context): AppDatabase =
    Room.databaseBuilder(
        context,
        AppDatabase::class.java,
        "fencinghelper"
    ).fallbackToDestructiveMigration(true).build()

fun provideMembershipDao(appDatabase: AppDatabase): MembershipDao = appDatabase.membershipDao()
fun provideStoredBoutDataDao(appDatabase: AppDatabase): StoredBoutDataDao =
    appDatabase.storedBoutDataDao()


val databaseModule = module {
    single { provideDatabase(get()) }
    single { provideMembershipDao(get()) }
    single { provideStoredBoutDataDao(get()) }
}