import { NavbarConfig } from '@vuepress/theme-default'

const navbar: NavbarConfig = [
  {
    text: 'lancelot.bot',
    children: [
      '/lancelot/README.md',
      '/lancelot/arcaea.md',
      '/lancelot/tools.md',
      '/lancelot/poke.md',
      '/lancelot/utils.md',
      '/lancelot/changelog.md',
    ],
  },
  {
    text: '暮雪酱',
    children: [
      '/YukiChan/README.md',
      '/YukiChan/arcaea.md',
      '/YukiChan/bilibili.md',
      '/YukiChan/code.md',
      '/YukiChan/trans.md',
      '/YukiChan/wolframalpha.md',
    ],
  },
]

export default navbar
