package com.eten.fencinghelper.feature.fencingtimelive.event_views

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.input.rememberTextFieldState
import androidx.compose.foundation.text.input.setTextAndPlaceCursorAtEnd
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.ExpandedFullScreenSearchBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.MediumFlexibleTopAppBar
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SearchBarDefaults
import androidx.compose.material3.SearchBarValue
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.rememberSearchBarState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views.formatIndicator
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.PoolResultsData
import com.eten.fencinghelper.modules.TournamentData
import com.eten.fencinghelper.openLink
import com.eten.fencinghelper.ui.ErrorScreen
import com.eten.fencinghelper.ui.LoadingScreen
import com.eten.fencinghelper.ui.PullToRefresh
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.core.parameter.parametersOf
import org.koin.dsl.module

class PoolResultsViewModel(
    val apiService: ApiService,
    val event: TournamentData.Day.Event,
    val roundId: String
) :
    ViewModel() {
    private var _poolResultsData = MutableStateFlow<PoolResultsData?>(null)
    val poolResultsData = _poolResultsData.asStateFlow()

    private var _error = MutableStateFlow<String?>(null)
    val error = _error.asStateFlow()

    private var _reloading = MutableStateFlow<Boolean>(false)
    val reloading = _reloading.asStateFlow()


    private val _filtered = MutableStateFlow<List<PoolResultsData.PoolResult>>(emptyList())
    val filtered = _filtered.asStateFlow()

    fun onSearchTextChange(text: String) {
        if (text.isEmpty()) {
            _filtered.value = emptyList()
            return
        }
        _filtered.value = _poolResultsData.value?.poolResults?.filter {
            it.search.contains(text, ignoreCase = true)
        } ?: emptyList()
    }

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
            _poolResultsData.value = apiService.getPoolResults(event.id, roundId)
            _error.value = null
        } catch (e: Exception) {
            _poolResultsData.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val poolResultsModule = module {
    viewModel {
        PoolResultsViewModel(get(), get(), get())
    }
}

fun formatIndicator(indicator: Int): String {
    if (indicator > 0) {
        return "+${indicator}"
    }
    return indicator.toString()
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PoolResultItem(
    poolResult: PoolResultsData.PoolResult,
    modifier: Modifier = Modifier
) {
    var showingSheet by remember { mutableStateOf(false) }

    ListItem(
        headlineContent = {
            Text(
                poolResult.formattedName
            )
        },
        leadingContent = {
            Text("${poolResult.place}${if (poolResult.tie) "T" else ""}")
        },
        supportingContent = {
            Text(
                listOfNotNull(
                    listOfNotNull(poolResult.club1, poolResult.club2).joinToString(" / "),
                    poolResult.div,
                    poolResult.country
                )
                    .joinToString(" - ")
            )
        }, trailingContent = {
            Icon(Icons.AutoMirrored.Default.ArrowForward, contentDescription = null)
        }, modifier = modifier.clickable {
            showingSheet = true
        }
    )
    if (showingSheet) {
        ModalBottomSheet(onDismissRequest = { showingSheet = false }) {
            Column(
                modifier = Modifier.padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Text(poolResult.formattedName, style = MaterialTheme.typography.headlineMedium)
                Text(
                    listOfNotNull(
                        listOfNotNull(poolResult.club1, poolResult.club2).joinToString(" / "),
                        poolResult.div,
                        poolResult.country
                    )
                        .joinToString(" - "),
                    style = MaterialTheme.typography.headlineSmall
                )
                Text(
                    "Status: ${poolResult.prediction}",
                    style = MaterialTheme.typography.bodyLarge
                )
                LazyVerticalGrid(
                    columns = GridCells.Fixed(6),
                ) {
                    for (i in arrayOf("V", "M", "V / M", "TS", "TR", "Ind")) {
                        item {
                            Text(
                                i,
                                textAlign = TextAlign.Center,
                                modifier = Modifier.padding(bottom = 10.dp)
                            )
                        }
                    }
                    item(span = { GridItemSpan(6) }) {
                        HorizontalDivider()
                    }
                    for (i in arrayOf(
                        poolResult.v.toString(),
                        poolResult.m.toString(),
                        poolResult.vm.toString(),
                        poolResult.ts.toString(),
                        poolResult.tr.toString(),
                        formatIndicator(poolResult.ind),
                    )) {
                        item {
                            Text(
                                i,
                                textAlign = TextAlign.Center,
                                modifier = Modifier.padding(top = 10.dp)
                            )
                        }
                    }
                }
            }
        }
    }
}


@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun PoolResultsView(
    event: TournamentData.Day.Event,
    roundId: String,
    goBack: () -> Unit
) {
    val viewModel: PoolResultsViewModel =
        koinViewModel(parameters = { parametersOf(event, roundId) })

    val poolResultsData = viewModel.poolResultsData.collectAsStateWithLifecycle()
    val error = viewModel.error.collectAsStateWithLifecycle()
    val reloading = viewModel.reloading.collectAsStateWithLifecycle()

    val scope = rememberCoroutineScope()

    val filtered = viewModel.filtered.collectAsStateWithLifecycle()
    val textFieldState = rememberTextFieldState()
    val searchBarState = rememberSearchBarState()

    val inputField =
        @Composable {
            SearchBarDefaults.InputField(
                searchBarState = searchBarState,
                textFieldState = textFieldState,
                onSearch = { viewModel.onSearchTextChange(it) },
                placeholder = {
                    Text("Search...")
                },
                leadingIcon = {
                    if (searchBarState.currentValue == SearchBarValue.Expanded) {
                        IconButton(
                            onClick = { scope.launch { searchBarState.animateToCollapsed() } }
                        ) {
                            Icon(
                                Icons.AutoMirrored.Default.ArrowBack,
                                contentDescription = "Back"
                            )
                        }
                    } else {
                        Icon(Icons.Default.Search, contentDescription = null)
                    }
                },
                trailingIcon = {
                    IconButton(onClick = {
                        textFieldState.setTextAndPlaceCursorAtEnd("")
                    }) { Icon(Icons.Default.Clear, contentDescription = null) }
                },
            )
        }

    val context = LocalContext.current

    val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior()
    PullToRefresh(
        isRefreshing = reloading.value,
        onRefresh = viewModel::refetchData,
    ) {
        Scaffold(modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection), topBar = {
            ExpandedFullScreenSearchBar(searchBarState, inputField) {
                LaunchedEffect(textFieldState.text) {
                    viewModel.onSearchTextChange(textFieldState.text.toString())
                }

                for (i in filtered.value) {
                    PoolResultItem(
                        poolResult = i,
                    )
                }
            }
            MediumFlexibleTopAppBar(
                title = {
                    Text(
                        poolResultsData.value?.title ?: "Pool Results",
                    )
                },
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
                            "https://fencingtimelive.com/pools/results/${event.id}/$roundId",
                            context
                        )
                    }) {
                        Icon(Icons.Default.Explore, contentDescription = null)
                    }
                    IconButton(onClick = {
                        scope.launch { searchBarState.animateToExpanded() }
                    }, modifier = Modifier.onGloballyPositioned { coordinates ->
//                        searchBarState.collapsedCoords = coordinates
                    }) {
                        Icon(Icons.Default.Search, contentDescription = null)
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

                itemsIndexed(
                    poolResultsData.value?.poolResults ?: emptyList(),
                    key = { index, poolResult -> poolResult.id }) { index, poolResult ->
                    PoolResultItem(
                        poolResult = poolResult,
                        modifier = Modifier.animateItem()
                    )
                    if (index != poolResultsData.value?.poolResults?.lastIndex) {
                        HorizontalDivider()
                    }
                }
            }
            LoadingScreen(
                poolResultsData.value == null && error.value == null,
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