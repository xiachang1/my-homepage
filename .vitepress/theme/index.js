import DefaultTheme from 'vitepress/theme'
import HomeProfile from '../components/HomeProfile.vue'
import './custom.css' // 下一步创建这个

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('HomeProfile', HomeProfile)
  }
}