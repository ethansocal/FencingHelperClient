package com.eten.fencinghelper

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.material3.adaptive.currentWindowAdaptiveInfo
import androidx.compose.material3.adaptive.navigationsuite.NavigationSuiteScaffold
import androidx.compose.material3.adaptive.navigationsuite.NavigationSuiteScaffoldDefaults
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavDestination
import androidx.navigation.NavDestination.Companion.hasRoute
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.eten.fencinghelper.feature.fencingtimelive.eventModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.fencerModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.poolResultsModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.poolModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.poolsModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.resultsModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.seedingModule
import com.eten.fencinghelper.feature.fencingtimelive.event_views.stripsModule
import com.eten.fencinghelper.feature.fencingtimelive.tournamentModule
import com.eten.fencinghelper.feature.memberships.membershipCreateModule
import com.eten.fencinghelper.feature.memberships.membershipEditModule
import com.eten.fencinghelper.feature.memberships.membershipsModule
import com.eten.fencinghelper.modules.databaseModule
import com.eten.fencinghelper.modules.networkModule
import com.eten.fencinghelper.navigation.FencingHelperNavHost
import com.eten.fencinghelper.navigation.items
import com.eten.fencinghelper.ui.theme.FencingHelperTheme
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.compose.KoinApplication
import org.koin.core.logger.Level
import kotlin.reflect.KClass

private fun NavDestination?.isRouteInHierarchy(route: KClass<*>) =
    this?.hierarchy?.any {
        it.hasRoute(route)
    } ?: false

@ExperimentalMaterial3ExpressiveApi
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            KoinApplication(application = {
                androidLogger(level = Level.DEBUG)
                androidContext(this@MainActivity)
                modules(
                    networkModule,
                    databaseModule,
                    membershipsModule,
                    membershipEditModule,
                    membershipCreateModule,
                    tournamentModule,
                    eventModule,
                    fencerModule,
                    poolResultsModule,
                    resultsModule,
                    seedingModule,
                    stripsModule,
                    poolsModule,
                    poolModule
                )
            }) {
                FencingHelperTheme {
                    val navController = rememberNavController()
                    val navBackStackEntry by navController.currentBackStackEntryAsState()
                    val currentDestination = navBackStackEntry?.destination

                    val adaptiveInfo = currentWindowAdaptiveInfo()
                    NavigationSuiteScaffold(
                        layoutType = NavigationSuiteScaffoldDefaults.navigationSuiteType(
                            adaptiveInfo
                        ),
                        navigationSuiteItems = {
                            items.forEach { navItem ->
                                val selected =
                                    currentDestination.isRouteInHierarchy(navItem.route::class)

                                item(
                                    icon = {
                                        Icon(
                                            if (selected) navItem.selectedIcon else navItem.unselectedIcon,
                                            contentDescription = null
                                        )
                                    },
                                    label = { Text(stringResource(navItem.resourceId)) },
                                    selected = selected,
                                    onClick = {
                                        navController.navigate(navItem.route) {
                                            // Pop up to the start destination of the graph to
                                            // avoid building up a large stack of destinations
                                            // on the back stack as users select items
                                            popUpTo(navController.graph.findStartDestination().id) {
                                                saveState = true
                                            }
                                            // Avoid multiple copies of the same destination when
                                            // reselecting the same item
                                            launchSingleTop = true
                                            // Restore state when reselecting a previously selected item
                                            restoreState = selected
                                        }
                                    }
                                )
                            }
                        }
                    ) {
                        FencingHelperNavHost(navController)
                    }
                }
            }
        }
    }
}

