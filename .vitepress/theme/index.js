import DefaultTheme from 'vitepress/theme'
import HomeProfile from '../components/HomeProfile.vue'
import LiverpoolPlayer from '../components/LiverpoolPlayer.vue'
import PlayerCard from '../components/PlayerCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeProfile', HomeProfile)
     app.component('LiverpoolPlayer', LiverpoolPlayer) 
     app.component('PlayerCard', PlayerCard)
  }
}