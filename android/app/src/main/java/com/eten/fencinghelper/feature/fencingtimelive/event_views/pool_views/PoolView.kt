package com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views

import android.annotation.SuppressLint
import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.input.TextFieldLineLimits
import androidx.compose.foundation.text.input.rememberTextFieldState
import androidx.compose.foundation.text.input.setTextAndPlaceCursorAtEnd
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.automirrored.filled.ArrowForward
import androidx.compose.material.icons.filled.AppRegistration
import androidx.compose.material.icons.filled.Explore
import androidx.compose.material.icons.filled.FormatListNumbered
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.ExposedDropdownMenuAnchorType
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.MediumFlexibleTopAppBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.models.PreviewStoredBoutDataDao
import com.eten.fencinghelper.models.StoredBoutDataDao
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.Pool
import com.eten.fencinghelper.modules.PoolData
import com.eten.fencinghelper.modules.PreviewApiService
import com.eten.fencinghelper.modules.TournamentData
import com.eten.fencinghelper.openLink
import com.eten.fencinghelper.ui.ErrorScreen
import com.eten.fencinghelper.ui.Header
import com.eten.fencinghelper.ui.LoadingScreen
import com.eten.fencinghelper.ui.PullToRefresh
import com.eten.fencinghelper.ui.theme.FencingHelperTheme
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.core.parameter.parametersOf
import org.koin.dsl.module

class PoolViewModel(
    val apiService: ApiService,
    val storedBoutDataDao: StoredBoutDataDao,
    val event: TournamentData.Day.Event,
    val roundId: String,
    val pool: Pool
) :
    ViewModel() {
    private var _poolData = MutableStateFlow<PoolData?>(null)
    val poolData = _poolData.asStateFlow()

    private var _error = MutableStateFlow<String?>(null)
    val error = _error.asStateFlow()

    private var _reloading = MutableStateFlow(false)
    val reloading = _reloading.asStateFlow()

    private var _realData = MutableStateFlow(true)
    val realData = _realData.asStateFlow()
    fun onRealDataChange(value: Boolean) {
        _realData.value = value
    }

    private var _trackingEveryoneScores = MutableStateFlow(true)
    val trackingEveryoneScores = _trackingEveryoneScores.asStateFlow()
    fun onTrackingEveryoneScoresChange(value: Boolean) {
        _trackingEveryoneScores.value = value
    }

    private var _tracking = MutableStateFlow<String?>(null)
    val tracking = _tracking.asStateFlow()

    fun onTrackingChange(value: String?) {
        _tracking.value = value
        calculateMostAfter()
    }

    fun calculateMostAfter() {
        if (_tracking.value == null) {
            _usuallyAfter.value = null
        } else {
            val counts = mutableMapOf<String, Int>()
            _poolData.value?.bouts?.let {
                it.forEachIndexed { index, bout ->
                    if (index != it.lastIndex) {
                        if (it[index + 1].leftPoolName == _tracking.value || it[index + 1].rightPoolName == _tracking.value) {
                            counts[bout.rightPoolName] =
                                counts.getOrDefault(bout.rightPoolName, 0) + 1
                            counts[bout.leftPoolName] =
                                counts.getOrDefault(bout.leftPoolName, 0) + 1
                        }
                    }
                }
            }
            _usuallyAfter.value = counts.maxByOrNull { it.value }?.key
        }
    }

    private var _usuallyAfter = MutableStateFlow<String?>(null)
    val usuallyAfter = _usuallyAfter.asStateFlow()

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
            _poolData.value = apiService.getPool(event.id, roundId, pool.id)
            _error.value = null
        } catch (e: Exception) {
            _poolData.value = null
            _error.value = e.message
            e.printStackTrace()
            Log.e(TAG, "Error fetching tournament schedule", e)
        }
    }

    companion object {
        const val TAG = "TournamentViewModel"
    }
}

val poolModule = module {
    viewModel {
        PoolViewModel(get(), get(), get(), get(), get())
    }
}

@OptIn(ExperimentalMaterial3Api::class, ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun PoolView(
    event: TournamentData.Day.Event,
    roundId: String,
    pool: Pool,
    goBack: () -> Unit,
    navigateToPoolFencers: () -> Unit,
    navigateToPoolGrid: () -> Unit,
    navigateToPoolStats: () -> Unit,
    viewModel: PoolViewModel = koinViewModel(
        parameters = { parametersOf(event, roundId, pool) }
    )
) {

    val poolData = viewModel.poolData.collectAsStateWithLifecycle()
    val error = viewModel.error.collectAsStateWithLifecycle()
    val reloading = viewModel.reloading.collectAsStateWithLifecycle()
    val realData = viewModel.realData.collectAsStateWithLifecycle()
    val trackingEveryoneScores = viewModel.trackingEveryoneScores.collectAsStateWithLifecycle()
    val tracking = viewModel.tracking.collectAsStateWithLifecycle()
    val usuallyAfter = viewModel.usuallyAfter.collectAsStateWithLifecycle()

    var showingSelector by remember { mutableStateOf(false) }

    val context = LocalContext.current

    val scrollBehavior = TopAppBarDefaults.exitUntilCollapsedScrollBehavior()
    PullToRefresh(
        isRefreshing = reloading.value,
        onRefresh = viewModel::refetchData,
    ) {
        Scaffold(modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection), topBar = {
            MediumFlexibleTopAppBar(
                title = {
                    Text(
                        "Pool #${pool.poolNum}",
                    )
                },
                subtitle = {
                    Text(pool.poolStripTime)
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
                            "https://fencingtimelive.com/pools/details/${event.id}/$roundId/${pool.id}",
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
                if (poolData.value?.happened == true) {
                    item("realData") {
                        ListItem(
                            { Text("Real Data") },
                            trailingContent = {
                                Switch(
                                    realData.value,
                                    viewModel::onRealDataChange
                                )
                            }
                        )
                    }
                }
                if (!realData.value && poolData.value?.happened == true) {
                    item("trackingEveryoneScores") {
                        ListItem(
                            { Text("Track Everyone's Scores") },
                            trailingContent = {
                                Switch(
                                    trackingEveryoneScores.value,
                                    viewModel::onTrackingEveryoneScoresChange
                                )
                            },
                            modifier = Modifier.animateItem()
                        )
                    }
                }
                item("trackingFencer") {
                    val textFieldState = rememberTextFieldState()

                    ExposedDropdownMenuBox(
                        modifier = Modifier
                            .padding(horizontal = 16.dp)
                            .fillMaxWidth(),
                        expanded = showingSelector,
                        onExpandedChange = { showingSelector = it }) {
                        TextField(
                            // The `menuAnchor` modifier must be passed to the text field to handle
                            // expanding/collapsing the menu on click. A read-only text field has
                            // the anchor type `PrimaryNotEditable`.
                            modifier = Modifier.menuAnchor(ExposedDropdownMenuAnchorType.PrimaryNotEditable),
                            state = textFieldState,
                            readOnly = true,
                            lineLimits = TextFieldLineLimits.SingleLine,
                            label = { Text("Tracking Fencer") },
                            trailingIcon = {
                                ExposedDropdownMenuDefaults.TrailingIcon(
                                    expanded = showingSelector
                                )
                            },
                            colors = ExposedDropdownMenuDefaults.textFieldColors(),
                        )
                        ExposedDropdownMenu(
                            expanded = showingSelector,
                            onDismissRequest = { showingSelector = false }) {
                            DropdownMenuItem(
                                text = {
                                    Text(
                                        "None",
                                        style = MaterialTheme.typography.bodyLarge
                                    )
                                },
                                onClick = {
                                    textFieldState.setTextAndPlaceCursorAtEnd("")
                                    viewModel.onTrackingChange(null)
                                    showingSelector = false
                                },
                                contentPadding = ExposedDropdownMenuDefaults.ItemContentPadding
                            )
                            for (i in pool.fencers) {
                                DropdownMenuItem(
                                    text = {
                                        Text(
                                            i.name,
                                            style = MaterialTheme.typography.bodyLarge
                                        )
                                    },
                                    onClick = {
                                        textFieldState.setTextAndPlaceCursorAtEnd(i.name)
                                        viewModel.onTrackingChange(i.name)
                                        showingSelector = false
                                    },
                                    contentPadding = ExposedDropdownMenuDefaults.ItemContentPadding
                                )
                            }
                        }
                    }
                }
                if (usuallyAfter.value != null)
                    item("usuallyAfter") {
                        ListItem(
                            headlineContent = {
                                Text(buildAnnotatedString {
                                    append("${tracking.value} is usually after ")
                                    withStyle(SpanStyle(fontWeight = FontWeight.Bold)) {
                                        append(usuallyAfter.value ?: "Unknown")
                                    }
                                })
                            },
                            modifier = Modifier.animateItem()
                        )
                    }
                item("links") {
                    ListItem(
                        leadingContent = { Icon(Icons.Default.Person, contentDescription = null) },
                        headlineContent = { Text("Pool Fencers") },
                        trailingContent = {
                            Icon(Icons.AutoMirrored.Default.ArrowForward, "")
                        },
                        modifier = Modifier.clickable {
                            navigateToPoolFencers()
                        }
                    )
                    ListItem(
                        leadingContent = {
                            Icon(
                                Icons.Default.AppRegistration,
                                contentDescription = null
                            )
                        },
                        headlineContent = { Text("Pool Grid") },
                        trailingContent = {
                            Icon(Icons.AutoMirrored.Default.ArrowForward, "")
                        },
                        modifier = Modifier.clickable {
                            navigateToPoolGrid()
                        }
                    )
                    ListItem(
                        leadingContent = {
                            Icon(
                                Icons.Default.FormatListNumbered,
                                contentDescription = null
                            )
                        },
                        headlineContent = { Text("Pool Stats") },
                        trailingContent = {
                            Icon(Icons.AutoMirrored.Default.ArrowForward, "")
                        },
                        modifier = Modifier.clickable {
                            navigateToPoolStats()
                        }
                    )
                }
                stickyHeader {
                    Header("Bout List")
                }
                item {
                    Row(
                        horizontalArrangement = Arrangement.SpaceBetween,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 8.dp)
                    ) {
                        Text("Right Fencer", fontWeight = FontWeight.SemiBold)
                        Text("Left Fencer", fontWeight = FontWeight.SemiBold)
                    }
                }
                itemsIndexed(
                    poolData.value?.bouts ?: emptyList(),
                    key = { index, bout -> bout.id }) { index, bout ->
                    BoutItem(
                        bout = bout,
                        realData = realData.value,
                        rightEnteredScore = TODO(),
                        leftEnteredScore = TODO(),
                        enteredRightWon = TODO(),
                    )
                    if (index != poolData.value?.bouts?.lastIndex) {
                        HorizontalDivider()
                    }
                }
            }
            LoadingScreen(
                poolData.value == null && error.value == null,
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

@SuppressLint("ViewModelConstructorInComposable")
@Preview
@Composable
private fun PoolViewPreview() {
    val previewApiService = PreviewApiService()
    val previewStoredBoutDataDao = PreviewStoredBoutDataDao()

    FencingHelperTheme {
        PoolView(
            event = previewApiService.event(),
            roundId = previewApiService.poolRoundId,
            pool = previewApiService.pool(),
            goBack = {},
            navigateToPoolFencers = {},
            navigateToPoolGrid = {},
            navigateToPoolStats = {},
            viewModel = PoolViewModel(
                apiService = previewApiService,
                event = previewApiService.event(),
                roundId = previewApiService.poolRoundId,
                pool = previewApiService.pool(),
                storedBoutDataDao = previewStoredBoutDataDao
            )
        )
    }
}