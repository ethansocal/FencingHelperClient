package com.eten.fencinghelper.feature.memberships

import android.util.Log
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.models.Membership
import com.eten.fencinghelper.models.MembershipDao
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.dsl.module

class MembershipsEditViewModel(
    private val membershipDao: MembershipDao,
) :
    ViewModel() {
    val memberships = membershipDao.getAllMemberships()
        .catch { exception -> exception.localizedMessage?.let { Log.e(TAG, it) } }
        .stateIn(viewModelScope, SharingStarted.Eagerly, emptyList())


    fun deleteMembership(membership: Membership) {
        viewModelScope.launch { membershipDao.deleteMembership(membership) }
    }
}

val membershipEditModule = module {
    viewModel {
        MembershipsEditViewModel(get())
    }
}

@OptIn(ExperimentalMaterial3Api::class, ExperimentalFoundationApi::class)
@Composable
fun MembershipEditView(
    viewModel: MembershipsEditViewModel = koinViewModel(),
    goBack: () -> Unit,
    navigateToCreateMemberships: () -> Unit
) {
    val memberships = viewModel.memberships.collectAsStateWithLifecycle()

    Scaffold(topBar = {
        TopAppBar(
            title = { Text(text = "Edit Memberships") },
            navigationIcon = {
                IconButton(onClick = goBack) {
                    Icon(
                        Icons.AutoMirrored.Default.ArrowBack,
                        "back"
                    )
                }
            },
            actions = {
                IconButton(onClick = navigateToCreateMemberships) {
                    Icon(Icons.Default.Add, "Create membership")
                }
            }
        )
    }) { innerPadding ->
        Column(
            modifier = Modifier
                .consumeWindowInsets(innerPadding)
                .padding(innerPadding),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            memberships.value.forEach {
                ListItem(
                    headlineContent = { Text(it.name) },
                    trailingContent = {
                        IconButton({ viewModel.deleteMembership(it) }) {
                            Icon(
                                Icons.Filled.Delete,
                                "delete"
                            )
                        }
                    }, supportingContent = { Text("Member #: ${it.usfaId}") })
            }
        }
    }
}

