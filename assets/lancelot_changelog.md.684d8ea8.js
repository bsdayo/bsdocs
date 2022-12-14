import{_ as l,c as i,o as e,a}from"./app.ec4943ab.js";const g=JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.3.1 - 2022.3.20","slug":"_1-3-1-2022-3-20","link":"#_1-3-1-2022-3-20","children":[]},{"level":2,"title":"1.3.0 - 2022.3.12","slug":"_1-3-0-2022-3-12","link":"#_1-3-0-2022-3-12","children":[]},{"level":2,"title":"1.2.2 - 2022.3.1","slug":"_1-2-2-2022-3-1","link":"#_1-2-2-2022-3-1","children":[]},{"level":2,"title":"1.2.1 - 2022.2.23","slug":"_1-2-1-2022-2-23","link":"#_1-2-1-2022-2-23","children":[]},{"level":2,"title":"1.2.0 - 2022.2.21","slug":"_1-2-0-2022-2-21","link":"#_1-2-0-2022-2-21","children":[]},{"level":2,"title":"1.1.0 - 2022.2.16","slug":"_1-1-0-2022-2-16","link":"#_1-1-0-2022-2-16","children":[]},{"level":2,"title":"1.0.1 - 2022.2.13","slug":"_1-0-1-2022-2-13","link":"#_1-0-1-2022-2-13","children":[]},{"level":2,"title":"1.0.0 - 2022.2.12","slug":"_1-0-0-2022-2-12","link":"#_1-0-0-2022-2-12","children":[]},{"level":2,"title":"0.2.0 (Internal Dev Version) - 2022.2.12","slug":"_0-2-0-internal-dev-version-2022-2-12","link":"#_0-2-0-internal-dev-version-2022-2-12","children":[]},{"level":2,"title":"0.1.0 (Internal Dev Version) - 2022.2.6","slug":"_0-1-0-internal-dev-version-2022-2-6","link":"#_0-1-0-internal-dev-version-2022-2-6","children":[]}],"relativePath":"lancelot/changelog.md","lastUpdated":1671031885000}'),c={name:"lancelot/changelog.md"},d=a('<h1 id="更新日志" tabindex="-1">更新日志 <a class="header-anchor" href="#更新日志" aria-hidden="true">#</a></h1><h2 id="_1-3-1-2022-3-20" tabindex="-1">1.3.1 - 2022.3.20 <a class="header-anchor" href="#_1-3-1-2022-3-20" aria-hidden="true">#</a></h2><ul><li><p>plugin/arcaea</p><ul><li>添加 <code>/a ptt</code> 指令，用于根据得分计算单曲潜力值</li></ul></li><li><p>plugin/gosen</p><ul><li>添加 <code>/5k</code> 指令，用于生成五千兆风格的图片</li></ul></li><li><p>plugin/utils</p><ul><li>新增 <code>/mainbot</code> 指令，可用于群内有多个 lancelot 系列的 bot 时切换主 bot。使用需要 at bot 发送，如 <code>@[Bot] Galahad /mainbot</code></li><li>新增 <code>/choose</code> 指令，用于随机推荐</li></ul></li></ul><h2 id="_1-3-0-2022-3-12" tabindex="-1">1.3.0 - 2022.3.12 <a class="header-anchor" href="#_1-3-0-2022-3-12" aria-hidden="true">#</a></h2><ul><li>plugin/arcaea <ul><li>将部分依赖 AUA 的指令 <code>alias</code>, <code>info</code>, <code>random</code> 转为本地处理，反应速度应有所改善，同时降低了 AUA 服务器的压力。<code>recommend</code> 由于需要查询潜力值，所以只部分本地化。</li><li>为 <code>/a b30 official</code> 的写法提供支持（没有 <code>--</code>）</li><li>修复 <code>/a random</code> 无效的问题</li><li>优化部分指令回复文本</li></ul></li></ul><h2 id="_1-2-2-2022-3-1" tabindex="-1">1.2.2 - 2022.3.1 <a class="header-anchor" href="#_1-2-2-2022-3-1" aria-hidden="true">#</a></h2><ul><li>plugin/arcaea <ul><li>新增指令 <code>/arc ycm</code>，实现 Link Play 查车、发车操作</li></ul><blockquote><p>注：查车、发车使用公共源，与软糖酱、chieri等 arcbot 的类似功能共享</p></blockquote><ul><li>新增重复绑定账号时解绑指令的提示</li><li>修复推荐曲目中潜力值区间错误（如给 ptt11.51 推荐风暴byd）</li><li>修复部分回复文本错误</li></ul></li></ul><h2 id="_1-2-1-2022-2-23" tabindex="-1">1.2.1 - 2022.2.23 <a class="header-anchor" href="#_1-2-1-2022-2-23" aria-hidden="true">#</a></h2><ul><li>plugin/arcaea <ul><li>新增了指令 <code>/arc b30</code> 的 <code>--official</code> 选项，可以使用官方 ArcaeaLimitedAPI 查分。（示例：<code>/arc b30 --official</code>）</li><li>将指令 <code>/arc b30</code> 的 <code>simple</code> 选项移至 <code>--simple</code></li></ul></li></ul><h2 id="_1-2-0-2022-2-21" tabindex="-1">1.2.0 - 2022.2.21 <a class="header-anchor" href="#_1-2-0-2022-2-21" aria-hidden="true">#</a></h2><ul><li><p>plugin/arcaea</p><ul><li>新增了 /arc random 指令</li><li>新增了 /arc recommend 指令</li><li>新增了 /arc b30 simple 指令，提供极简式界面</li><li>移除了 /arc connect 指令，因为解锁风暴不再需要</li><li>现在支持在 /arc best 指令的曲名中输入空格</li><li>优化了部分指令回复</li></ul><blockquote><p>注：新增指令的帮助可用 <code>/help arc.指令名</code> 查看，如 <code>/help arc.random</code></p></blockquote></li><li><p>plugin/botarcapi</p><ul><li>更名为 <code>plugin/arcaea</code></li></ul></li><li><p>plugin/whitelist</p><ul><li>添加自动接受好友申请</li><li>移除入群欢迎消息</li></ul></li></ul><h2 id="_1-1-0-2022-2-16" tabindex="-1">1.1.0 - 2022.2.16 <a class="header-anchor" href="#_1-1-0-2022-2-16" aria-hidden="true">#</a></h2><ul><li>plugin/botarcapi <ul><li>在 B30 图中添加理论最高ptt显示</li><li>修复曲名显示bug</li><li>为 B30 卡片添加阴影</li><li>现在达到理论值的分数将被高亮显示</li></ul></li></ul><h2 id="_1-0-1-2022-2-13" tabindex="-1">1.0.1 - 2022.2.13 <a class="header-anchor" href="#_1-0-1-2022-2-13" aria-hidden="true">#</a></h2><ul><li><p>plugin/botarcapi</p><ul><li>优化指令反馈</li></ul></li><li><p>plugin/whitelist</p><ul><li>添加退群指令 <code>/dismiss &lt;groupid&gt;</code>，要求权限为 3 级</li><li>添加自动接收群邀请</li></ul></li></ul><h2 id="_1-0-0-2022-2-12" tabindex="-1">1.0.0 - 2022.2.12 <a class="header-anchor" href="#_1-0-0-2022-2-12" aria-hidden="true">#</a></h2><ul><li><p>plugin/botarcapi</p><ul><li>添加指令帮助文本</li><li>添加 <code>/arc alias</code> 指令</li></ul></li><li><p>plugin/status</p><ul><li>添加指令帮助文本</li></ul></li></ul><h2 id="_0-2-0-internal-dev-version-2022-2-12" tabindex="-1">0.2.0 (Internal Dev Version) - 2022.2.12 <a class="header-anchor" href="#_0-2-0-internal-dev-version-2022-2-12" aria-hidden="true">#</a></h2><ul><li><p>plugin/status</p><ul><li>添加 <code>/status</code> 指令</li></ul></li><li><p>plugin/botarcapi</p><ul><li>添加 <code>/arc best</code> 指令</li><li>添加 <code>/arc connect</code> 指令</li><li>优化 <code>/arc recent</code>，现在查询个数为 1 时将返回新的 UI</li><li>优化查询时的反馈，不再附带账号 ID</li></ul></li></ul><h2 id="_0-1-0-internal-dev-version-2022-2-6" tabindex="-1">0.1.0 (Internal Dev Version) - 2022.2.6 <a class="header-anchor" href="#_0-1-0-internal-dev-version-2022-2-6" aria-hidden="true">#</a></h2><ul><li><p>core</p><ul><li>完成核心部分</li></ul></li><li><p>plugin/botarcapi</p><ul><li>基本命令完成（b30...）</li></ul></li></ul>',21),n=[d];function r(o,t,u,h,s,p){return e(),i("div",null,n)}const b=l(c,[["render",r]]);export{g as __pageData,b as default};