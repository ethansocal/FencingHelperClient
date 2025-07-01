package com.eten.fencinghelper.feature.memberships

import android.util.Log
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.models.Membership
import com.eten.fencinghelper.models.MembershipDao
import com.eten.fencinghelper.modules.ApiService
import com.eten.fencinghelper.modules.PossibleMembership
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.dsl.module
import java.util.Date

class MembershipCreateViewModel(
    private val membershipDao: MembershipDao,
    private val apiService: ApiService
) :
    ViewModel() {
    val memberships = membershipDao.getAllMemberships()
        .catch { exception -> exception.localizedMessage?.let { Log.e(TAG, it) } }
        .stateIn(viewModelScope, SharingStarted.Eagerly, emptyList())

    suspend fun addMembership(name: String, membershipId: Int) {
        val fencerInfo = apiService.fencerInfo(membershipId, name)
        membershipDao.addMembership(
            Membership(
                usfaId = membershipId,
                name = name,
                year = fencerInfo.year,
                country = fencerInfo.country,
                countryIOC = fencerInfo.countryIOC,
                club = fencerInfo.club,
                clubId = fencerInfo.clubId,
                clubSymbol = fencerInfo.clubSymbol,
                epee = fencerInfo.epee,
                foil = fencerInfo.foil,
                saber = fencerInfo.saber,
                displayOrder = (memberships.value.maxOfOrNull { it.displayOrder } ?: -1) + 1,
                lastRefreshed = Date()
            ))
    }

    private val _searchResults = MutableStateFlow(emptyList<PossibleMembership>())
    val searchResults = _searchResults.asStateFlow()

    private val _error: MutableStateFlow<String?> = MutableStateFlow(null)
    val errorMessage = _error.asStateFlow()

    private var searchJob: Job? = null

    fun searchFencers(name: String) {
        searchJob?.cancel()
        searchJob = viewModelScope.launch {
            delay(500)
            Log.d(TAG, "Searching for $name")
            try {
                _searchResults.value = apiService.search(name)
            } catch (e: Exception) {
                Log.e(TAG, e.localizedMessage ?: "Unknown error")
                _error.value = e.localizedMessage
                _searchResults.value = emptyList()
            }
        }
    }
}

val membershipCreateModule = module {
    viewModel {
        MembershipCreateViewModel(get(), get())
    }
}

@OptIn(ExperimentalMaterial3Api::class, ExperimentalFoundationApi::class)
@Composable
fun MembershipCreateView(
    viewModel: MembershipCreateViewModel = koinViewModel(),
    goBack: () -> Unit
) {
    val searchResults = viewModel.searchResults.collectAsStateWithLifecycle()
    var name by rememberSaveable { mutableStateOf("") }

    var scope = rememberCoroutineScope()

    Scaffold(topBar = {
        TopAppBar(
            title = { Text(text = "Add Membership") },
            navigationIcon = {
                IconButton(onClick = goBack) {
                    Icon(
                        Icons.AutoMirrored.Default.ArrowBack,
                        "back"
                    )
                }
            }
        )
    }) { innerPadding ->

        Column(
            modifier = Modifier
                .consumeWindowInsets(innerPadding)
                .padding(innerPadding)
                .fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            OutlinedTextField(
                value = name,
                onValueChange = {
                    name = it
                    viewModel.searchFencers(name)
                },
                placeholder = { Text("Name") },
                singleLine = true,
            )
            if (searchResults.value.isEmpty()) {
                if (name == "") {
                    Text(
                        "Enter a fencer's name in the search bar",
                        modifier = Modifier.fillMaxSize(),
                        textAlign = TextAlign.Center
                    )
                } else
                    Text(
                        "No results found",
                        modifier = Modifier.fillMaxSize(),
                        textAlign = TextAlign.Center
                    )
            }
            searchResults.value.forEach { result ->
                ListItem(
                    headlineContent = {
                        Text(
                            listOf(
                                result.name.replace("-", " "),
                                result.club
                            ).joinToString(separator = " - ")
                        )
                    },
                    supportingContent = { Text("Member #: ${result.usfaId}") },
                    trailingContent = {
                        IconButton(onClick = {
                            scope.launch {
                                viewModel.addMembership(
                                    result.name.replace(
                                        "-",
                                        " "
                                    ), result.usfaId
                                )
                                goBack()
                            }
                        }) {
                            Icon(
                                Icons.Filled.Add,
                                contentDescription = "Add fencer"
                            )
                        }
                    },
                )
            }
        }
    }

}