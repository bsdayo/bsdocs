# 暮雪酱 v2

::: danger 注意！
自暮雪酱 v3 起，使用文档已迁移至 [https://yukidocs.sorabs.cc/](https://yukidocs.sorabs.cc/)，请前往查看最新版本。本页面为 v2 版本的旧文档，已经停止更新。
:::

暮雪酱 (YukiChan) 是一个全新开发的 QQ 平台聊天机器人 (Bot)，基于 .NET 7 + C#，使用 [Flandre](https://github.com/FlandreDevs/Flandre) 框架开发。

## 与暮雪酱 v1 的区别？
暮雪酱 v1 版本基于 [Konata.Core](https://github.com/KonataDev/Konata.Core) 开发。Konata 仅是 QQ 协议的实现，也就是说只能在 QQ 中使用，而无法扩展到其他平台。考虑到暮雪酱的前身 [lancelot.bot](/lancelot/) 在 QQ 频道仍留有大量用户，v2 版本切换到了跨平台的 [Flandre](https://github.com/FlandreDevs/Flandre) 框架。基于框架的可扩展性，未来也有可能在 Telegram、Discord 或开黑啦等平台上提供服务。

为了和 v1 版本区分开，暮雪 v2 切换回了 lancelot 曾使用的 `/` 指令前缀，并保留了选项系统，和 lancelot 应该会有较为无缝的体验。

v2 版本是较为稳定的一个版本，未来应该不会再进行架构上的更改。逐步会推出更多新功能，敬请期待。

## 关于 lancelot.bot
lancelot.bot 是该系列 Bot 的最初代，从 2022 年 1 月开始开发。后来经过大规模重构，逐步演变了成现在的暮雪酱。截至当前，lancelot.bot 已经归档并停止开发，其所有分发账号（lancelot、latte、Bedivere、Percivale、Galahad、Sonata Tairitsu）已停止为 lancelot.bot 提供支持。部分账号转回号主，其余部分由现在的暮雪酱接管。

::: tip 第一次使用暮雪酱？
暮雪酱使用指令进行操作，包含选项等一些概念。很少，但了解它们可以助你更好地使用 Bot。你可以[点击这里](./intro.md)了解更多。

[这里](./gallery.md) 有一些图查的预览图片，相信你会喜欢的（笑
:::

::: tip 遇到问题？
对于 QQ 用户，你可以加入我们的 QQ 群 **883632773** 反馈。  
对于 QQ 频道用户，你可以加入我们的频道 [e0r35nc9e2](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=11UIUD&businessType=9&from=246610&biz=ka)。  
或者，通过 [邮箱 (bs@sorabs.cc)](mailto:bs@sorabs.cc) 联系我。
:::

::: tip 关于 Flandre
Flandre 是我为适应跨平台需求，而全新开发的机器人框架，拥有开箱即用的指令系统、插件系统，和众多简化机器人开发流程的组件。目前已经在 GitHub 上开源，仓库地址 [https://github.com/FlandreDevs/Flandre](https://github.com/FlandreDevs/Flandre)，欢迎 star qwq
:::
