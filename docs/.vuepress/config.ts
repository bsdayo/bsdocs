import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import navbar from './navbar'
import sidebar from './sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'BsDocs',
  description: 'b1acksoil 的文档集合',
  base: '/',

  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'b1acksoil/bsdocs',
    docsRepo: 'b1acksoil/bsdocs',
    docsBranch: 'main',
    editLinkText: '编辑此页',
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    contributors: true,
    contributorsText: '贡献者',
    // tip: '提示',
    // warning: '注意',
    // danger: '警告',
    backToHome: '返回首页',
    navbar,
    sidebar,
  },
})
