# BiliVideo 类

命名空间: `BiliSharp`

```csharp
public class BiliVideo : BiliClient
```

**本页内容**

- [构造函数](#构造函数)
- [属性](#属性)
- [方法](#方法)

## 构造函数

| 签名                                                                                                    | 描述           |
| :------------------------------------------------------------------------------------------------------ | :------------- |
| [BiliVideo(long avid, BiliCredential? credential = null, HttpClient? client = null)](#使用-av-号构造)   | 使用 AV 号构造 |
| [BiliVideo(string bvid, BiliCredential? credential = null, HttpClient? client = null)](#使用-bv-号构造) | 使用 BV 号构造 |

### 使用 AV 号构造

```csharp
public BiliVideo(long avid, BiliCredential? credential = null, HttpClient? client = null)
```

#### 参数

**`avid`** : `long`  
视频 AV 号

**`credential`** : `BiliCredential?`  
认证信息，参考[获取认证信息](../guide/get-credential.md)获取。

**`client`** : `HttpClient`  
自定义 HTTP Client

### 使用 BV 号构造

```csharp
public BiliVideo(string bvid, BiliCredential? credential = null, HttpClient? client = null)
```

#### 参数

**`avid`** : `string`  
视频 BV 号

**`credential`** : `BiliCredential?`
认证信息，参考[获取认证信息](../guide/get-credential.md)获取。

**`client`** : `HttpClient`  
自定义 HTTP Client

## 属性

| 名称          | 描述       |
| :------------ | :--------- |
| [AvId](#avid) | 视频 AV 号 |
| [BvId](#bvid) | 视频 BV 号 |

### AvId

```csharp
public long AvId { get; }
```

视频 AV 号

### BvId

```csharp
public string BvId { get; }
```

视频 BV 号

## 方法

所有方法均有异步调用形式，可在方法名称后接 `Async` 调用。

| 名称                                                                                            | 描述                 |
| :---------------------------------------------------------------------------------------------- | :------------------- |
| [GetInfo(bool useAvId = false)](#获取视频信息)                                                  | 获取视频信息         |
| [SetLike(bool like, bool useAvId = false)](#点赞视频)                                           | 点赞视频             |
| [HasLiked(bool useAvId = false)](#获取视频是否被点赞)                                           | 获取视频是否被点赞   |
| [SetCoin(byte count, bool setLike = false, bool useAvId = false)](#投币视频)                    | 投币视频             |
| [GetCoin(bool useAvId = false)](#获取账号投币数量)                                              | 获取账号投币数量     |
| [AddFavorite(IEnumerable&lt;long&gt; addMediaIds)](#收藏视频)                                         | 收藏视频             |
| [RemoveFavorite(IEnumerable&lt;long&gt; removeMediaIds)](#取消收藏视频)                               | 取消收藏视频         |
| [SetFavorite(IEnumerable&lt;long&gt; addMediaIds, IEnumerable&lt;long&gt; removeMediaIds)](#设置视频收藏夹) | 设置视频收藏夹       |
| [HasFavored(bool useAvId = false)](#获取视频是否已被收藏)                                       | 获取视频是否已被收藏 |
| [SetTriple(bool useAvId = false)](#三连视频)                                                    | 三连视频             |

### 获取视频信息

```csharp
public BiliVideoInfo GetInfo(bool useAvId = false)
```

#### 参数

**`useAvId`** : `bool`  
使用 AV 号构造请求

#### 返回值

`BiliVideoInfo`  
视频信息对象

### 点赞视频

注：需要认证信息。

```csharp
public void SetLike(bool like, bool useAvId = false)
```


#### 参数

**`like`** : `bool`  
是否点赞

**`useAvId`** : `bool`  
使用 AV 号构造请求

### 获取视频是否被点赞

注：需要认证信息。

```csharp
public bool HasLiked(bool useAvId = false)
```

#### 参数

**`useAvId`** : `bool`  
使用 AV 号构造请求

#### 返回值

`bool`  
视频是否已被点赞

### 投币视频

注：需要认证信息。

```csharp
public BiliVideoSetCoinResult SetCoin(byte count, bool setLike = false, bool useAvId = false)
```

#### 参数

**`count`** : `byte`  
投币数量。有效值为 0 ~ 2。

**`setLike`** : `bool`  
是否同时点赞。

**`useAvId`** : `bool`  
使用 AV 号构造请求

#### 返回值

`BiliVideoSetCoinResult`  
投币返回结果

### 获取账号投币数量

注：需要认证信息。

```csharp
public byte GetCoin(bool useAvId = false)
```

#### 参数

**`useAvId`** : `bool`  
使用 AV 号构造请求

#### 返回值

`byte`  
该账号下投币数量。

### 收藏视频

注：需要认证信息。

```csharp
public BiliVideoSetFavoriteResult AddFavorite(IEnumerable<long> addMediaIds)
```

#### 参数

**`addMediaIds`** : `IEnumerable<long>`  
需要加入的收藏夹 mlid。

#### 返回值

`BiliVideoSetFavoriteResult`  
收藏返回结果。

### 取消收藏视频

注：需要认证信息。

```csharp
public BiliVideoSetFavoriteResult RemoveFavorite(IEnumerable<long> removeMediaIds)
```

#### 参数

**`removeMediaIds`** : `IEnumerable<long>`  
需要取消的收藏夹 mlid。

#### 返回值

`BiliVideoSetFavoriteResult`  
取消收藏返回结果。

### 设置视频收藏夹

注：需要认证信息。

```csharp
public BiliVideoSetFavoriteResult SetFavorite(IEnumerable<long> addMediaIds, IEnumerable<long> removeMediaIds)
```

#### 参数

**`addMediaIds`** : `IEnumerable<long>`  
需要加入的收藏夹 mlid。

**`removeMediaIds`** : `IEnumerable<long>`  
需要取消的收藏夹 mlid。

#### 返回值

`BiliVideoSetFavoriteResult`  
取消收藏返回结果。

### 获取视频是否已被收藏

注：需要认证信息。

```csharp
public bool HasFavored(bool useAvId = false)
```

#### 参数

**`useAvId`** : `bool`  
使用 AV 号构造请求

#### 返回值

`bool`  
视频是否已被该用户收藏。

### 三连视频

注：需要认证信息。

```csharp
public void SetTriple(bool useAvId = false)
```

#### 参数

**`useAvId`** : `bool`  
使用 AV 号构造请求
