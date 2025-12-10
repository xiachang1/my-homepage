import DefaultTheme from 'vitepress/theme'
import HomeProfile from '../components/HomeProfile.vue'
import MemoryGallery from '../components/MemoryGallery.vue' // <--- 1. 引入新组件
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeProfile', HomeProfile)
    app.component('MemoryGallery', MemoryGallery) // <--- 2. 注册新组件
  }
}