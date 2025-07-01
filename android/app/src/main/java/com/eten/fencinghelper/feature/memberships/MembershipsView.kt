package com.eten.fencinghelper.feature.memberships

import android.app.Activity
import android.content.Context
import android.content.pm.ActivityInfo
import android.content.res.Configuration
import android.util.Log
import android.view.WindowManager
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.TrendingUp
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Link
import androidx.compose.material.icons.filled.WbSunny
import androidx.compose.material.icons.outlined.WbSunny
import androidx.compose.material3.Button
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SecondaryScrollableTabRow
import androidx.compose.material3.Tab
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.LinkAnnotation
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.text.withLink
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewModelScope
import com.eten.fencinghelper.models.Membership
import com.eten.fencinghelper.models.MembershipDao
import com.eten.fencinghelper.openLink
import com.eten.fencinghelper.ui.Barcode
import com.eten.fencinghelper.ui.LockScreenOrientation
import com.eten.fencinghelper.ui.theme.FencingHelperTheme
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.module.dsl.viewModel
import org.koin.dsl.module
import java.util.Date


const val TAG = "Memberships"

class MembershipsViewModel(membershipDao: MembershipDao) : ViewModel() {
    val memberships = membershipDao.getAllMemberships()
        .catch { exception -> exception.localizedMessage?.let { Log.e(TAG, it) } }
        .stateIn(viewModelScope, SharingStarted.Eagerly, emptyList())
}

val membershipsModule = module {
    viewModel {
        MembershipsViewModel(get())
    }
}

fun flag(country: String): String {
    val base = 127397
    return country.uppercase()
        .map { Character.toChars(base + it.code) }
        .joinToString(separator = "") { it.concatToString() }
}

@Composable
fun MembershipCard(membership: Membership) {
    val context = LocalContext.current

    Column {
        ElevatedCard(
            modifier = Modifier
                .width(400.dp)
                .padding(10.dp),

            elevation = CardDefaults.cardElevation(defaultElevation = 6.dp)
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(10.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Row(
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 10.dp)
                ) {
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(5.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            "${membership.name} ${flag(membership.country)}",
                            style = MaterialTheme.typography.titleLarge,
                            fontWeight = FontWeight.Bold,
                        )
                        Icon(
                            Icons.AutoMirrored.Filled.TrendingUp,
                            "Statistics",
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.clickable {
                                openLink(
                                    "https://fencingtracker.com/p/${membership.usfaId}/${membership.name}",
                                    context
                                )

                            }
                        )
                    }
                    if (membership.year != null) Text(
                        membership.year.toString(),
                        style = MaterialTheme.typography.bodyMedium,
                        fontStyle = FontStyle.Italic
                    )
                }
                // TODO: Add refreshing of ratings
                if (membership.clubId != null && membership.clubSymbol != null && membership.club != null)
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(5.dp)
                    ) {
                        Icon(Icons.Default.Link, null)
                        Text(
                            buildAnnotatedString {
                                withLink(LinkAnnotation.Url("https://fencingtracker.com/club/${membership.clubId}/${membership.clubSymbol}/ratings")) {
                                    append(
                                        membership.club
                                    )
                                }
                            }, maxLines = 1, overflow = TextOverflow.Ellipsis
                        )
                    }
                Barcode(
                    value = membership.usfaId.toString(),
                    modifier = Modifier
                        .height(100.dp)
                        .fillMaxWidth(1f)
                        .clip(MaterialTheme.shapes.medium)
                )
                Text("Member #: ${membership.usfaId}", style = MaterialTheme.typography.bodyMedium)
            }
        }
        LazyVerticalGrid(
            columns = GridCells.Fixed(3),
            contentPadding = PaddingValues(vertical = 5.dp, horizontal = 40.dp)
        ) {
            item {
                Text(
                    "Epee",
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(bottom = 10.dp)
                )
            }
            item {
                Text(
                    "Foil",
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(bottom = 10.dp)
                )
            }
            item {
                Text(
                    "Saber",
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(bottom = 10.dp)
                )
            }
            item(span = { GridItemSpan(3) }) {
                HorizontalDivider()
            }
            item {
                Text(
                    membership.epee,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(top = 10.dp),
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                )
            }
            item {
                Text(
                    membership.foil,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(top = 10.dp),
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                )
            }
            item {
                Text(
                    membership.saber,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(top = 10.dp),
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                )
            }
        }
    }
}

@Preview(showBackground = true)
@Preview(
    showBackground = true, showSystemUi = false,
    uiMode = Configuration.UI_MODE_NIGHT_YES or Configuration.UI_MODE_TYPE_NORMAL,
)
@Composable
fun MembershipCardPreview() {
    FencingHelperTheme {
        MembershipCard(
            Membership(
                usfaId = 100347745,
                name = "Ethan Henry",
                year = 2008,
                country = "US",
                countryIOC = "USA",
                club = "Southern California Fencing Academy",
                clubId = 100230102,
                clubSymbol = "SCFA",
                epee = "U",
                foil = "U",
                saber = "D25",
                displayOrder = 0,
                lastRefreshed = Date()
            )
        )
    }
}


@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MembershipsView(
    membershipsViewModel: MembershipsViewModel = koinViewModel(),
    navigateToMemberships: () -> Unit,
    navigateToCreateMembership: () -> Unit
) {
    val coroutineScope = rememberCoroutineScope()
    val memberships = membershipsViewModel.memberships.collectAsStateWithLifecycle()
    val pagerState = rememberPagerState {
        memberships.value.size
    }
    val context = LocalContext.current
    var bright by remember { mutableStateOf(false) }

    LockScreenOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT)
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(text = "Memberships") },
                actions = {
                    if (memberships.value.isNotEmpty()) {
                        IconButton(onClick = { bright = !bright }) {
                            Icon(
                                if (bright) Icons.Filled.WbSunny else Icons.Outlined.WbSunny,
                                "Make brighter"
                            )
                        }
                        IconButton(onClick = { navigateToMemberships() }) {
                            Icon(
                                Icons.Filled.Edit,
                                "Manage memberships"
                            )
                        }
                    } else IconButton(onClick = { navigateToCreateMembership() }) {
                        Icon(
                            Icons.Filled.Edit,
                            "Create membership"
                        )
                    }
                })
        }) { innerPadding ->
        Column(
            modifier = Modifier
                .consumeWindowInsets(innerPadding)
                .padding(innerPadding),
        ) {
            if (memberships.value.size > 1) {
                SecondaryScrollableTabRow(
                    selectedTabIndex = pagerState.currentPage,
                    modifier = Modifier.fillMaxWidth(),
                    edgePadding = 0.dp
                ) {
                    memberships.value.forEachIndexed { index, membership ->
                        Tab(
                            selected = pagerState.currentPage == index,
                            modifier = Modifier
                                .height(48.dp)
                                .width(200.dp),
                            onClick = { coroutineScope.launch { pagerState.scrollToPage(index) } }) {
                            Text(
                                membership.name
                            )
                        }
                    }
                }
            } else Unit
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier
                    .fillMaxSize(),
                verticalArrangement = Arrangement.Center
            ) {
                if (memberships.value.isNotEmpty()) {
                    HorizontalPager(state = pagerState, beyondViewportPageCount = 1) { page ->
                        MembershipCard(membership = memberships.value[page])
                    }
                    if (bright) {
                        DisposableEffect(Unit) {
                            setBrightness(context, isFull = true)
                            onDispose {
                                setBrightness(context, isFull = false)
                            }
                        }
                    }
                } else {
                    Button(onClick = navigateToCreateMembership) {
                        Text("Add your first membership")
                    }
                }
            }
        }
    }
}

fun setBrightness(context: Context, isFull: Boolean) {
    val activity = context as? Activity ?: return
    val layoutParams: WindowManager.LayoutParams = activity.window.attributes
    layoutParams.screenBrightness =
        if (isFull) WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_FULL else WindowManager.LayoutParams.BRIGHTNESS_OVERRIDE_NONE
    activity.window.attributes = layoutParams
}
