package com.eten.fencinghelper.feature.fencingtimelive.event_views.pool_views

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredSize
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.eten.fencinghelper.modules.PoolData
import com.eten.fencinghelper.modules.PreviewApiService
import com.eten.fencinghelper.ui.theme.FencingHelperTheme
import com.eten.fencinghelper.ui.theme.Green
import com.google.android.material.color.MaterialColors

fun addNbsp(text: String): String {
    return text.replace(" ", "\u00A0")
}

@Composable
fun BoutItem(
    bout: PoolData.PoolBout,
    realData: Boolean,
    rightEnteredScore: Int?,
    leftEnteredScore: Int?,
    enteredRightWon: Boolean?,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current

    val onWinContainer = Color(
        MaterialColors.harmonizeWithPrimary(
            context,
            MaterialColors.harmonizeWithPrimary(
                context,
                MaterialColors.getColorRoles(context, Green.toArgb()).onAccentContainer
            )
        )
    )
    val winContainer = Color(
        MaterialColors.harmonizeWithPrimary(
            context,
            MaterialColors.getColorRoles(context, Green.toArgb()).accentContainer
        )
    )

    val rightWon = if (realData) bout.rightWon else enteredRightWon
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp)
            .height(IntrinsicSize.Min),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Row(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                bout.rightPoolPos.toString(),
                modifier = Modifier.widthIn(min = 20.dp),
                color = MaterialTheme.colorScheme.secondary,
            )
            Text(
                bout.rightPoolFormattedName,
                modifier = Modifier.weight(1f, fill = true)
            )

            if (bout.rightPoolScore != null && realData || rightEnteredScore != null) {
                Text(
                    if (realData) bout.rightPoolScore.toString() else rightEnteredScore?.toString() ?: "?",
                    modifier = Modifier
                        .requiredSize(30.dp)
                        .background(
                            if (rightWon == false) MaterialTheme.colorScheme.errorContainer else winContainer
                        )
                        .wrapContentHeight(align = Alignment.CenterVertically),
                    textAlign = TextAlign.Center,
                    fontSize = 20.sp,
                    color = if (rightWon == false) MaterialTheme.colorScheme.onErrorContainer else onWinContainer
                )
            }
        }
        Row(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight(),
            horizontalArrangement = Arrangement.End,
            verticalAlignment = Alignment.CenterVertically
        ) {
            if (bout.leftPoolScore != null && realData || leftEnteredScore != null) {
                Text(
                    if (realData) bout.leftPoolScore.toString() else leftEnteredScore?.toString() ?: "?",
                    textAlign = TextAlign.Center,
                    modifier = Modifier
                        .requiredSize(30.dp)
                        .background(
                            if (rightWon == true) MaterialTheme.colorScheme.errorContainer else winContainer
                        )
                        .wrapContentHeight(align = Alignment.CenterVertically),
                    fontSize = 20.sp,
                    color = if (rightWon == true) MaterialTheme.colorScheme.onErrorContainer else onWinContainer
                )
            }
            Text(
                bout.leftPoolFormattedName,
                textAlign = TextAlign.End,
                modifier = Modifier.weight(1f, fill = true)
            )
            Text(
                bout.leftPoolPos.toString(),
                textAlign = TextAlign.End,
                modifier = Modifier.widthIn(min = 20.dp),
                color = MaterialTheme.colorScheme.secondary
            )
        }
    }
}

@Preview(
    device = "spec:width=411dp,height=891dp", showSystemUi = false, showBackground = true,
    backgroundColor = 0xFFFFFFFF
)
@Composable
fun BoutItemPreview() {
    FencingHelperTheme {
        Column {
            BoutItem(
                bout = PreviewApiService().fetchPool().bouts.first(),
                realData = true,
                rightEnteredScore = 1,
                leftEnteredScore = 5,
                enteredRightWon = false,
            )
            BoutItem(
                bout = PreviewApiService().fetchPool().bouts[3],
                realData = true,
                rightEnteredScore = null,
                leftEnteredScore = null,
                enteredRightWon = null,
            )
            BoutItem(
                bout = PreviewApiService().fetchPool().bouts[3],
                realData = false,
                rightEnteredScore = 5,
                leftEnteredScore = 2,
                enteredRightWon = true,
            )
        }
    }
}