package com.eten.fencinghelper.ui

import android.graphics.Bitmap
import androidx.compose.foundation.Canvas
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.produceState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.toArgb
import androidx.core.graphics.createBitmap
import androidx.core.graphics.scale
import androidx.core.graphics.set
import com.google.zxing.BarcodeFormat
import com.google.zxing.MultiFormatWriter
import com.google.zxing.common.BitMatrix

private fun BitMatrix.toBitmap(foreground: Int, background: Int): Bitmap {
    return createBitmap(width, height).apply {
        for (x in 0 until width) {
            val pixelColor = if (get(x, 0)) {
                foreground
            } else {
                background
            }
            this[x, 0] = pixelColor
        }
    }
}

sealed class Result<out T> {
    data object Loading : Result<Nothing>()
    class Success<T>(val data: T) : Result<T>()
}

@Composable
fun loadBarcode(
    barcodeValue: String,
): State<Result<Bitmap>> {
    // Creates a State<T> with Result.Loading as initial value
    // If either `url` or `imageRepository` changes, the running producer
    // will cancel and will be re-launched with the new inputs.
    return produceState<Result<Bitmap>>(initialValue = Result.Loading, barcodeValue) {
        // In a coroutine, can make suspend calls
        val barcode = MultiFormatWriter().encode(
            barcodeValue,
            BarcodeFormat.CODE_128,
            1,
            1
        ).toBitmap(
            Color.Black.toArgb(), Color.White.toArgb()
        )
        value = Result.Success(
            barcode
        )
    }
}


@Composable
fun Barcode(value: String, modifier: Modifier = Modifier) {
    val uiState by loadBarcode(value)
    when (val state = uiState) {
        is Result.Loading -> {
            CircularProgressIndicator(modifier = modifier)
        }

        is Result.Success -> {
            Canvas(modifier = modifier) {
                val resizedBitmap = state.data.scale(size.width.toInt(), size.height.toInt(), false)
                drawImage(
                    resizedBitmap.asImageBitmap()
                )
            }
        }
    }

}