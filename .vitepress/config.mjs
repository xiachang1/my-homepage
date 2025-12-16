import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Lan Wang",
  description: "Code, Football, and Art.",
  
appearance: false, 

themeConfig: {
    outline: false,
    // 1. 顶部导航：直达 68FC 专区
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: 'about me',link: '/about'},
      { text: '⚽ 68FC 俱乐部', link: '/68fc/squad', activeMatch: '/68fc/' },
      { text: '🔴 利物浦', link: '/liverpool' }
    ],

    // 2. 侧边栏：专业的分类
    sidebar: {
      // 当用户进入 /68fc/ 目录时，显示这个侧边栏
      '/68fc/': [
        {
          text: '一线队 (First Team)',
          items: [
            { text: '🏃‍♂️ 球队阵容', link: '/68fc/squad' },
          ]
        },
        {
          text: '赛事中心 (Match Center)',
          items: [
            { text: '📅 赛程与结果', link: '/68fc/matches' },
          ]
        },
        {
          text: '俱乐部 (Club)',
          items: [
            { text: '📜 队史与荣誉', link: '/68fc/history' } // 把原来的 68fc.md 改名放这里最好
          ]
        }
      ],
      
      // 利物浦的侧边栏保持不变
      '/liverpool/': [
        { text: '利物浦', items: [{ text: 'YNWA', link: '/liverpool' }] }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiachang1' }
    ]
  }
})