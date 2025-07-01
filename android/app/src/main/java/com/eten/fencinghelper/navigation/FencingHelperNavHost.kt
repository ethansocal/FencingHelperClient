package com.eten.fencinghelper.navigation

import android.net.Uri
import android.os.Build
import android.os.Bundle
import androidx.compose.animation.AnimatedContentTransitionScope
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.unit.IntOffset
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.navigation
import androidx.navigation.toRoute
import com.eten.fencinghelper.feature.fencingtimelive.AdvancedTournamentSearchView
import com.eten.fencinghelper.feature.fencingtimelive.EventView
import com.eten.fencinghelper.feature.fencingtimelive.TournamentView
import com.eten.fencinghelper.feature.fencingtimelive.TournamentsView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.FencersView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.PoolResultsView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.ResultsView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.SeedingView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.StripsView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.TableausView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.PoolFencersView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.PoolGridView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.PoolStatsView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.PoolView
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.PoolViewModel
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.PoolsView
import com.eten.fencinghelper.feature.memberships.MembershipCreateView
import com.eten.fencinghelper.feature.memberships.MembershipEditView
import com.eten.fencinghelper.feature.memberships.MembershipsView
import com.eten.fencinghelper.modules.Pool
import com.eten.fencinghelper.modules.TournamentData
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.koin.compose.viewmodel.koinViewModel
import org.koin.compose.viewmodel.sharedKoinViewModel
import org.koin.core.parameter.parametersOf
import kotlin.reflect.typeOf

@Serializable
object FencingTimeLive

@Serializable
object TournamentsScreen

@Serializable
data class TournamentRoute(val tournamentId: String)

@Serializable
object TournamentScreen

@Serializable
data class EventRoute(val event: TournamentData.Day.Event)

@Serializable
object EventScreen

val EventParameterType = object : NavType<TournamentData.Day.Event>(
    isNullableAllowed = false
) {
    override fun put(bundle: Bundle, key: String, value: TournamentData.Day.Event) {
        bundle.putParcelable(key, value)
    }

    @Suppress("DEPRECATION")
    override fun get(bundle: Bundle, key: String): TournamentData.Day.Event {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            return bundle.getParcelable(key, TournamentData.Day.Event::class.java)
                ?: throw IllegalArgumentException("Event not found in bundle")
        }
        return bundle.getParcelable<TournamentData.Day.Event>(key)
            ?: throw IllegalArgumentException("Event not found in bundle")
    }

    override fun serializeAsValue(value: TournamentData.Day.Event): String {
        // Serialized values must always be Uri encoded
        return Uri.encode(Json.encodeToString(value))
    }

    override fun parseValue(value: String): TournamentData.Day.Event {
        // Navigation takes care of decoding the string
        // before passing it to parseValue()
        return Json.decodeFromString<TournamentData.Day.Event>(value)
    }
}

@Serializable
object FencersScreen

@Serializable
data class SeedingScreen(
    val roundId: String
)

@Serializable
data class PoolsScreen(
    val roundId: String
)

@Serializable
data class PoolRoute(
    val roundId: String,
    val pool: Pool
)

@Serializable
object PoolScreen

val PoolParameterType = object : NavType<Pool>(
    isNullableAllowed = false
) {
    override fun put(bundle: Bundle, key: String, value: Pool) {
        bundle.putParcelable(key, value)
    }

    @Suppress("DEPRECATION")
    override fun get(bundle: Bundle, key: String): Pool {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            return bundle.getParcelable(key, Pool::class.java)
                ?: throw IllegalArgumentException("Pool not found in bundle")
        }
        return bundle.getParcelable<Pool>(key)
            ?: throw IllegalArgumentException("Pool not found in bundle")
    }

    override fun serializeAsValue(value: Pool): String {
        // Serialized values must always be Uri encoded
        return Uri.encode(Json.encodeToString(value))
    }

    override fun parseValue(value: String): Pool {
        // Navigation takes care of decoding the string
        // before passing it to parseValue()
        return Json.decodeFromString<Pool>(value)
    }
}

@Serializable
object PoolFencersScreen

@Serializable
object PoolGridScreen

@Serializable
object PoolStatsScreen

@Serializable
data class StripsScreen(
    val roundId: String
)

@Serializable
data class PoolResultsScreen(
    val roundId: String
)

@Serializable
data class TableausScreen(
    val roundId: String
)

@Serializable
data class TableauScreen(
    val roundId: String,
    val tableauId: String
)

@Serializable
object ResultsScreen

@Serializable
object AdvancedTournamentSearch

@Serializable
object Memberships

@Serializable
object MembershipsScreen

@Serializable
object MembershipEditScreen

@Serializable
object MembershipCreateScreen


@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun FencingHelperNavHost(navController: NavHostController) {
    val animationSpec = MaterialTheme.motionScheme.defaultSpatialSpec<IntOffset>()
    val floatAnimationSpec = MaterialTheme.motionScheme.defaultSpatialSpec<Float>()
    NavHost(
        navController = navController,
        startDestination = FencingTimeLive,
        enterTransition = {
            slideIntoContainer(
                towards = AnimatedContentTransitionScope.SlideDirection.Left,
                animationSpec
            )
        },
        exitTransition = {
            slideOutOfContainer(
                towards = AnimatedContentTransitionScope.SlideDirection.Left,
                animationSpec = animationSpec,

                )
        },
        popExitTransition =
            {
                slideOutOfContainer(
                    towards = AnimatedContentTransitionScope.SlideDirection.Right,
                    animationSpec,
                    targetOffset = {
                        (it * 0.1).toInt()
                    }
                ) + fadeOut(floatAnimationSpec)
            },
        popEnterTransition =
            {
                slideIntoContainer(
                    towards = AnimatedContentTransitionScope.SlideDirection.Right,
                    animationSpec = animationSpec,
                    initialOffset = {
                        (it * 0.05).toInt()
                    }
                ) + fadeIn(floatAnimationSpec)
            },
    ) {
        navigation<FencingTimeLive>(startDestination = TournamentsScreen) {
            composable<TournamentsScreen> {
                TournamentsView(
                    navigateToTournament = { navController.navigate(TournamentRoute(it)) },
                    { navController.navigate(AdvancedTournamentSearch) })
            }
            composable<AdvancedTournamentSearch> {
                AdvancedTournamentSearchView()
            }
            navigation<TournamentRoute>(startDestination = TournamentScreen) {
                composable<TournamentScreen> {
                    val tournamentId =
                        remember(it) { navController.getBackStackEntry<TournamentRoute>() }.toRoute<TournamentRoute>().tournamentId

                    TournamentView(tournamentId, navigateToEvent = { event ->
                        navController.navigate(EventRoute(event))
                    }, goBack = {
                        navController.popBackStack()
                    })
                }
                navigation<EventRoute>(
                    startDestination = EventScreen,
                    typeMap = mapOf(typeOf<TournamentData.Day.Event>() to EventParameterType)
                ) {
                    composable<EventScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event

                        EventView(
                            event = event,
                            goBack = { navController.popBackStack() },
                            navigateToFencers = {
                                navController.navigate(
                                    FencersScreen
                                )
                            },
                            navigateToSeeding = { roundId ->
                                navController.navigate(
                                    SeedingScreen(
                                        roundId
                                    )
                                )
                            },
                            navigateToPools = { roundId ->
                                navController.navigate(
                                    PoolsScreen(
                                        roundId
                                    )
                                )
                            },
                            navigateToStrips = { roundId ->
                                navController.navigate(
                                    StripsScreen(
                                        roundId
                                    )
                                )
                            },
                            navigateToPoolResults = { roundId ->
                                navController.navigate(
                                    PoolResultsScreen(
                                        roundId
                                    )
                                )
                            },
                            navigateToTableaus = { roundId ->
                                navController.navigate(
                                    TableausScreen(
                                        roundId
                                    )
                                )
                            },
                            navigateToResults = {
                                navController.navigate(
                                    ResultsScreen
                                )
                            },
                        )
                    }

                    composable<FencersScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event
                        FencersView(
                            event = event,
                            goBack = { navController.popBackStack() },
                        )
                    }

                    composable<SeedingScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event
                        val roundId = it.toRoute<SeedingScreen>().roundId
                        SeedingView(
                            event = event,
                            roundId = roundId,
                            goBack = { navController.popBackStack() },
                        )
                    }

                    composable<PoolsScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event
                        val roundId = it.toRoute<PoolsScreen>().roundId

                        PoolsView(
                            event = event,
                            roundId = roundId,
                            goBack = { navController.popBackStack() },
                            navigateToPool = { pool ->
                                navController.navigate(
                                    PoolRoute(
                                        roundId = roundId,
                                        pool = pool
                                    )
                                )
                            },
                        )
                    }

                    navigation<PoolRoute>(
                        startDestination = PoolScreen, typeMap = mapOf(
                            typeOf<Pool>() to PoolParameterType
                        )
                    ) {
                        composable<PoolScreen> {
                            val poolEntry =
                                remember(it) { navController.getBackStackEntry<PoolRoute>() }.toRoute<PoolRoute>()
                            val roundId = poolEntry.roundId
                            val pool = poolEntry.pool
                            val event =
                                remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event

                            val viewModel: PoolViewModel = koinViewModel(
                                viewModelStoreOwner = remember(it) {
                                    navController.getBackStackEntry<PoolRoute>()
                                },
                                parameters = { parametersOf(event, roundId, pool) }
                            )

                            PoolView(
                                event = event,
                                roundId = roundId,
                                pool = pool,
                                goBack = { navController.popBackStack() },
                                navigateToPoolFencers = { navController.navigate(PoolFencersScreen) },
                                navigateToPoolGrid = { navController.navigate(PoolGridScreen) },
                                navigateToPoolStats = { navController.navigate(PoolStatsScreen) },
                                viewModel = viewModel
                            )
                        }

                        composable<PoolFencersScreen> {
                            val poolViewModel =
                                it.sharedKoinViewModel<PoolViewModel>(navController)

                            PoolFencersView(
                                poolViewModel,
                                goBack = { navController.popBackStack() })
                        }
                        composable<PoolGridScreen> {
                            val poolViewModel =
                                it.sharedKoinViewModel<PoolViewModel>(navController)

                            PoolGridView(poolViewModel, goBack = { navController.popBackStack() })
                        }
                        composable<PoolStatsScreen> {
                            val poolViewModel =
                                it.sharedKoinViewModel<PoolViewModel>(navController)

                            PoolStatsView(poolViewModel, goBack = { navController.popBackStack() })
                        }
                    }

                    composable<StripsScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event
                        val roundId = it.toRoute<StripsScreen>().roundId

                        StripsView(
                            event = event,
                            roundId = roundId,
                            goBack = { navController.popBackStack() },
                        )
                    }

                    composable<PoolResultsScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event
                        val roundId = it.toRoute<PoolResultsScreen>().roundId

                        PoolResultsView(
                            event = event,
                            roundId = roundId,
                            goBack = { navController.popBackStack() },
                        )
                    }

                    composable<TableausScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event
                        val roundId = it.toRoute<TableausScreen>().roundId

                        TableausView(
                            event = event,
                            roundId = roundId,
                            goBack = { navController.popBackStack() },
                        )
                    }

                    composable<ResultsScreen> {
                        val event =
                            remember(it) { navController.getBackStackEntry<EventRoute>() }.toRoute<EventRoute>().event

                        ResultsView(
                            event = event,
                            goBack = { navController.popBackStack() },
                        )
                    }
                }
            }
        }

        navigation<Memberships>(startDestination = MembershipsScreen) {
            composable<MembershipsScreen> {
                MembershipsView(
                    navigateToMemberships = { navController.navigate(MembershipEditScreen) },
                    navigateToCreateMembership = { navController.navigate(MembershipCreateScreen) },
                )
            }
            composable<MembershipEditScreen> {
                MembershipEditView(goBack = {
                    navController.popBackStack()
                }, navigateToCreateMemberships = {
                    navController.navigate(MembershipCreateScreen)
                })
            }
            composable<MembershipCreateScreen> {
                MembershipCreateView(goBack = { navController.popBackStack() })
            }
        }
    }
}