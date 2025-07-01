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
import com.eten.fencinghelper.formatRank
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.ResultsData
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

class ResultsViewModel(
    val apiService: ApiService,
    val event: TournamentData.Day.Event,
) :
    ViewModel() {
    private var _resultsData = MutableStateFlow<ResultsData?>(null)
    val resultsData = _resultsData.asStateFlow()

    private var _error = MutableStateFlow<String?>(null)
    val error = _error.asStateFlow()

    private var _reloading = MutableStateFlow<Boolean>(false)
    val reloading = _reloading.asStateFlow()


    private val _filtered = MutableStateFlow<List<ResultsData.Result>>(emptyList())
    val filtered = _filtered.asStateFlow()

    fun onSearchTextChange(text: String) {
        if (text.isEmpty()) {
            _filtered.value = emptyList()
            return
        }
        _filtered.value = _resultsData.value?.results?.filter {
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
            _resultsData.value = apiService.getResults(event.id)
            _error.value = null
        } catch (e: Exception) {
            _resultsData.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val resultsModule = module {
    viewModel {
        ResultsViewModel(get(), get())
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ResultItem(
    result: ResultsData.Result,
    modifier: Modifier = Modifier
) {
    var showingSheet by remember { mutableStateOf(false) }

    ListItem(
        headlineContent = {
            Text(
                result.name + formatRank(result.oldRating),
            )
        },
        leadingContent = {
            Text(result.place)
        },
        supportingContent = {
            Text(
                listOfNotNull(
                    result.clubs,
                    result.div,
                    result.country
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
                Text(
                    result.name + formatRank(result.oldRating),
                    style = MaterialTheme.typography.headlineMedium
                )
                Text(
                    listOfNotNull(
                        result.clubs,
                        result.div,
                        result.country
                    )
                        .joinToString(" - "),
                    style = MaterialTheme.typography.headlineSmall
                )
                if (result.qualFor != null)
                    Text(
                        "Qualified for: ${result.qualFor}",
                        style = MaterialTheme.typography.bodyLarge
                    )
                if (result.newRating != null)
                    Text(
                        "Rating increased: ${result.oldRating} → ${result.newRating}",
                        style = MaterialTheme.typography.bodyLarge
                    )
            }
        }
    }
}


@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun ResultsView(
    event: TournamentData.Day.Event,
    goBack: () -> Unit
) {
    val viewModel: ResultsViewModel =
        koinViewModel(parameters = { parametersOf(event) })

    val resultsData = viewModel.resultsData.collectAsStateWithLifecycle()
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
                    ResultItem(
                        result = i,
                    )
                }
            }
            MediumFlexibleTopAppBar(
                title = {
                    Text(
                        resultsData.value?.title ?: "Results",
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
                            "https://fencingtimelive.com/events/results/${event.id}",
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
                    resultsData.value?.results ?: emptyList(),
                    key = { index, result -> result.id }) { index, result ->
                    ResultItem(
                        result = result,
                        modifier = Modifier.animateItem()
                    )
                    if (index != resultsData.value?.results?.lastIndex) {
                        HorizontalDivider()
                    }
                }
            }
            LoadingScreen(
                resultsData.value == null && error.value == null,
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