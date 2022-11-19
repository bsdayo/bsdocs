import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/lancelot/': [
    {
      text: 'lancelot.bot',
      items: [
        { text: '简介', link: '/lancelot/index.md' },
        { text: 'Arcaea - Arcaea 相关功能', link: '/lancelot/arcaea.md' },
        { text: 'Tools - 实用工具', link: '/lancelot/tools.md' },
        { text: 'Poke - 戳一戳', link: '/lancelot/poke.md' },
        { text: 'Utils - 管理工具', link: '/lancelot/utils.md' },
        { text: '更新日志', link: '/lancelot/changelog.md' },
      ],
    },
  ],
  '/YukiChan/': [
    {
      text: '暮雪酱 v2',
      items: [
        { text: '简介', link: '/YukiChan/index.md' },
        { text: '指令简介', link: '/YukiChan/intro.md' },
        { text: 'Arcaea - Arcaea 相关功能', link: '/YukiChan/arcaea.md' },
        { text: 'BaiduTranslate - 百度翻译', link: '/YukiChan/trans.md' },
        { text: 'WolframAlpha - Wolfram Alpha 搜索', link: '/YukiChan/wolframalpha.md' },
        { text: '杂项', link: '/YukiChan/misc.md' },
        { text: '图查预览', link: '/YukiChan/gallery.md' },
        { text: 'v1 版本文档', link: '/YukiChan/v1/index.md' },
      ],
    },
  ],
  '/YukiChan/v1/': [
    {
      text: '暮雪酱 v1',
      items: [
        { text: '简介', link: '/YukiChan/v1/index.md' },
        { text: 'Arcaea - Arcaea 相关功能', link: '/YukiChan/v1/arcaea.md' },
        { text: 'Bilibili - 哔哩哔哩相关功能', link: '/YukiChan/v1/bilibili.md' },
        { text: 'Code - 运行 C# 代码/表达式', link: '/YukiChan/v1/code.md' },
        { text: 'BaiduTranslate - 百度翻译', link: '/YukiChan/v1/trans.md' },
        { text: 'WolframAlpha - Wolfram Alpha 搜索', link: '/YukiChan/v1/wolframalpha.md' },
        { text: 'v2 版本文档', link: '/YukiChan/index.md' },
      ],
    },
  ],
  '/BiliSharp/': [
    {
      text: 'BiliSharp',
      items: [
        { text: '简介', link: '/BiliSharp/index.md' },
      ],
    },
    {
      text: '指引',
      items: [
        { text: '获取第一个视频', link: '/BiliSharp/guide/first-video.md' },
        { text: '获取 Credential 认证信息', link: '/BiliSharp/guide/get-credential.md' },
      ],
    },
    {
      text: 'API 参考',
      items: [
        { text: 'BiliVideo', link: '/BiliSharp/api/BiliVideo.md' }
      ]
    }
  ],
}

export default sidebar
