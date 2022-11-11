# Code - 运行 C# 代码/表达式

## 指令帮助

### #code run - 运行 C# 代码/表达式

**指令格式**

```
#code run <C#代码>
```

**使用示例**

```
#code run 123 + 456
#code run new Random().Next(100)

- 代码可以换行
#code run
var str = "YUKICHAN";
return str.ToLower();
```

### #code vars - 查看局部变量列表

**指令格式**

```
#code vars
```

### #code reset - 重置局部变量

**指令格式**

```
#code reset
```
