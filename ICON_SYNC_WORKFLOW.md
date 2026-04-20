# Icon Sync Workflow
> Last Updated: 2026-04-20 | Output: Hermes01

## Problem Statement

hermes-console uses NueroUI icons, but had 13 icons not present in the NueroUI main library. This creates maintenance fragmentation.

## Solution: Unified Icon Source

### Primary Sources (Do Not Edit Directly)
| Source | Style | Icon Count | Platform |
|--------|-------|------------|----------|
| `/root/NueroUI/icons/` | Stroke + Fill dual-variant | 146 icons | Web, React, Vue |
| `/root/BreezeUI/icons/` | Stroke + Fill dual-variant | 226 icons (113 pairs) | BreezeUI ecosystem |

### Consumption Points
| Project | Icons From | Sync Method |
|---------|------------|-------------|
| hermes-console | NueroUI | Copy icons to `hermes-console/frontend/assets/icons/` |
| NueroUI React | NueroUI/icons | Via `nuero-ui-react.tsx` component |
| NueroUI Vue | NueroUI/icons | Via `nuero-ui-vue3.ts` component |
| BreezeUI Web | BreezeUI/icons/outline | Via `breeze-ui.css` |

## Sync Rules

### Rule 1: New Icon Addition
1. Add icon to primary source (`NueroUI/icons/` or `BreezeUI/icons/`)
2. Must have both `-filled.svg` and `-outline.svg` variants
3. Run sync script to propagate to all consumers

### Rule 2: hermes-console Icon Sync
```bash
# Sync hermes-console icons from NueroUI
rsync -av --exclude='*.md' /root/NueroUI/icons/ /root/hermes-console/frontend/assets/icons/

# Verify sync
comm -23 <(ls NueroUI/icons/*.svg | xargs -n1 basename | sort) \
         <(ls hermes-console/frontend/assets/icons/*.svg | xargs -n1 basename | sort)
```

### Rule 3: Version Compatibility
- hermes-console icons MUST be a subset of NueroUI/icons
- Never add icons only to hermes-console without adding to NueroUI first
- Use the "同步图标到主库" (Sync Icons to Main Library) process

## Automated Sync Script

```bash
#!/bin/bash
# sync-icons.sh — Sync icons from primary sources to consumers
# Usage: ./sync-icons.sh [nuero|breeze|all]

set -e

SOURCE_NUERO="/root/NueroUI/icons"
SOURCE_BREEZE="/root/BreezeUI/icons"
DEST_HERMES="/root/hermes-console/frontend/assets/icons"

sync_nuero() {
    echo "Syncing NueroUI icons to hermes-console..."
    for icon in "$SOURCE_NUERO"/*-filled.svg "$SOURCE_NUERO"/*-outline.svg; do
        cp "$icon" "$DEST_HERMES/"
    done
    echo "✓ Synced $(ls "$SOURCE_NUERO"/*.svg | wc -l) NueroUI icons"
}

sync_breeze() {
    echo "Syncing BreezeUI icons..."
    SOURCE_ROOT="/root/BreezeUI/icons"
    DEST_OUTLINE="/root/BreezeUI/icons/outline"
    DEST_FILLED="/root/BreezeUI/icons/filled"
    
    # Ensure directories exist
    mkdir -p "$DEST_OUTLINE" "$DEST_FILLED"
    
    # Root icons are the outline variant (backward compat)
    # Copy root icons to outline/ if not already there
    for icon in "$SOURCE_ROOT"/*.svg; do
        name=$(basename "$icon")
        if [[ "$name" != *"-filled.svg" ]] && [[ "$name" != *"-outline.svg" ]]; then
            # This is a legacy icon without variant suffix
            cp "$icon" "$DEST_OUTLINE/$name"
        fi
    done
    
    # Verify filled/ directory has all paired icons
    MISSING_FILLED=$(comm -23 <(ls "$DEST_OUTLINE"/*.svg 2>/dev/null | sed 's/-outline.svg$//' | sort) \
                                <(ls "$DEST_FILLED"/*.svg 2>/dev/null | sed 's/-filled.svg$//' | sort))
    if [ -n "$MISSING_FILLED" ]; then
        echo "⚠ Warning: $MISSING_FILLED icons missing filled variant"
    fi
    
    echo "✓ BreezeUI sync: $(ls "$DEST_OUTLINE"/*.svg 2>/dev/null | wc -l) outline, $(ls "$DEST_FILLED"/*.svg 2>/dev/null | wc -l) filled"
}

case "${1:-all}" in
    nuero)  sync_nuero ;;
    breeze) sync_breeze ;;
    all)
        sync_nuero
        sync_breeze
        ;;
esac
```

## Icon Naming Convention

```
{icon-name}-filled.svg   — Solid/filled variant (24x24, fill="currentColor")
{icon-name}-outline.svg  — Stroke/outline variant (24x24, stroke="currentColor")
```

## Verification Commands

```bash
# Check hermes-console has all NueroUI icons
comm -23 <(ls NueroUI/icons/*.svg | xargs -n1 basename | sort) \
         <(ls hermes-console/frontend/assets/icons/*.svg | xargs -n1 basename | sort)

# Check for duplicate variants in hermes-console
find hermes-console/frontend/assets/icons -name "*-filled.svg" | wc -l
find hermes-console/frontend/assets/icons -name "*-outline.svg" | wc -l

# Verify icon SVG format
head -1 hermes-console/frontend/assets/icons/*-filled.svg | grep 'viewBox="0 0 24 24"'
```

## Recent Sync Operations

| Date | Action | Icons |
|------|--------|-------|
| 2026-04-20 | Added 13 missing icons to NueroUI | bar-chart, chat, chat-off, clock, file, globe, hash, message-square, pie-chart, shield, sparkling, star-outline, tool |
| 2026-04-20 | Generated 13 outline variants for NueroUI | Above + all existing |
| 2026-04-20 | BreezeUI dual-variant migration | 113 icon pairs (226 total files) |
| 2026-04-20 | Token files created | tokens.json (NueroUI + BreezeUI) |

---

## CI/CD 集成

### GitHub Actions 自动同步

创建 `.github/workflows/icon-sync.yml`：

```yaml
name: Icon Sync

on:
  push:
    branches: [main]
    paths:
      - 'icons/**'
      - 'tokens/tokens.json'
  pull_request:
    branches: [main]
  schedule:
    # 每天凌晨2点自动同步
    - cron: '0 2 * * *'
  workflow_dispatch:  # 支持手动触发

jobs:
  sync-icons:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up rsync
        run: sudo apt-get install -y rsync

      - name: Sync NueroUI Icons
        run: |
          rsync -av --checksum \
            --exclude='*.md' \
            --exclude='.gitkeep' \
            icons/ \
            ../hermes-console/frontend/assets/icons/

      - name: Verify Sync
        run: |
          MISSING=$(comm -23 <(ls icons/*.svg | xargs -n1 basename | sort) \
                              <(ls ../hermes-console/frontend/assets/icons/*.svg 2>/dev/null | xargs -n1 basename | sort))
          if [ -n "$MISSING" ]; then
            echo "⚠ Missing icons: $MISSING"
            exit 1
          fi
          echo "✓ All $(ls icons/*.svg | wc -l) icons synced"

      - name: Commit & Push (main branch only)
        if: github.ref == 'refs/heads/main' && github.event_name != 'pull_request'
        run: |
          git config --local user.name "github-actions[bot]"
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git add -A
          git diff --staged --quiet || git commit -m "ci: auto-sync icons $(date -u +%Y-%m-%dT%H:%M:%SZ)"
          git push
```

### 回滚机制

```bash
#!/bin/bash
# rollback-icons.sh — 回滚图标到上一个同步版本

set -e

TARGET_DIR="/root/hermes-console/frontend/assets/icons"
BACKUP_DIR="/root/.icon-backups/$(date +%Y%m%d-%H%M%S)"

# 创建备份
mkdir -p "$BACKUP_DIR"
cp -r "$TARGET_DIR"/*.svg "$BACKUP_DIR/"

# 恢复到上一个 git commit
cd "$(dirname "$TARGET_DIR")"
git checkout HEAD~1 -- assets/icons/

echo "✓ 回滚完成，备份: $BACKUP_DIR"
```

### 错误处理策略

| 错误类型 | 处理方式 |
|----------|----------|
| 图标数量不匹配 | CI 失败，阻止合并 |
| SVG 格式损坏 | 预提交钩子验证 |
| 同步冲突 | 使用 `--checksum` 仅同步变更文件 |
| hermes-console 额外图标 | 警告但不阻止（维护用） |

