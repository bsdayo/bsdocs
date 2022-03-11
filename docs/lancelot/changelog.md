# 更新日志

## 1.3.0 - 2022.3.12
- plugin/arcaea
    - 将部分依赖 AUA 的指令 `alias`, `info`, `random` 转为本地处理，反应速度应有所改善，同时降低了 AUA 服务 器的压力。`recommend` 由于需要查询潜力值，所以只部分本地化。
    - 为 `/a b30 official` 的写法提供支持（没有 `--`）
    - 修复 `/a random` 无效的问题
    - 优化部分指令回复文本


## 1.2.2 - 2022.3.1
- plugin/arcaea
    - 新增指令 `/arc ycm`，实现 Link Play 查车、发车操作
    > 注：查车、发车使用公共源，与软糖酱、chieri等 arcbot 的类似功能共享
    - 新增重复绑定账号时解绑指令的提示
    - 修复推荐曲目中潜力值区间错误（如给 ptt11.51 推荐风暴byd）
    - 修复部分回复文本错误


## 1.2.1 - 2022.2.23
- plugin/arcaea
    - 新增了指令 `/arc b30` 的 `--official` 选项，可以使用官方 ArcaeaLimitedAPI 查分。（示例：`/arc b30 --official`）
    - 将指令 `/arc b30` 的 `simple` 选项移至 `--simple`


## 1.2.0 - 2022.2.21
- plugin/arcaea
    - 新增了 /arc random 指令
    - 新增了 /arc recommend 指令
    - 新增了 /arc b30 simple 指令，提供极简式界面
    - 移除了 /arc connect 指令，因为解锁风暴不再需要
    - 现在支持在 /arc best 指令的曲名中输入空格
    - 优化了部分指令回复

    > 注：新增指令的帮助可用 `/help arc.指令名` 查看，如 `/help arc.random`

- plugin/botarcapi
    - 更名为 `plugin/arcaea`

- plugin/whitelist
    - 添加自动接受好友申请
    - 移除入群欢迎消息


## 1.1.0 - 2022.2.16
- plugin/botarcapi
    - 在 B30 图中添加理论最高ptt显示
    - 修复曲名显示bug
    - 为 B30 卡片添加阴影
    - 现在达到理论值的分数将被高亮显示


## 1.0.1 - 2022.2.13
- plugin/botarcapi
    - 优化指令反馈

- plugin/whitelist
    - 添加退群指令 `/dismiss <groupid>`，要求权限为 3 级
    - 添加自动接收群邀请


## 1.0.0 - 2022.2.12
- plugin/botarcapi
    - 添加指令帮助文本
    - 添加 `/arc alias` 指令

- plugin/status
    - 添加指令帮助文本


## 0.2.0 (Internal Dev Version) - 2022.2.12
- plugin/status
    - 添加 `/status` 指令

- plugin/botarcapi
    - 添加 `/arc best` 指令
    - 添加 `/arc connect` 指令
    - 优化 `/arc recent`，现在查询个数为 1 时将返回新的 UI
    - 优化查询时的反馈，不再附带账号 ID


## 0.1.0 (Internal Dev Version) - 2022.2.6
- core
    - 完成核心部分

- plugin/botarcapi
    - 基本命令完成（b30...）
