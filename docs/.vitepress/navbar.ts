import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
  {
    text: 'lancelot.bot',
    items: [
      { text: '简介', link: '/lancelot/index.md' },
      { text: 'Arcaea', link: '/lancelot/arcaea.md' },
      { text: '工具', link: '/lancelot/tools.md' },
      { text: '戳一戳', link: '/lancelot/poke.md' },
      { text: '管理工具', link: '/lancelot/utils.md' },
      { text: '更新日志', link: '/lancelot/changelog.md' },
    ],
  },
  {
    text: '暮雪酱',
    items: [
      { text: '简介', link: '/YukiChan/index.md' },
      { text: 'Arcaea', link: '/YukiChan/arcaea.md' },
      { text: '哔哩哔哩', link: '/YukiChan/bilibili.md' },
      { text: '运行 C# 代码', link: '/YukiChan/code.md' },
      { text: '百度翻译', link: '/YukiChan/trans.md' },
      { text: 'Wolfram Alpha', link: '/YukiChan/wolframalpha.md' },
    ],
  },
]

export default navbar
