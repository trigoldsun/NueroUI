# 贡献指南 — Contributing Guide

> **版本**: v1.0.0  
> **日期**: 2026-04-20  
> **Output**: Hermes01

感谢您对 NueroUI / BreezeUI 的关注！本文档指导您如何参与贡献。

---

## 1. 行为准则

我们承诺为所有参与者提供友好、安全的环境。请：
- 使用友好、包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注社区最佳利益
- 对其他社区成员表示同情

---

## 2. 如何贡献

### 2.1 贡献类型

| 类型 | 说明 | 奖励 |
|------|------|------|
| 🐛 Bug 修复 | 修复已知问题 | 社区认可 |
| ✨ 新功能 | 扩展组件或功能 | PR 合并 |
| 📖 文档 | 改进文档质量 | 社区认可 |
| 🎨 图标 | 新增图标资源 | 图标库收录 |
| 💡 改进 | 改进现有实现 | 讨论后实施 |

### 2.2 贡献流程

```
1. Fork 本仓库
2. 创建功能分支: git checkout -b feature/xxx
3. 进行开发并提交
4. 确保通过所有测试
5. 提交 Pull Request
6. 等待 Code Review
7. 合并到主分支
```

---

## 3. 开发环境

### 3.1 环境要求

| 工具 | 版本要求 |
|------|----------|
| Node.js | ≥ 18.0.0 |
| npm | ≥ 9.0.0 |
| Git | ≥ 2.30.0 |

### 3.2 本地开发

```bash
# 克隆仓库
git clone https://github.com/trigoldsun/NueroUI.git
cd NueroUI

# 安装依赖
npm install

# 启动文档站点
npm run dev

# 运行测试
npm test

# 代码检查
npm run lint
```

---

## 4. 分支管理

| 分支类型 | 命名规则 | 说明 |
|----------|----------|------|
| 主分支 | `main` | 生产就绪代码 |
| 开发分支 | `develop` | 下一版本开发 |
| 功能分支 | `feature/{name}` | 新功能开发 |
| 修复分支 | `fix/{issue-id}` | Bug 修复 |
| 文档分支 | `docs/{name}` | 文档改进 |

### 4.1 分支流程

```
main ←←←←←←←←←←←←←←←←←←←←←←←←←
 ↑         ↑                    ↑
 │         │              develop
 │         │                ↑ ↓
 │         │          feature/xxx
 │         │                ↑ ↓
 └──── patch/1.2.3 ──────── merge
```

---

## 5. 提交规范

### 5.1 Commit 格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 5.2 Type 类型

| Type | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档变更 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 重构 |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具变更 |

### 5.3 示例

```
feat(icons): 新增 bar-chart-filled 图标

添加柱状图图标以支持数据可视化场景

Closes #123
```

```
fix(button): 修复 primary 按钮点击状态

当按钮处于 loading 状态时，hover 效果异常

Fixes #456
```

---

## 6. Pull Request 规范

### 6.1 PR 模板

```markdown
## 描述
<!-- 请简要描述您的更改 -->

## 类型
- [ ] 🐛 Bug 修复
- [ ] ✨ 新功能
- [ ] 📖 文档改进
- [ ] 🎨 图标资源
- [ ] 💡 改进

## 截图
<!-- 如果有 UI 变更，请提供截图 -->

## 检查清单
- [ ] 我遵循了代码贡献规范
- [ ] 我进行了自我审查
- [ ] 我已测试更改
- [ ] 我更新了相关文档
```

### 6.2 PR 要求

1. **标题清晰**: 简洁描述更改内容
2. **描述完整**: 说明更改原因和影响
3. **关联 Issue**: 关联相关 Issue
4. **通过测试**: 确保 CI/CD 全部通过
5. **代码审查**: 等待至少 1 人审查通过

---

## 7. 图标贡献规范

### 7.1 图标要求

| 要求 | 规格 |
|------|------|
| 格式 | SVG |
| viewBox | `0 0 24 24` |
| 填充 | `fill="currentColor"` |
| 描边 | `stroke="currentColor"` (outline 变体) |
| 命名 | `{icon-name}-filled.svg`, `{icon-name}-outline.svg` |

### 7.2 图标审核标准

1. **语义明确**: 图标含义清晰，无歧义
2. **风格一致**: 与现有图标风格一致
3. **可扩展性**: 适合多种尺寸显示
4. **无障碍**: 适合屏幕阅读器

### 7.3 提交图标

```bash
# 1. 创建图标文件
touch icons/{icon-name}-filled.svg
touch icons/{icon-name}-outline.svg

# 2. 提交图标
git add icons/{icon-name}-*.svg
git commit -m "feat(icons): 新增 {icon-name} 图标"
```

---

## 8. 组件贡献规范

### 8.1 组件结构

```
components/
└── {component-name}/
    ├── {component-name}.vue       # Vue 组件
    ├── {component-name}.tsx       # React 组件
    ├── {component-name}.css       # 样式文件
    ├── {component-name}.test.ts   # 测试文件
    └── {component-name}.md        # 文档
```

### 8.2 组件要求

1. **Props 定义清晰**: 使用 TypeScript 定义所有 props
2. **默认样式美观**: 开箱即用的视觉效果
3. **可访问性**: 支持键盘导航和屏幕阅读
4. **无障碍标签**: 包含适当的 ARIA 属性

---

## 9. 测试规范

### 9.1 测试覆盖率要求

| 类型 | 覆盖率要求 |
|------|------------|
| 核心组件 | ≥ 80% |
| 工具函数 | ≥ 90% |
| 复杂逻辑 | ≥ 70% |

### 9.2 测试类型

```bash
# 单元测试
npm test

# 集成测试
npm run test:integration

# 视觉回归测试
npm run test:visual

# 全部测试
npm run test:all
```

---

## 10. 许可证

通过贡献代码，您同意将您的作品按照项目的开源许可证发布。

---

*感谢您的贡献！*
