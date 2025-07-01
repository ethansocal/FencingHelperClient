package com.eten.fencinghelper.feature.fencingtimelive

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.MediumFlexibleTopAppBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.TournamentData
import com.eten.fencinghelper.openLink
import com.eten.fencinghelper.ui.ErrorScreen
import com.eten.fencinghelper.ui.Header
import com.eten.fencinghelper.ui.LoadingScreen
import com.eten.fencinghelper.ui.PullToRefresh
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.core.parameter.parametersOf
import org.koin.dsl.module


class TournamentViewModel(val apiService: ApiService, val tournamentId: String) : ViewModel() {
    private var _schedule = MutableStateFlow<TournamentData?>(null)
    val schedule = _schedule.asStateFlow()

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

    suspend fun fetchData() {
        try {
            _schedule.value = apiService.tournamentSchedule(tournamentId)
            _error.value = null
        } catch (e: Exception) {
            _schedule.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val tournamentModule = module {
    viewModel {
        TournamentViewModel(get(), get())
    }
}


@Composable
fun EventRow(event: TournamentData.Day.Event, onClick: () -> Unit, modifier: Modifier = Modifier) {
    ListItem(
        headlineContent = { Text("${event.event} - ${event.time}") },
        modifier = modifier.clickable { onClick() },
        supportingContent = {
            if (event.status != "") Text(event.status.replace("\n", " | ")) else Unit
        },
        trailingContent = {
            Icon(Icons.AutoMirrored.Filled.ArrowForward, contentDescription = null)
        })
}


@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun TournamentView(
    tournamentId: String,
    navigateToEvent: (TournamentData.Day.Event) -> Unit,
    goBack: () -> Unit
) {
    val viewModel: TournamentViewModel =
        koinViewModel(parameters = { parametersOf(tournamentId) })

    val tournamentData = viewModel.schedule.collectAsStateWithLifecycle()
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
                    if (tournamentData.value != null)
                        Text(
                            tournamentData.value!!.name,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis
                        )
                },
                subtitle = { if (tournamentData.value != null) Text("${tournamentData.value!!.dates} | ${tournamentData.value!!.location}") },
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
                            "https://fencingtimelive.com/tournaments/eventSchedule/${tournamentId}",
                            context
                        )
                    }) {
                        Icon(Icons.Default.Explore, contentDescription = null)
                    }
                },
                scrollBehavior = scrollBehavior
            )
        }, contentWindowInsets = WindowInsets(bottom = 0.dp)) { innerPadding ->
            val listState = rememberLazyListState()
            LaunchedEffect(key1 = tournamentData.value) {
                if (tournamentData.value != null) {
                    val today =
                        tournamentData.value!!.days.indexOfFirst { it.today }
                    if (today != -1) {
                        delay(500)
                        listState.animateScrollToItem(
                            tournamentData.value!!.days.subList(0, today)
                                .sumOf { 1 + it.events.size })
                    }
                }
            }
            LazyColumn(
                modifier = Modifier
                    .padding(innerPadding)
                    .fillMaxSize(),
                state = listState
            ) {
                for (day in tournamentData.value?.days ?: emptyList()) {
                    stickyHeader {
                        Header(day.date + if (day.today) " (Today)" else "")
                    }
                    itemsIndexed(day.events, key = { index, event -> event.id }) { index, event ->
                        EventRow(event, onClick = { navigateToEvent(event) })
                        if (index != day.events.lastIndex) {
                            HorizontalDivider()
                        }
                    }
                }
            }
            LoadingScreen(
                tournamentData.value == null && error.value == null,
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