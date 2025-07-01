package com.eten.fencinghelper.feature.fencingtimelive

import android.util.Log
import android.widget.Toast
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.automirrored.filled.Assignment
import androidx.compose.material.icons.filled.AppRegistration
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.FormatListNumbered
import androidx.compose.material.icons.filled.Height
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Leaderboard
import androidx.compose.material.icons.filled.Navigation
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.MediumFlexibleTopAppBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.Tab
import com.eten.fencinghelper.modules.TournamentData
import com.eten.fencinghelper.openLink
import com.eten.fencinghelper.ui.ErrorScreen
import com.eten.fencinghelper.ui.Header
import com.eten.fencinghelper.ui.LoadingScreen
import com.eten.fencinghelper.ui.PullToRefresh
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.core.parameter.parametersOf
import org.koin.dsl.module


data class TabGroup(
    val name: String,
    var tabs: MutableList<Tab>
)

class EventViewModel(val apiService: ApiService, val event: TournamentData.Day.Event) :
    ViewModel() {
    private var _tabGroups = MutableStateFlow<List<TabGroup>?>(null)
    val tabGroups = _tabGroups.asStateFlow()

    private var _error = MutableStateFlow<String?>(null)
    val error = _error.asStateFlow()

    private var _reloading = MutableStateFlow<Boolean>(false)
    val reloading = _reloading.asStateFlow()

    init {
        viewModelScope.launch {
            fetchData()
        }
    }

    fun refetchData() {
        _reloading.value = true
        viewModelScope.launch {
            fetchData()
            _reloading.value = false
        }
    }

    fun groupTabs(tabs: List<Tab>): List<TabGroup> {
        var groups = mutableListOf(TabGroup(name = "Event", tabs = mutableListOf<Tab>()))
        for (tab in tabs) {
            if (tab.type == "pools") {
                groups.add(TabGroup(name = "Pools", tabs = mutableListOf(tab)))
            } else if (tab.type == "tableaus") {
                groups.add(TabGroup(name = "Tableau", tabs = mutableListOf(tab)))
            } else {
                groups[0].tabs.add(tab)
            }
        }
        return groups
    }

    suspend fun fetchData() {
        try {
            _tabGroups.value = groupTabs(apiService.getAvailableTabs(event.id))
            _error.value = null
        } catch (e: Exception) {
            _tabGroups.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val eventModule = module {
    viewModel {
        EventViewModel(get(), get())
    }
}

@Composable
fun TabLink(
    event: TournamentData.Day.Event,
    tab: Tab,
    navigateToFencers: () -> Unit,
    navigateToSeeding: (String) -> Unit,
    navigateToPools: (String) -> Unit,
    navigateToStrips: (String) -> Unit,
    navigateToPoolResults: (String) -> Unit,
    navigateToTableaus: (String) -> Unit,
    navigateToResults: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current

    when (tab.type) {
        "competitors" -> {
            ListItem(
                headlineContent = { Text("Fencers") },
                modifier = modifier.clickable { navigateToFencers() },
                leadingContent = {
                    Icon(Icons.Default.Person, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
        }

        "seeding" -> {
            ListItem(
                headlineContent = { Text("Seeding") },
                modifier = modifier.clickable { navigateToSeeding(tab.roundId!!) },
                leadingContent = {
                    Icon(Icons.Default.FormatListNumbered, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
        }

        "format" -> {
            ListItem(
                headlineContent = { Text("Format") },
                modifier = modifier.clickable {
                    openLink("https://fencingtimelive.com/events/format/${event.id}", context)
                },
                leadingContent = {
                    Icon(Icons.Default.Info, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
        }

        "results" -> {
            ListItem(
                headlineContent = { Text("Results") },
                modifier = modifier.clickable {
                    navigateToResults()
                },
                leadingContent = {
                    Icon(Icons.Default.Leaderboard, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
        }

        "pools" -> {
            ListItem(
                headlineContent = { Text("Pools") },
                modifier = modifier.clickable {
                    navigateToPools(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.Default.AppRegistration, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
            HorizontalDivider()
            ListItem(
                headlineContent = { Text("Seeding") },
                modifier = modifier.clickable {
                    navigateToSeeding(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.Default.FormatListNumbered, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
            HorizontalDivider()
            ListItem(
                headlineContent = { Text("Strips") },
                modifier = modifier.clickable {
                    navigateToStrips(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.Default.Navigation, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
            HorizontalDivider()
            ListItem(
                headlineContent = { Text("Pool Results") },
                modifier = modifier.clickable {
                    navigateToPoolResults(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.Default.Height, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
        }

        "tableaus" -> {
            ListItem(
                headlineContent = { Text("Tableau") },
                modifier = modifier.clickable {
                    navigateToTableaus(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.AutoMirrored.Filled.Assignment, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
            HorizontalDivider()
            ListItem(
                headlineContent = { Text("Seeding") },
                modifier = modifier.clickable {
                    navigateToSeeding(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.Default.FormatListNumbered, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
            HorizontalDivider()
            ListItem(
                headlineContent = { Text("Strips") },
                modifier = modifier.clickable {
                    navigateToStrips(tab.roundId!!)
                },
                leadingContent = {
                    Icon(Icons.Default.Navigation, contentDescription = null)
                },
                trailingContent = {
                    Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
                }
            )
        }

        else -> {
            ListItem(
                headlineContent = { Text(tab.type, color = MaterialTheme.colorScheme.error) },
                modifier = modifier.clickable {
                    Toast.makeText(
                        context,
                        "Sorry, we don't support this type of event yet.",
                        Toast.LENGTH_SHORT
                    ).show()
                },
            )
        }
    }
}

fun formatEventSubtitle(event: TournamentData.Day.Event): String {
    if (event.status.split("\n").first() != "") {
        return "${event.time} - ${event.status.split("\n").first()}"
    }
    return event.time
}

@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun EventView(
    event: TournamentData.Day.Event,
    navigateToFencers: () -> Unit,
    navigateToSeeding: (String) -> Unit,
    navigateToPools: (String) -> Unit,
    navigateToStrips: (String) -> Unit,
    navigateToPoolResults: (String) -> Unit,
    navigateToTableaus: (String) -> Unit,
    navigateToResults: () -> Unit,

    goBack: () -> Unit
) {
    val viewModel: EventViewModel =
        koinViewModel(parameters = { parametersOf(event) })

    val tabGroups = viewModel.tabGroups.collectAsStateWithLifecycle()
    val error = viewModel.error.collectAsStateWithLifecycle()
    val reloading = viewModel.reloading.collectAsStateWithLifecycle()

    val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior()

    val context = LocalContext.current
    PullToRefresh(
        isRefreshing = reloading.value,
        onRefresh = viewModel::refetchData,
    ) {
        Scaffold(modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection), topBar = {
            MediumFlexibleTopAppBar(
                title = {
                    Text(
                        event.event,
                        maxLines = 2,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                subtitle = { Text(formatEventSubtitle(event)) },
                navigationIcon = {
                    IconButton(onClick = goBack) {
                        Icon(
                            Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = null
                        )
                    }
                },
                actions = {
                    IconButton(onClick = {
                        openLink(
                            "https://fencingtimelive.com/events/view/${event.id}",
                            context
                        )
                    }) {
                        Icon(Icons.Default.Explore, contentDescription = null)
                    }
                },
                scrollBehavior = scrollBehavior
            )
        }, contentWindowInsets = WindowInsets(bottom = 0.dp)) { innerPadding ->
            LazyColumn(
                modifier = Modifier
                    .padding(innerPadding)
                    .fillMaxSize()
            ) {
                for (tabGroup in tabGroups.value ?: emptyList()) {
                    stickyHeader {
                        Header(tabGroup.name)
                    }

                    itemsIndexed(
                        tabGroup.tabs,
                        key = { index, tab -> tab.type + tab.roundId }) { index, tab ->
                        TabLink(
                            event = event,
                            tab = tab,
                            navigateToFencers = navigateToFencers,
                            navigateToSeeding = navigateToSeeding,
                            navigateToPools = navigateToPools,
                            navigateToStrips = navigateToStrips,
                            navigateToPoolResults = navigateToPoolResults,
                            navigateToTableaus = navigateToTableaus,
                            navigateToResults = navigateToResults
                        )
                        if (index != tabGroup.tabs.lastIndex) {
                            HorizontalDivider()
                        }
                    }
                }
            }
            LoadingScreen(
                tabGroups.value == null && error.value == null,
                modifier = Modifier.padding(innerPadding)
            )
            ErrorScreen(
                error = error.value,
                retry = viewModel::refetchData,
                modifier = Modifier.padding(innerPadding)
            )
        }
    }
}