// .vuepress/config.js
module.exports = {
  title: 'TMSC API',
  description: '接口文档',
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    ['link', { rel: 'icon', href: '/mackxin.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '接口', link: '/api' },
      { text: '关于', link: 'http://www.jadefortune.com.cn/' },
      { text: 'GitHub', link: 'https://github.com/Vitojc/xfe' },
      // // 下拉列表显示分组
      // {
      //   text: '学习',
      //   items: [
      //     {
      //       text: '前端',
      //       items: [
      //         { text: 'js', link: '/js/' },
      //         { text: 'css', link: '/css/' }
      //       ]
      //     },
      //     {
      //       text: '后端',
      //       items: [
      //         { text: 'php', link: '/php/' },
      //         { text: 'java', link: '/java/' },
      //       ]
      //     },
      //   ]
      // }
    ],
    sidebarDepth: 5, // 侧边栏配置
    lastUpdated: 'Last Updated'
  }
}
