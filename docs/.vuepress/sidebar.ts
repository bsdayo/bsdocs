import { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/lancelot/': [
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
  ],
  '/YukiChan/': [
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
  ],
}

export default sidebar
