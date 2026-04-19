// NueroUI Jetpack Compose Design Tokens v1.0.0
// Date: 2026-04-19 | Output: Hermes01

package com.nueroui.tokens

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

object NueroColors {
    val bgPrimary    = Color(0xFF0B0E17)
    val bgSecondary  = Color(0xFF131829)
    val bgElevated   = Color(0xFF1A2035)
    val bgOverlay    = Color(0xFF212A45)
    val bgInput      = Color(0xFF0F121E)
    val accentPrimary   = Color(0xFF00D4FF)
    val accentSecondary  = Color(0xFF7B61FF)
    val accentTertiary   = Color(0xFFFF6B35)
    val success = Color(0xFF00E676)
    val warning = Color(0xFFFFB300)
    val danger  = Color(0xFFFF3D71)
    val info    = Color(0xFF00D4FF)
    val vermilion = Color(0xFFE8344A)
    val gold      = Color(0xFFC9A84C)
    val jade     = Color(0xFF00C48C)
    val textPrimary   = Color(0xFFF0F4FF)
    val textSecondary = Color(0xFF8892B0)
    val textTertiary  = Color(0xFF4A5578)
    val textInverse   = Color(0xFF0B0E17)
    val border      = Color(0x14FFFFFF)
    val borderHover = Color(0x5900D4FF)
    val borderFocus  = Color(0xFF00D4FF)
}

object NueroSpacing { val unit = 4.dp }
object NueroRadius {
    val sm = 4.dp; val md = 8.dp
    val lg = 16.dp; val xl = 24.dp
    val full = 9999.dp
}

// NUIButton Composable
@Composable fun NUIButton(
    text: String,
    variant: ButtonVariant = ButtonVariant.Primary,
    onClick: () -> Unit = {}
) {
    val bg = when(variant) {
        ButtonVariant.Primary -> NueroColors.accentPrimary
        ButtonVariant.Secondary -> NueroColors.bgElevated
        ButtonVariant.Ghost -> NueroColors.bgPrimary
        ButtonVariant.Danger -> NueroColors.danger
        ButtonVariant.Outline -> NueroColors.bgPrimary
    }
    val fg = when(variant) {
        ButtonVariant.Primary -> NueroColors.textInverse
        ButtonVariant.Secondary, ButtonVariant.Ghost -> NueroColors.textPrimary
        ButtonVariant.Danger -> Color.White
        ButtonVariant.Outline -> NueroColors.accentPrimary
    }
    androidx.compose.material3.Button(
        onClick = onClick,
        colors = androidx.compose.material3.ButtonDefaults.buttonColors(containerColor = bg, contentColor = fg),
        shape = androidx.compose.foundation.shape.RoundedCornerShape(NueroRadius.md),
        elevation = null
    ) { Text(text, fontSize = 14.sp, fontWeight = androidx.compose.ui.text.font.FontWeight.Medium) }
}
enum class ButtonVariant { Primary, Secondary, Ghost, Danger, Outline }
