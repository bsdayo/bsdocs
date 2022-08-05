# 获取第一个视频

## 安装

首先在项目中安装 BiliSharp。推荐使用 IDE 自带的 NuGet 管理器安装，也可以执行以下命令

```shell
dotnet add package BiliSharp
```

## 获取信息

接下来，查询视频 [av810872](https://www.bilibili.com/video/BV1Js411o76u) 的信息，并打印视频的基本信息

```csharp
using BiliSharp;
using BiliSharp.Models;

// 使用 av 号初始化视频实例
var video = new BiliVideo(810872);

Console.WriteLine($"BV号：{video.BvId}");

// 获取视频信息
var info = video.GetInfo();

Console.WriteLine($"标题：{info.Title}");
Console.WriteLine($"UP：{info.Owner.Name}");
Console.WriteLine($"简介：{info.Description}");
```

输出

```text
BV号：BV1Js411o76u
标题：【炮姐/AMV】我永远都会守护在你的身边！
UP：暗猫の祝福
简介：自制 本人的第二个AMV作品，从妹妹篇结束后便开始构思了，具体九月开始挖的坑，于2013年10月26日完稿。
顺便联动一下我的魔禁/超炮AMV：av4545451
记得让弹幕多样化一些噢~喜欢的话点个关注，大感谢~
```

## 视频操作

对于那些需要登录的操作（例如点赞、投币等），需要先[获取认证信息](./get-credential.md)，并实例化 `BiliCredential` 类传入

```csharp
var credential = new BiliCredential
{
    SessData = "<SESSDATA 值>",
    BiliJct = "<bili_jct> 值",
    Buvid3 = "<buvid3 值>",
};

var video = new BiliVideo(170001, credential);
```

接下来，只需一行代码即可给视频三连

```csharp
video.SetTriple();
```

注意 `BiliSharp` 中的操作遇到错误会直接抛出异常，请自行做好 `try catch` 处理。
