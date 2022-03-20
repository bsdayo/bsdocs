import { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/lancelot/': [
    {
      text: 'lancelot.bot',
      children: [
        '/lancelot/README.md',
        '/lancelot/arcaea.md',
        '/lancelot/gosen.md',
        '/lancelot/utils.md',
        '/lancelot/changelog.md',
      ],
    },
  ],
}

export default sidebar
