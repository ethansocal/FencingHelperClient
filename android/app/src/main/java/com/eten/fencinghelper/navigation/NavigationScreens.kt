package com.eten.fencinghelper.navigation

import androidx.annotation.StringRes
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountBox
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material.icons.outlined.AccountBox
import androidx.compose.material.icons.outlined.Notifications
import androidx.compose.ui.graphics.vector.ImageVector
import com.eten.fencinghelper.R

sealed class Screen(
    val route: Any,
    @param:StringRes val resourceId: Int,
    val unselectedIcon: ImageVector,
    val selectedIcon: ImageVector
) {
    data object TournamentScreen :
        Screen(
            FencingTimeLive,
            R.string.fencing_time_live,
            Icons.Outlined.Notifications,
            Icons.Filled.Notifications
        )

    data object MembershipScreen :
        Screen(
            Memberships,
            R.string.memberships,
            Icons.Outlined.AccountBox,
            Icons.Default.AccountBox
        )

//    data object RecordingsScreen :
//        Screen(Recordings, R.string.recordings, Icons.Outlined.PlayCircle, Icons.Filled.PlayCircle)
}

val items = listOf(
    Screen.TournamentScreen,
    Screen.MembershipScreen,
//    Screen.RecordingsScreen
)