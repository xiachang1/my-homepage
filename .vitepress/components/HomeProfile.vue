<script setup>
import { useRouter } from 'vitepress'
import { ref, onMounted } from 'vue'

const router = useRouter()
const go = (path) => {
  router.go(path)
}

// --- 开屏动画逻辑 ---
const loading = ref(true)
// 生成随机飘落的银杏叶
const leaves = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100 + '%',
  delay: Math.random() * 2 + 's',
  duration: 3 + Math.random() * 3 + 's',
  size: 15 + Math.random() * 15 + 'px'
}))

onMounted(() => {
  setTimeout(() => { loading.value = false }, 2500)
})
</script>

<template>
  <div class="pixel-body">
    
    <!-- 1. 开屏动画层 (Z-Index: 999) -->
    <Transition name="fade">
      <div v-if="loading" class="splash-screen">
        <div class="loading-text">SYSTEM INITIALIZING...</div>
        <div 
          v-for="leaf in leaves" :key="leaf.id" class="ginkgo-leaf"
          :style="{ left: leaf.left, animationDelay: leaf.delay, animationDuration: leaf.duration, width: leaf.size, height: leaf.size }"
        >
          <svg viewBox="0 0 60 60" fill="none"><path d="M30 60C30 60 20 40 10 30C0 20 10 0 30 10C50 0 60 20 50 30C40 40 30 60 30 60Z" fill="#0055ff" fill-opacity="0.8"/><path d="M30 60L30 35" stroke="#00ffff" stroke-width="2"/></svg>
        </div>
      </div>
    </Transition>

    <!-- 2. 背景层 (Z-Index: 1) -->
    <!-- 注意：把背景单独拿出来，不和内容混在一起 -->
    <div class="bg-layer" :class="{ 'show': !loading }">
      <div class="pixel-art-bg"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- 3. 内容层 (Z-Index: 10) -->
    <div class="content-layer" :class="{ 'show': !loading }">
      
      <div class="menu-container">
        <!-- 标题 -->
        <h1 class="title">LAN.<span class="blink">_</span></h1>
        <p class="subtitle">PRESS START TO ENTER</p>

        <!-- 导航按钮组 -->
        <div class="nav-grid">
          
          <div class="pixel-card" @click="go('/about')">
            <div class="card-icon">👨‍💻</div>
            <div class="card-text">ME</div>
            <!-- 装饰角 -->
            <div class="corner lt"></div><div class="corner rt"></div><div class="corner lb"></div><div class="corner rb"></div>
          </div>

          <div class="pixel-card" @click="go('/68fc/squad')">
            <div class="card-icon">⚽</div>
            <div class="card-text">68FC</div>
            <div class="corner lt"></div><div class="corner rt"></div><div class="corner lb"></div><div class="corner rb"></div>
          </div>

          <div class="pixel-card" @click="go('/liverpool')">
            <div class="card-icon">🔴</div>
            <div class="card-text">LFC</div>
            <div class="corner lt"></div><div class="corner rt"></div><div class="corner lb"></div><div class="corner rb"></div>
          </div>

        </div>
      </div>

      <footer class="footer">
        © 2025 PIXEL WORLD
      </footer>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

/* --- 容器设置 --- */
.pixel-body {
  position: fixed; /* 强制固定，防止滚动 */
  top: 0; left: 0;
  width: 100%; height: 100vh;
  background: #000;
  overflow: hidden;
  font-family: 'VT323', monospace;
}

/* --- 1. 开屏动画样式 --- */
.splash-screen {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: #000; z-index: 999;
  display: flex; justify-content: center; align-items: center;
}
.loading-text { font-size: 2rem; color: #0055ff; letter-spacing: 5px; animation: blink 0.5s infinite; }
.ginkgo-leaf { position: absolute; top: -10%; opacity: 0.8; animation: fall linear infinite; }
@keyframes fall { 100% { top: 110%; transform: translateX(50px) rotate(360deg); opacity: 0; } }
.fade-leave-active { transition: opacity 1s; }
.fade-leave-to { opacity: 0; }

/* --- 2. 背景层样式 (修复版) --- */
.bg-layer {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1; /* 最底层 */
  opacity: 0; transition: opacity 2s;
}
.bg-layer.show { opacity: 1; }

.pixel-art-bg {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  /* 确保路径正确 */
  background: url('/background/bg.jpg') no-repeat center center;
  background-size: cover;
  
  /* 核心像素化逻辑 */
  transform: scale(10); /* 放大10倍 */
  transform-origin: center center;
  image-rendering: pixelated; /* 强制马赛克 */
  filter: brightness(0.6) contrast(1.2);
}

.grid-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: 
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 4px 100%;
  z-index: 2;
  pointer-events: none;
}

/* --- 3. 内容层样式 (独立出来) --- */
.content-layer {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 10; /* 确保在背景之上 */
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  opacity: 0; transition: opacity 1s 0.5s; /* 稍微延迟一点出现 */
}
.content-layer.show { opacity: 1; }

/* 文字与按钮 */
.title {
  font-size: 8rem; color: #fff; margin: 0; line-height: 0.8;
  text-shadow: 6px 6px 0 #0055ff;
}
.subtitle {
  font-size: 1.5rem; color: #00ffff; letter-spacing: 4px; margin-bottom: 60px;
  background: rgba(0,0,0,0.6); padding: 5px 20px; border: 1px solid #0055ff;
}
.blink { animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }

/* 导航卡片 */
.nav-grid { display: flex; gap: 40px; }

.pixel-card {
  position: relative;
  width: 140px; height: 140px;
  background: rgba(0, 0, 0, 0.7);
  border: 4px solid #fff;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  /* 像素阴影 */
  box-shadow: 8px 8px 0 #000;
}

.pixel-card:hover {
  background: #0055ff;
  transform: translate(-4px, -4px); /* 悬停浮起 */
  box-shadow: 12px 12px 0 #00ffff; /* 影子变色变长 */
  border-color: #00ffff;
}

.card-icon { font-size: 3rem; margin-bottom: 10px; }
.card-text { font-size: 1.5rem; font-weight: bold; color: #fff; letter-spacing: 2px; }

/* 装饰性四角 */
.corner { position: absolute; width: 6px; height: 6px; background: #000; }
.lt { top: -6px; left: -6px; }
.rt { top: -6px; right: -6px; }
.lb { bottom: -6px; left: -6px; }
.rb { bottom: -6px; right: -6px; }

.footer {
  position: absolute; bottom: 20px;
  font-size: 1rem; color: rgba(255,255,255,0.6);
  text-shadow: 1px 1px 0 #000;
}

/* 移动端适配 */
@media (max-width: 600px) {
  .title { font-size: 5rem; }
  .nav-grid { flex-direction: column; gap: 20px; }
  .pixel-card { width: 220px; height: 70px; flex-direction: row; gap: 15px; }
  .card-icon { font-size: 2rem; margin: 0; }
}
</style>