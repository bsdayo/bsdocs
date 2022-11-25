# Arcaea - Arcaea 相关功能

[[toc]]

## 指令帮助

指令格式中，中括号 `[]` 中的内容为**可选参数**，尖括号 `<>` 中的内容为**必选参数**。

::: warning 输入指令的时候不用输入 `< > [ ]` ！

例如只用 `/a bind 114514191`，而不是 `/a bind <114514191>`。
:::

::: tip 完整的指令格式太复杂？
也可以跳过它，直接看下面的使用示例。
:::

### /a bind - 绑定 Arcaea 账号

**指令格式**

```
/a bind [选项] <名称/好友代码>
```

**选项说明**

`-u, --uncheck`: 不检查用户的真实性。服务器不可用时可以加这个选项强制绑定用户，但无法避免输入错误等问题。

::: details 使用示例
- 通过用户名绑定
```
/a bind ToasterKoishi
```
- 通过好友码绑定
```
/a bind 114514191
```
:::

### /a b30 - 查询 Best30 成绩

[预览](./gallery.md#a-b30)

**指令格式**

```
/a b30 [选项] [用户名/好友代码]
查b30 [选项] [用户名/好友代码]
```

**选项说明**

`-d, --dark`: 生成暗色 B30 图片。  
`-n, --nya`: 使用猫猫曲绘。

::: details 使用示例
- 查询自己的 Best30 成绩（需先绑定）
```
/a b30
```
- 查询玩家 Nagiha0798 的 Best30 成绩
```
/a b30 Nagiha0798
```
- 查询好友代码为 191981011 的 Best30 成绩
```
/a b30 191981011
```
- 使用暗色模式
```
/a b30 -d
```
- 使用猫猫曲绘
```
/a b30 -n
```
:::

### /a best - 查询单曲最高分

[预览](./gallery.md#a-best-a-recent)

**指令格式**

```
/a best [选项] <曲名> [难度，默认Future]
查最高 [选项] <曲名> [难度，默认Future]
```

**选项说明**

`-d, --dark`: 生成暗色 B30 图片。  
`-n, --nya`: 使用猫猫曲绘。  
`-u, --user <用户名/好友代码>`: 指定查询的用户。

::: details 使用示例
- 查询自己 Pentiment FTR 最高分（需先绑定）
```
/a best pentiment
```
- 查询自己 Arcana Eden BYD 最高分（需先绑定）
```
/a best arcaeaeden byd
```
- 查询用户 ToasterKoishi 的 Testify (Beyond) 最高分，并同时使用猫猫曲绘、暗色模式
```
/a best -u ToasterKoishi -nd testify byd
/a best --user ToasterKoishi --nya --dark testify byd
```
~~真的有人用下面那种写法吗x~~
:::

### /a recent - 查询最近一次成绩

[预览](./gallery.md#a-best-a-recent)

**指令格式**

```
/a recent
/a
```

**选项说明**

`-u, --user <名称/好友代码>`: 指定查询的用户。  
`-d, --dark`: 生成暗色 B30 图片。  
`-n, --nya`: 使用猫猫曲绘。

:::details 使用示例
- 查询自己的最近一条成绩（需先绑定）
```
/a
```
- 查询玩家 Nagiha0798 的最近一条成绩
```
/a recent -u Nagiha0798
```
:::

### /a info - 查询曲目信息

**指令格式**

```
/a info <曲目名称>
查定数 <曲目名称>
```

**选项说明**

`-n, --nya`: 使用猫猫曲绘。

::: details 使用示例
- 查询 Sheriruth 的信息
```
/a info sheriruth
```
- 查询 Sheriruth 的信息，使用简写和曲目别名
```
查定数 对立削苹果
```
- 查询 Grievous Lady 的信息，并使用猫猫曲绘
```
查定数 -n gl
```
:::

### /a alias - 查询曲目别名

**指令格式**

```
/a alias <曲目名称>
查别名 <曲目名称>
```

::: details 使用示例
- 查询 Sheriruth 的别名
```
/a alias sheriruth
```
- 查询 Sheriruth 的别名，使用简写和曲目别名
```
查别名 对立削苹果
```
:::

### /a user - 查询用户潜力值曲线

[预览](./gallery.md#a-user)

**指令格式**

```
/a user [用户名或好友码]
```

**选项说明**

`-d, --dark`: 生成暗色图片。
`-n, --nya`: 使用猫猫曲绘。
`-y, --year`: 查询一年 (365d) 内的记录。  
`-s, --season`: 查询一个季度 (90d) 内的记录。  
`-m, --month`: 查询一个月 (30d) 内的记录。  
`-w, --week`: 查询一个星期 (7d) 内的记录。

::: details 使用示例
- 查询自己的曲线（需先绑定）
```
/a user
```
- 查询用户 Nagiha0798 的曲线
```
/a user Nagiha0798
```
:::

### /a preview - 查询谱面预览

**指令格式**

```
/a preview <曲名> [难度，默认Future]
查预览 <曲名> [难度，默认Future]
```

::: details 使用示例
- 查询 Ringed Genesis (Future) 的谱面预览
```
/a preview rg
```
- 查询 Testify (Beyond) 的铺面预览
```
/a preview testify byd
```
:::

### /a guess - 猜曲绘小游戏

**指令格式**

```
/a guess [模式关键字|回答] [模式关键字]
猜曲绘 [模式关键字|回答] [模式关键字]
```

_看格式可能不太好看懂 推荐直接看下面示例_

::: details 使用示例
- 开始猜曲绘游戏，模式为默认的 Normal (正常模式)
```
猜曲绘
/a guess
```
- 开始猜曲绘游戏，模式为 Hard (困难模式)；更多模式可见下表。
```
猜曲绘 hard
猜曲绘 h
```
- （若正在游戏中）提交猜测答案，如 testify
```
猜曲绘 testify
```
:::

**模式列表**

| 模式名称 |       模式关键字       |               模式信息               |
| :------: | :--------------------: | :----------------------------------: |
|   简单   |     `e` 或 `easy`      |             100x100 大小             |
|   正常   |    `n` 或 `normal`     |              64x64 大小              |
|   困难   |     `h` 或 `hard`      |              40x40 大小              |
|   灰度   | `g` 或 `gray` 或 `grayscale` | 100x100 大小，且曲绘为灰度图（黑白） |
|   反色   |    `i` 或 `invert`     |       100x100 大小，且曲绘反色       |

### /a random - 随机曲目

**指令格式**

```
/a random [起始难度] [最高难度]
随机曲目
```

::: details 使用示例
- 随机 9 级曲目
```
/a random 9
```
- 随机曲目，范围为 9 ~ 10+，使用简写
```
随机曲目 9 10+
```
- 全曲随机（Future 难度）
```
随机曲目
```
:::

**备注**

若输入了起始难度但没有输入最高难度，则会在起始难度中随机抽取。

### /a ptt - 计算单曲潜力值

**指令格式**

```
/a ptt <曲名> <得分> [难度，默认FTR]
```

::: details 使用示例
- 计算得分 9780000 时，Ringed Genesis [Future] 的单曲潜力值
```
/a ptt rg 9780000
```
- 计算得分 9900000 时，World Ender [Beyond] 的单曲潜力值
```
/a ptt world ender 9900000 byd
```
:::

### /a set - 设置全局偏好

**指令格式**

```
/a set <偏好信息>
```

::: details 使用示例
- 将所有展示曲绘的功能预先设置为猫猫曲绘。这样单独使用 `/a b30` 等展示的也是猫猫曲绘了。
```
/a set nya
```
- 将所有支持暗色模式的功能预先设置为暗色。
```
/a set dark
```
- 取消设置某一项偏好（`false` 代表禁用）
```
/a set dark=false
```
- 批量设置
```
/a set nya=false;dark
```
:::

## 常见问题

### 怎么没有 official 模式查分？

开发中，敬请期待

### potential is below the threshold of querying best30 (7.0)

你的 ptt（潜力值）没有到达 7.0 及以上，还不能使用 AUA 查分哦~ 努力提升吧
