// NueroUI SwiftUI Design Tokens v1.0.0
// Date: 2026-04-19 | Output: Hermes01

import SwiftUI

struct NueroColors {
    // Background
    static let bgPrimary    = Color(hex: "0B0E17")
    static let bgSecondary  = Color(hex: "131829")
    static let bgElevated   = Color(hex: "1A2035")
    static let bgOverlay    = Color(hex: "212A45")
    static let bgInput      = Color(hex: "0F121E")
    // Accent
    static let accentPrimary   = Color(hex: "00D4FF")
    static let accentSecondary  = Color(hex: "7B61FF")
    static let accentTertiary   = Color(hex: "FF6B35")
    // Functional
    static let success = Color(hex: "00E676")
    static let warning = Color(hex: "FFB300")
    static let danger  = Color(hex: "FF3D71")
    static let info    = Color(hex: "00D4FF")
    // Chinese
    static let vermilion = Color(hex: "E8344A")
    static let gold      = Color(hex: "C9A84C")
    static let jade     = Color(hex: "00C48C")
    // Text
    static let textPrimary   = Color(hex: "F0F4FF")
    static let textSecondary = Color(hex: "8892B0")
    static let textTertiary  = Color(hex: "4A5578")
    static let textInverse   = Color(hex: "0B0E17")
    // Border
    static let border      = Color.white.opacity(0.08)
    static let borderHover = Color(hex: "00D4FF").opacity(0.35)
    static let borderFocus  = Color(hex: "00D4FF")
}

struct NueroSpacing { static let unit: CGFloat = 4 }
struct NueroRadius {
    static let sm: CGFloat = 4; static let md: CGFloat = 8
    static let lg: CGFloat = 16; static let xl: CGFloat = 24
    static let full: CGFloat = 9999
}

extension Color { init(hex: String) {
    let r = Double(Int(hex[hex.index(hex.startIndex, offsetBy:0)..<hex.index(hex.startIndex, offsetBy:2)])!, radix: 16)!/255
    let g = Double(Int(hex[hex.index(hex.startIndex, offsetBy:2)..<hex.index(hex.startIndex, offsetBy:4)])!, radix: 16)!/255
    let b = Double(Int(hex[hex.index(hex.startIndex, offsetBy:4)..<hex.index(hex.startIndex, offsetBy:6)])!, radix: 16)!/255
    self.init(red:r, green:g, blue:b)
}}

// NUIButton
struct NUIButton: View {
    enum Variant { case primary, secondary, ghost, danger, outline }
    let variant: Variant; let label: String
    var body: some View {
        Text(label)
            .font(.system(size: 14, weight: .medium))
            .padding(.horizontal, 20).padding(.vertical, 10)
            .background( bg(for: variant) )
            .foregroundColor(fg(for: variant))
            .cornerRadius(8)
            .shadow(color: shadow(for: variant), radius: variant == .primary ? 10 : 0)
    }
    func bg(for v: Variant) -> Color {
        switch v { case .primary: return .accentPrimary
            case .secondary: return .bgElevated
            case .ghost: return .clear
            case .danger: return .danger
            case .outline: return .clear
        }
    }
    func fg(for v: Variant) -> Color {
        switch v { case .primary: return .textInverse
            case .secondary, .ghost: return .textPrimary
            case .danger: return .white
            case .outline: return .accentPrimary
        }
    }
    func shadow(for v: Variant) -> Color {
        switch v { case .primary: return .accentPrimary.opacity(0.35)
            case .danger: return .danger.opacity(0.5)
            default: return .clear
        }
    }
}
