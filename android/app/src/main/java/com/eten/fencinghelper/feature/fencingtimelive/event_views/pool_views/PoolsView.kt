package com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.input.rememberTextFieldState
import androidx.compose.foundation.text.input.setTextAndPlaceCursorAtEnd
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.Check
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
import androidx.compose.material3.LocalTextStyle
import androidx.compose.material3.MediumFlexibleTopAppBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SearchBarDefaults
import androidx.compose.material3.SearchBarValue
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.rememberSearchBarState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.ParagraphStyle
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.text.style.TextIndent
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.Pool
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

class PoolsViewModel(
    val apiService: ApiService,
    val event: TournamentData.Day.Event,
    val roundId: String
) :
    ViewModel() {
    private var _pools = MutableStateFlow<List<Pool>?>(null)
    val poolsData = _pools.asStateFlow()

    private var _error = MutableStateFlow<String?>(null)
    val error = _error.asStateFlow()

    private var _reloading = MutableStateFlow<Boolean>(false)
    val reloading = _reloading.asStateFlow()


    private val _filtered = MutableStateFlow<Map<Pool, List<Int>>>(emptyMap())
    val filtered = _filtered.asStateFlow()

    fun onSearchTextChange(text: String) {
        if (text.isEmpty()) {
            _filtered.value = emptyMap()
            return
        }
        _filtered.value = _pools.value?.associateWith {
            it.fencers.mapIndexed { index, fencer ->
                if (fencer.name.contains(text, ignoreCase = true) || fencer.affiliation.contains(
                        text,
                        ignoreCase = true
                    )
                ) index else null
            }.filterNotNull()
        }?.filter {
            it.value.isNotEmpty()
        } ?: emptyMap()
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
            _pools.value = apiService.getPools(event.id, roundId)
            _error.value = null
        } catch (e: Exception) {
            _pools.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val poolsModule = module {
    viewModel {
        PoolsViewModel(get(), get(), get())
    }
}

fun formatIndicator(indicator: Int): String {
    if (indicator > 0) {
        return "+${indicator}"
    }
    return indicator.toString()
}

@Composable
fun makeNumberedList(items: List<String>, highlighted: List<Int>): AnnotatedString {
    var bulletNumber = 1
    val textStyle = LocalTextStyle.current
    val textMeasurer = rememberTextMeasurer()
    val bulletStringWidth = remember(textStyle, textMeasurer) {
        textMeasurer.measure(text = "$bulletNumber.\t\t", style = textStyle).size.width
    }
    val restLine = with(LocalDensity.current) { bulletStringWidth.toSp() }
    val paragraphStyle = ParagraphStyle(textIndent = TextIndent(restLine = restLine))

    return buildAnnotatedString {
        items.forEachIndexed { index, text ->
            withStyle(style = paragraphStyle) {
                append("${bulletNumber++}.\t\t")
                if (index in highlighted) {
                    withStyle(style = SpanStyle(fontWeight = FontWeight.Bold)) {
                        append(text)
                    }
                } else {
                    append(text)
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PoolItem(
    pool: Pool,
    navigateToPool: () -> Unit,
    modifier: Modifier = Modifier,
    highlighted: List<Int> = emptyList()
) {
    ListItem(
        headlineContent = {
            Text(
                "Pool #${pool.poolNum} - ${pool.poolStripTime}"
            )
        },
        leadingContent = {
            if (pool.finished) Icon(Icons.Default.Check, contentDescription = "Finished") else Icon(
                Icons.Default.Clear,
                "Not Finished"
            )
        },
        supportingContent = {
            Text(makeNumberedList(pool.fencers.map { it.formattedName }, highlighted))
        }, trailingContent = {
            Icon(Icons.AutoMirrored.Default.ArrowForward, contentDescription = null)
        },
        modifier = modifier.clickable(onClick = navigateToPool)
    )
}


@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun PoolsView(
    event: TournamentData.Day.Event,
    roundId: String,
    goBack: () -> Unit,
    navigateToPool: (Pool) -> Unit,
) {
    val viewModel: PoolsViewModel = koinViewModel(parameters = { parametersOf(event, roundId) })

    val pools = viewModel.poolsData.collectAsStateWithLifecycle()
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
                    PoolItem(
                        pool = i.key,
                        navigateToPool = { navigateToPool(i.key) },
                        highlighted = i.value
                    )
                }
            }
            MediumFlexibleTopAppBar(
                title = {
                    Text(
                        "Pools",
                    )
                },
                subtitle = {
                    pools.value?.let {
                        Text("${it.count { pool -> pool.finished }}/${it.count()} completed")
                    }
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
                            "https://fencingtimelive.com/pools/scores/${event.id}/$roundId",
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
                    pools.value ?: emptyList(),
                    key = { index, pool -> pool.id }) { index, pool ->
                    PoolItem(
                        pool = pool,
                        navigateToPool = { navigateToPool(pool) },
                        modifier = Modifier.animateItem()
                    )
                    if (index != pools.value?.lastIndex) {
                        HorizontalDivider()
                    }
                }
            }
            LoadingScreen(
                pools.value == null && error.value == null,
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