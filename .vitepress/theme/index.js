import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress' // <--- 关键！之前可能漏了这行
import mediumZoom from 'medium-zoom'
import './custom.css'

// --- 组件引入 ---
import HomeProfile from '../components/HomeProfile.vue'
import MatchStats from '../components/MatchStats.vue'
import PlayerCard from '../components/PlayerCard.vue'
import LiverpoolPlayer from '../components/liverpool/LiverpoolPlayer.vue'
import LiverpoolLyrics from '../components/liverpool/LiverpoolLyrics.vue'
import LiverpoolLegends from '../components/liverpool/LiverpoolLegends.vue'
import AboutPage from '../components/AboutPage.vue'
import RetroWindow from '../components/RetroWindow.vue'
import ContactPage from '../components/ContactPage.vue'

export default {
  extends: DefaultTheme,

  setup() {
    const route = useRoute() // 这里用到了 useRoute，所以上面必须 import
    
    const initZoom = () => {
      // 给所有文章图片、画廊图片、卡片图片绑定放大功能
      // background: 背景变黑的透明度
      mediumZoom('.vp-doc img, .gallery-grid img, .player-card img', { 
        background: 'rgba(0, 0, 0, 0.8)',
        margin: 24
      })
    }

    onMounted(() => {
      initZoom()
    })

    // 监听路由变化，切换页面后重新绑定
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },

  enhanceApp({ app }) {
    app.component('HomeProfile', HomeProfile)
    app.component('MatchStats', MatchStats)
    app.component('PlayerCard', PlayerCard)
    app.component('LiverpoolPlayer', LiverpoolPlayer)
    app.component('LiverpoolLyrics', LiverpoolLyrics)
    app.component('LiverpoolLegends', LiverpoolLegends)
    app.component('AboutPage', AboutPage)
    app.component('RetroWindow', RetroWindow)
    app.component('ContactPage', ContactPage)
  }
}