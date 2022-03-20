# 实用工具

## 指令帮助

指令格式中，中括号 `[]` 中的内容为**可选参数**，尖括号 `<>` 中的内容为**必选参数**。

### /mainbot - 切换群组内主 Bot

**指令格式**

```:no-line-numbers
@SpecificBot /mainbot
```

**使用示例**

```:no-line-numbers
@Bedivere /mainbot
```

**备注**
注意手动 @ 与复制的 @ 实际并不一样，所以复制的是无效的。


### /choose - 随机选择

**指令格式**

```:no-line-numbers
/choose <选项1> <选项2> [选项3] [选项4] ...
```

**可用简写**

`帮我选`

**选项说明**

`-t <模板文本>`, `--template <模板文本>`: 替换默认的模板文本。

模板文本中必须含有占位符 `#`，Bot 将使用得出的随机选项替换该占位符。占位符可以存在多个。例如：

`/choose foo bar baz -t DAME#DANE#DAMEYO`  
可得到 `DAMEbarDANEbarDAMEYO`

**使用示例**

```:no-line-numbers
/choose 推分 摆烂
- 使用模板
/choose arcaea pjsk -t 打#比较好
```
