package com.eten.fencinghelper.feature.fencingtimelive.event_views

import android.util.Log
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.input.rememberTextFieldState
import androidx.compose.foundation.text.input.setTextAndPlaceCursorAtEnd
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.QuestionMark
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.ExpandedFullScreenSearchBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.MediumFlexibleTopAppBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SearchBarDefaults
import androidx.compose.material3.SearchBarValue
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.rememberSearchBarState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.formatRank
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.FencersData
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


class FencersViewModel(val apiService: ApiService, val event: TournamentData.Day.Event) :
    ViewModel() {
    private var _fencersData = MutableStateFlow<FencersData?>(null)
    val fencersData = _fencersData.asStateFlow()

    private var _error = MutableStateFlow<String?>(null)
    val error = _error.asStateFlow()

    private var _reloading = MutableStateFlow<Boolean>(false)
    val reloading = _reloading.asStateFlow()


    private val _filtered = MutableStateFlow<List<FencersData.Fencer>>(emptyList())
    val filtered = _filtered.asStateFlow()

    fun onSearchTextChange(text: String) {
        if (text.isEmpty()) {
            _filtered.value = emptyList()
            return
        }
        _filtered.value = _fencersData.value?.fencers?.filter {
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
            _fencersData.value = apiService.getFencers(event.id)
            _error.value = null
        } catch (e: Exception) {
            _fencersData.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val fencerModule = module {
    viewModel {
        FencersViewModel(get(), get())
    }
}


@Composable
fun FencerItem(
    fencer: FencersData.Fencer,
    modifier: Modifier = Modifier
) {
    ListItem(
        headlineContent = { Text(fencer.name + formatRank(fencer.weaponRating, fencer.rank)) },
        leadingContent = {
            when (fencer.status) {
                "CheckedIn" -> Icon(Icons.Default.Check, contentDescription = "checked in")
                "Absent" -> Icon(Icons.Default.QuestionMark, contentDescription = "absent")
                "Scratched" -> Icon(Icons.Default.Clear, contentDescription = "scratched")
            }
        },
        supportingContent = {
            Text(
                listOfNotNull(fencer.clubNames, fencer.div, fencer.country)
                    .joinToString(" - ")
            )
        }, modifier = modifier
    )
}


@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun FencersView(
    event: TournamentData.Day.Event,
    goBack: () -> Unit
) {
    val viewModel: FencersViewModel =
        koinViewModel(parameters = { parametersOf(event) })

    val fencers = viewModel.fencersData.collectAsStateWithLifecycle()
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
                    FencerItem(
                        fencer = i,
                    )
                }
            }
            MediumFlexibleTopAppBar(
                title = {
                    Text(
                        "Fencers"
                    )
                },
                subtitle = { if (fencers.value != null) Text("${fencers.value!!.checkedIn} checked in, ${fencers.value!!.absent} absent, ${fencers.value!!.scratched} scratched") },
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
                            "https://fencingtimelive.com/event/${event.id}/fencers",
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
                    fencers.value?.fencers ?: emptyList(),
                    key = { index, fencer -> fencer.id }) { index, fencer ->
                    FencerItem(
                        fencer = fencer,
                        modifier = Modifier.animateItem()
                    )
                    if (index != fencers.value?.fencers?.lastIndex) {
                        HorizontalDivider()
                    }
                }
            }
            LoadingScreen(
                fencers.value == null && error.value == null,
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