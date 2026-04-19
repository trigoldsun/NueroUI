// NueroUI Flutter Design Tokens v1.0.0
// Date: 2026-04-19 | Output: Hermes01

import 'package:flutter/material.dart';

class NueroColors {
  // Background
  static const bgPrimary    = Color(0xFF0B0E17);
  static const bgSecondary  = Color(0xFF131829);
  static const bgElevated   = Color(0xFF1A2035);
  static const bgOverlay    = Color(0xFF212A45);
  static const bgInput      = Color(0xFF0F121E);
  static const bgHover      = Color(0xFF1E2540);
  static const bgActive     = Color(0xFF252D4A);
  // Accent
  static const accentPrimary   = Color(0xFF00D4FF);
  static const accentSecondary  = Color(0xFF7B61FF);
  static const accentTertiary   = Color(0xFFFF6B35);
  // Functional
  static const success = Color(0xFF00E676);
  static const warning = Color(0xFFFFB300);
  static const danger  = Color(0xFFFF3D71);
  static const info    = Color(0xFF00D4FF);
  // Chinese
  static const vermilion = Color(0xFFE8344A);
  static const gold      = Color(0xFFC9A84C);
  static const jade     = Color(0xFF00C48C);
  // Text
  static const textPrimary   = Color(0xFFF0F4FF);
  static const textSecondary = Color(0xFF8892B0);
  static const textTertiary  = Color(0xFF4A5578);
  static const textInverse   = Color(0xFF0B0E17);
  // Border
  static const border      = Color(0x14FFFFFF);
  static const borderHover = Color(0x5900D4FF);
  static const borderFocus  = Color(0xFF00D4FF);
}

class NueroSpacing {
  static const double = 0.25; // 4px
  static const unit   = 4.0;
  static const xs     = 4.0;
  static const sm     = 8.0;
  static const md     = 16.0;
  static const lg     = 24.0;
  static const xl     = 32.0;
  static const xxl    = 48.0;
}

class NueroRadius {
  static const sm   = 4.0;
  static const md   = 8.0;
  static const lg   = 16.0;
  static const xl   = 24.0;
  static const full = 9999.0;
}

class NueroTypography {
  static const display = TextStyle(fontFamily: 'Outfit', fontWeight: FontWeight.w600);
  static const body    = TextStyle(fontFamily: 'Inter', fontWeight: FontWeight.w400);
  static const mono    = TextStyle(fontFamily: 'JetBrains Mono', fontWeight: FontWeight.w400);
}

class NueroTheme {
  static ThemeData get dark => ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: NueroColors.bgPrimary,
    primaryColor: NueroColors.accentPrimary,
    colorScheme: ColorScheme.dark(
      primary: NueroColors.accentPrimary,
      secondary: NueroColors.accentSecondary,
      surface: NueroColors.bgSecondary,
      error: NueroColors.danger,
    ),
    fontFamily: 'Inter',
    appBarTheme: AppBarTheme(backgroundColor: NueroColors.bgSecondary),
    cardTheme: CardTheme(
      color: NueroColors.bgSecondary,
      elevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      side: BorderSide(color: NueroColors.border),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: NueroColors.accentPrimary,
        foregroundColor: NueroColors.textInverse,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true, fillColor: NueroColors.bgInput,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: NueroColors.border)),
      focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(8), borderSide: BorderSide(color: NueroColors.borderFocus, width: 2)),
    ),
    dividerTheme: DividerThemeData(color: NueroColors.border, thickness: 1),
  );
}
