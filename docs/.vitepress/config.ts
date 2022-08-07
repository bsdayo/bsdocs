import { DefaultTheme, defineConfigWithTheme } from 'vitepress'

import nav from './navbar'
import sidebar from './sidebar'

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: 'BsDocs',
  description: 'b1acksoil 的文档集合',
  lang: 'zh-CN',
  appearance: true,
  base: '/BsDocs/',
  lastUpdated: true,
  markdown: {
    theme: 'one-dark-pro',
    lineNumbers: false,
  },

  themeConfig: {
    lastUpdatedText: '最近更新',
    nav,
    sidebar,
    footer: {
      message: '所有文档均采用 CC-BY-SA 4.0 许可协议',
      copyright: 'Copyright © 2022 b1acksoil',
    },
  },
})
