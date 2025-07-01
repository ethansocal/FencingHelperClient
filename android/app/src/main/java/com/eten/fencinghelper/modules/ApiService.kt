package com.eten.fencinghelper.modules

import android.os.Parcelable
import kotlinx.parcelize.Parcelize
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.http.Query

@Serializable
data class PossibleMembership(
    val name: String,
    @SerialName("usfa_id") val usfaId: Int,
    val club: String
)

@Serializable
data class FencerInfo(
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
)

@Serializable
data class TournamentData(
    val days: List<Day>,
    val name: String,
    val dates: String,
    val location: String
) {
    @Serializable
    data class Day(
        val date: String,
        val today: Boolean,
        val events: List<Event>
    ) {
        @Serializable
        @Parcelize
        data class Event(
            val time: String,
            val event: String,
            val status: String,
            val id: String
        ) : Parcelable
    }
}

@Serializable
data class Tab(
    val type: String,
    val roundId: String? = null
)

@Serializable
data class FencersData(
    val columnNames: List<String>,
    val fencers: List<Fencer>,
    val checkedIn: Int,
    val absent: Int,
    val scratched: Int
) {
    @Serializable
    data class Fencer(
        var id: String,
        var status: String,
        var name: String,
        var club1: String? = null,
        var clubNames: String? = null,
        var club2: String? = null,
        var div: String? = null,
        var country: String? = null,
        var weaponRating: String? = null,
        var weaponRatingSort: Int,
        var rank: Int? = null,
        var rankSort: Int? = null,
        var search: String,
    )
}

@Serializable
data class PoolResultsData(
    val title: String,
    val columnNames: List<String>,
    val poolResults: List<PoolResult>
) {
    @Serializable
    data class PoolResult(
        val id: String,
        val v: Int,
        val m: Int,
        val vm: Float,
        val ts: Int,
        val tr: Int,
        val ind: Int,
        val prediction: String,
        val name: String,
        val formattedName: String,
        val div: String? = null,
        val country: String? = null,
        val club1: String? = null,
        val club2: String? = null,
        val search: String,
        val place: Int,
        val tie: Boolean
    )
}

@Serializable
data class ResultsData(
    val title: String,
    val eventClass: String?,
    val columnNames: List<String>,
    val results: List<Result>
) {
    @Serializable
    data class Result(
        val id: String,
        val place: String,
        val excluded: Boolean,
        val name: String,
        val clubs: String? = null,
        val club1: String? = null,
        val club2: String? = null,
        val country: String? = null,
        val div: String? = null,
        val oldRating: String? = null,
        val newRating: String? = null,
        val qualFor: String? = null,
        val search: String
    )
}

@Serializable
data class SeedingData(
    val title: String,
    val columnNames: List<String>,
    val seedings: List<Seeding>
) {
    @Serializable
    data class Seeding(
        val id: String,
        val exempt: Boolean,
        val excluded: Boolean,
        val noShow: Boolean,
        val bye: Boolean? = null,
        val elim: Boolean,
        val advanced: Boolean,
        val seed: String,
        val name: String,
        val div: String? = null,
        val country: String? = null,
        val club1: String? = null,
        val club2: String? = null,
        val rating: String? = null,
        val fenRank: Int? = null,
        val status: String,
        val search: String
    )
}

@Serializable
data class StripsData(
    var columnNames: List<String>,
    var stripAssignments: List<StripAssignment>
) {
    @Serializable
    data class StripAssignment(
        var poolNum: Int? = null,
        var stripNum: String,
        var startTime: String? = null,
        var timeSort: Int,
        var name: String,
        var formattedName: String,
        var club1Name: String? = null,
        var division: String? = null,
        var country: String? = null,
        var search: String
    )
}


@Parcelize
@Serializable
data class Pool(
    val id: String,
    val poolNum: Int,
    val poolStripTime: String,
    val finished: Boolean,
    val fencers: List<PoolFencer>
) : Parcelable {
    @Parcelize
    @Serializable
    data class PoolFencer(
        val name: String,
        val formattedName: String,
        val affiliation: String,
        val id: Int,
        val scores: List<PoolScore>? = null,
        val stats: PoolStats? = null,
        val withdrawn: String? = null
    ) : Parcelable {
        @Parcelize
        @Serializable
        data class PoolScore(
            val id: String,
            val happened: Boolean,
            val filler: Boolean,
            val withdrawn: Boolean,
            val score: Int? = null,
            val win: Boolean
        ) : Parcelable

        @Parcelize
        @Serializable
        data class PoolStats(
            val v: Int,
            val vm: Float,
            val ts: Int,
            val tr: Int,
            val ind: Int
        ) : Parcelable
    }
}

@Serializable
data class PoolData(
    val bouts: List<PoolBout>,
    val fencers: List<String>,
    val formattedFencers: List<String>,
    val happened: Boolean
) {
    @Serializable
    data class PoolBout(
        val id: Int,
        val rightPoolPos: Int,
        val rightPoolName: String,
        val rightPoolFormattedName: String,
        val rightPoolScore: Int? = null,
        val rightWon: Boolean? = null,
        val leftPoolPos: Int,
        val leftPoolName: String,
        val leftPoolFormattedName: String,
        val leftPoolScore: Int? = null,
        val happened: Boolean
    )
}

interface ApiService {
    @GET("possibleMemberships")
    suspend fun search(@Query("searchText") searchText: String): List<PossibleMembership>

    @GET("fencerInfo")
    suspend fun fencerInfo(@Query("usfaId") usfaId: Int, @Query("name") name: String): FencerInfo

    @GET("tournament/{tournamentId}/schedule")
    suspend fun tournamentSchedule(@Path("tournamentId") tournamentId: String): TournamentData

    @GET("event/{eventId}/tabs")
    suspend fun getAvailableTabs(@Path("eventId") eventId: String): List<Tab>

    //    @GET("event/{eventId}/format")
//    suspend fun getFormat(@Path("eventId") eventId: String): EventFormatResponse
//
    @GET("event/{eventId}/results")
    suspend fun getResults(@Path("eventId") eventId: String): ResultsData


    @GET("event/{eventId}/{roundId}/seeding")
    suspend fun getSeeding(
        @Path("eventId") eventId: String,
        @Path("roundId") roundId: String
    ): SeedingData


    @GET("event/{eventId}/{roundId}/poolResults")
    suspend fun getPoolResults(
        @Path("eventId") eventId: String,
        @Path("roundId") roundId: String
    ): PoolResultsData


    @GET("event/{eventId}/{roundId}/pools")
    suspend fun getPools(
        @Path("eventId") eventId: String,
        @Path("roundId") roundId: String
    ): List<Pool>


    @GET("event/{eventId}/{roundId}/strips")
    suspend fun getStrips(
        @Path("eventId") eventId: String,
        @Path("roundId") roundId: String
    ): StripsData


    //    @GET("event/{eventId}/{roundId}/tableaus")
//    suspend fun getTableaus(
//        @Path("eventId") eventId: String,
//        @Path("roundId") roundId: String
//    ): TableausResponse

    @GET("event/{eventId}/{roundId}/{poolId}")
    suspend fun getPool(
        @Path("eventId") eventId: String,
        @Path("roundId") roundId: String,
        @Path("poolId") poolId: String
    ): PoolData

    @GET("event/{eventId}/fencers")
    suspend fun getFencers(@Path("eventId") eventId: String): FencersData
}