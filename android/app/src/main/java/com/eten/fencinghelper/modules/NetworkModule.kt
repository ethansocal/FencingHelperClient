package com.eten.fencinghelper.modules

import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import org.koin.dsl.module
import retrofit2.Converter
import retrofit2.Retrofit
import retrofit2.converter.kotlinx.serialization.asConverterFactory
import java.util.concurrent.TimeUnit

fun provideHttpClient(): OkHttpClient {
    return OkHttpClient
        .Builder()
        .readTimeout(60, TimeUnit.SECONDS)
        .connectTimeout(20, TimeUnit.SECONDS)
        .build()
}


@Suppress("JSON_FORMAT_REDUNDANT")
fun provideConverterFactory(): Converter.Factory =
    Json {
        ignoreUnknownKeys = true
    }.asConverterFactory(
        "application/json; charset=UTF8".toMediaType()
    )


fun provideRetrofit(
    okHttpClient: OkHttpClient,
    kotlinXSerializationConverterFactory: Converter.Factory
): Retrofit {
    return Retrofit.Builder()
        .baseUrl("http://192.168.1.16:3000/v2/")
        .client(okHttpClient)
        .addConverterFactory(kotlinXSerializationConverterFactory)
        .build()
}

fun provideService(retrofit: Retrofit): ApiService =
    retrofit.create(ApiService::class.java)


val networkModule = module {
    single { provideHttpClient() }
    single { provideConverterFactory() }
    single { provideRetrofit(get(), get()) }
    single { provideService(get()) }
}