import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "王一尧的主页",
  description: "Code, Football, and Art.",
  
  // appearance: true, (已移除)

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '⚽ 68FC', link: '/68fc' },
      { text: '🔴 利物浦', link: '/liverpool' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '⚽ 绿茵岁月',
        items: [
          { text: '68FC 传奇', link: '/68fc' },
          { text: '利物浦 YNWA', link: '/liverpool' }
        ]
      },
      {
        text: '👨‍💻 个人档案',
        items: [
          { text: '关于我 & 简历', link: '/about' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiachang1' }
    ]
  }
})