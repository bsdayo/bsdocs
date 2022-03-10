# Arcaea - plugin/arcaea

## AUA 与 ALA
ArcaeaLimitedAPI（以下简称ALA） 与 ArcaeaUnlimitedAPI（以下简称AUA）是两套相互独立为 bot 提供上游服务的 API。具体区别如下： 
- ALA 为官方提供的 API，需要自行写邮件向616申请，并且存在限额、数据少的问题，但优点在于稳定、版本更新期间也能正常使用，还可以查询 shadowbanned 用户（排行榜封禁）；
- AUA 为面向 Bot 开发者提供的一套全量的 API，数据、功能丰富，几年来一直为各大 arcbot 提供上游服务，但由于非官方的性质，经常受到616的打压（如封掉查分器IP）。

由于限额问题，目前只为 Best30 查询接入了 ALA。使用 `/arc b30 --official` 即可。

## 指令帮助

根指令 `/arc` 有三种不同的形式，分别为 `/a`, `/arc`, `/arcaea`，实际效果相同，可自行选择。以下示例中均采用 `/arc` 形式。

指令格式中，中括号 `[]` 中的内容为**可选参数**，尖括号 `<>` 中的内容为**必选参数**。

### /arc bind - 绑定 Arcaea 账号
**指令格式**
```:no-line-numbers
/arc bind <你的 Arcaea 好友代码>
```

**使用示例**
```:no-line-numbers
/arc bind 114514191
```


### /arc unbind - 取消绑定 Arcaea 账号
**使用示例**
```:no-line-numbers
/arc unbind
```


### /arc b30 - 查询 Best30 成绩
**指令格式**
```:no-line-numbers
/arc b30 [用户 Arcaea 好友代码] [--official | --simple]
```
**选项说明**

`--official`: 若带上此选项，则使用 [ALA](#aua-与-ala) 进行查询。  
`--simple`: 若带上此选项，则生成白底黑字的极简风格图片。  

**可用简写**

`查b30`、`/b30`  

**使用示例**
```:no-line-numbers
- 查询自己的 Best30 成绩（需先绑定）
/arc b30
- 查询好友代码为 191981011 的 Best30 成绩
/arc b30 191981011
- 使用简写
查b30
```


### /arc best - 查询单曲最高成绩
**指令格式**
```:no-line-numbers
/arc best <曲目名称> [难度，默认 Future]
```

**可用简写**

`查最高`  

**使用示例**
```:no-line-numbers
- 查询曲目 Fracture Ray 的最高成绩（需先绑定）
/arc best 骨折光
- 查询曲目 Ringed Genesis，Present 难度的最高成绩（需先绑定）
/arc best rg prs
- 使用简写
查最高 xanatos
```

**备注**

可以使用曲目别名，如 Fracture Ray => 骨折光，Ringed Genesis => rg


### /arc recent - 查询最近成绩
**指令格式**
```:no-line-numbers
/arc recent [数量，1 ~ 7]
```

**可用简写**

`查最近`、`/a`、`/arc`、`/arcaea`

**使用示例**
```:no-line-numbers
- 查询最近 1 条成绩
/arc recent
- 查询最近 1 条成绩，使用简写
/a
```
**备注**

如果查询的数据大于 1 条，那么只有最近的那一条是准确的。原因在于”最近成绩“并非 616 直接提供的接口，而是每使用一次查分（包括b30，recent），就记录最近的 recent 1，查多个 recent 成绩时返回的就是这些记录的数据，所以就会有很大缺失。不建议一次查询多条数据。


### /arc info - 查询曲目信息
**指令格式**
```:no-line-numbers
/arc info <曲目名称>
```

**可用简写**

`查定数`

**使用示例**
```:no-line-numbers
- 查询 Sheriruth 的信息
/arc info sheriruth
- 查询 Sheriruth 的信息，使用简写和曲目别名
查定数 对立削苹果
```


### /arc alias - 查询曲目别名
**指令格式**
```:no-line-numbers
/arc alias <曲目名称>
```

**可用简写**

`查别名`

**使用示例**
```:no-line-numbers
- 查询 World Vanquisher 的别名
/arc info world vanquisher
- 查询 World Vanquisher 的别名，使用简写和曲目别名
查别名 世征
```


### /arc random - 随机曲目
**指令格式**
```:no-line-numbers
/arc random [起始难度] [最高难度]
```

**可用简写**

`随机曲目`、`随机选曲`

**使用示例**
```:no-line-numbers
- 随机 9 级曲目
/arc random 9
- 随机曲目，范围为 9 ~ 10+，使用简写
随机曲目 9 10+
- 全曲随机
随机曲目
```
**备注**

若输入了起始难度但没有输入最高难度，则会在起始难度中随机抽取。


### /arc recommend - 根据潜力值推荐曲目
**指令格式**
```:no-line-numbers
/arc recommend
```

**可用简写**

`推荐曲目`

**使用示例**
```:no-line-numbers
推荐曲目
```
**备注**

推荐曲目的定数范围为 PTT-1.75 ~ PTT-0.50（向下取整），PTT 大于 12.25 会被修正为 12.25，PTT 大于 12.05 且小于 12.25 会被修正为 12.05，然后参与计算。


### /arc ycm - 查询或添加 Link Play 车队
**指令格式**
```:no-line-numbers
/arc ycm [房间号] [描述]
```

**可用简写**

`有车吗`、`有车嘛`、`/ycm`

**使用示例**
```:no-line-numbers
- 添加车队
/arc ycm ASMR12 红框休闲车
- 查询车队
/arc ycm
- 查询车队，使用简写
有车嘛
```


## 常见问题
> ALA 的具体限额是多少？

每24h限制查询100名不同用户，每名用户可以多次查询；120次请求/min，2000次请求/24h。

> 我应该在什么时候使用 ALA？

Bot 默认使用 AUA 查分（如 `/arc b30`），如果要使用 ALA 查分必须带上 `--official` 选项。ALA 不返回 Overflow 数据。如果遇到 AUA 不稳定的情况（如频繁报错524），或版本更新期间，可以使用 ALA。
