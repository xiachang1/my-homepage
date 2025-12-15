<script setup>
import { useRouter } from 'vitepress'
import { ref, onMounted } from 'vue'

const router = useRouter()
const go = (path) => {
  router.go(path)
}

// --- 状态控制 ---
const loading = ref(true) // 是否正在显示开屏动画
const displayedSlogan = ref("") 
const sloganText = "Code, Football, and Art." 

// --- 打字机逻辑 ---
let i = 0
const typeWriter = () => {
  if (i < sloganText.length) {
    displayedSlogan.value += sloganText.charAt(i)
    i++
    setTimeout(typeWriter, 100) 
  }
}

onMounted(() => {
  // 设置开屏时间 3.5 秒
  setTimeout(() => {
    loading.value = false 
    // 等流星消失后，开始打字
    setTimeout(() => {
      typeWriter()
    }, 500)
  }, 3500) 
})
</script>

<template>
  <div class="page-container">
    
    <!-- ▼▼▼ 1. 开屏流星雨层 ▼▼▼ -->
    <Transition name="fade">
      <div v-if="loading" class="intro-screen">
        <div class="night">
          <!-- 10颗流星 -->
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
          <div class="shooting_star"></div>
        </div>
        <div class="intro-text">Loading Memories...</div>
      </div>
    </Transition>

    <!-- ▼▼▼ 2. 真正的首页内容 ▼▼▼ -->
    <!-- 注意：这里的 :class 控制淡入效果 -->
    <div class="art-wrapper" :class="{ 'show': !loading }">
      <div class="overlay"></div>
      <div class="content-center">
        
        <div class="identity">
          <h1 class="name">王一尧</h1>
          <p class="slogan">
            {{ displayedSlogan }}<span class="cursor">|</span>
          </p>
        </div>

        <nav class="gateway">
          <div class="gate-item" @click="go('/about')">
            <span class="icon">👨‍💻</span>
            <span class="text">关于我</span>
          </div>
          <div class="gate-item" @click="go('/68fc')">
            <span class="icon">⚽</span>
            <span class="text">68FC</span>
          </div>
          <div class="gate-item" @click="go('/liverpool')">
            <span class="icon">🔴</span>
            <span class="text">利物浦</span>
          </div>
        </nav>

        <footer class="simple-footer">
          <p>© 2025 It's not over.</p>
        </footer>
      </div>
    </div>

  </div>
</template>

<style>
/* ⚠️ 这里的 style 没有 scoped，确保动画绝对生效 */

/* --- 全局容器 --- */
.page-container {
  width: 100%; height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
}

.fade-leave-active { transition: opacity 1.5s ease; }
.fade-leave-to { opacity: 0; }

/* --- 1. 开屏层 --- */
.intro-screen {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  /* 深蓝夜空背景 */
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.intro-text {
  position: relative;
  z-index: 10;
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 16px;
  letter-spacing: 4px;
  animation: textPulse 2s infinite;
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
}
@keyframes textPulse { 0%,100%{opacity:0.5} 50%{opacity:1} }

/* --- 2. 流星特效 (整容后的红线) --- */
.night {
  position: absolute;
  width: 100%; height: 100%;
  transform: rotateZ(45deg); /* 让流星斜着飞 */
}

.shooting_star {
  position: absolute;
  height: 2px; /* 线条粗细 */
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0)); /* 蓝白渐变 */
  border-radius: 999px;
  filter: drop-shadow(0 0 6px #699bff); /* 蓝色发光 */
  animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}

/* 流星头 (发光点) */
.shooting_star::before {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #ffffff, rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  animation: shining 3000ms ease-in-out infinite;
}

/* 流星尾巴 (拖尾) */
.shooting_star::after {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #ffffff, rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  animation: shining 3000ms ease-in-out infinite;
  transform: translateX(50%) rotateZ(-45deg);
}

/* 关键帧动画 */
@keyframes tail {
  0% { width: 0; }
  30% { width: 100px; }
  100% { width: 0; }
}
@keyframes shooting {
  0% { transform: translateX(0); }
  100% { transform: translateX(300px); }
}
@keyframes shining {
  0% { width: 0; }
  50% { width: 30px; }
  100% { width: 0; }
}

/* 分布位置 (基于红线测试版调整) */
.shooting_star:nth-child(1) { top: 0; left: 50%; animation-delay: 0ms; }
.shooting_star:nth-child(2) { top: 0; left: 20%; animation-delay: 1500ms; }
.shooting_star:nth-child(3) { top: 20%; left: 0; animation-delay: 500ms; }
.shooting_star:nth-child(4) { top: 30%; left: 60%; animation-delay: 200ms; }
.shooting_star:nth-child(5) { top: 50%; left: 30%; animation-delay: 2000ms; }
.shooting_star:nth-child(6) { top: 60%; left: 90%; animation-delay: 800ms; }
.shooting_star:nth-child(7) { top: 80%; left: 10%; animation-delay: 1200ms; }
.shooting_star:nth-child(8) { top: 40%; left: 40%; animation-delay: 100ms; }
.shooting_star:nth-child(9) { top: 10%; left: 80%; animation-delay: 2500ms; }
.shooting_star:nth-child(10) { top: 90%; left: 0; animation-delay: 600ms; }

/* --- 3. 主页内容样式 (Art Wrapper) --- */
.art-wrapper {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100vh;
  /* ⚠️ 确保路径正确！ */
  background: url('/background/bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(1.05);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.art-wrapper.show {
  opacity: 1;
  transform: scale(1);
}

.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.content-center {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 20px;
}

/* 字体排版 */
.name {
  font-family: 'Times New Roman', serif;
  font-size: 4rem;
  margin: 0;
  letter-spacing: 4px;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.slogan {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 10px;
  font-weight: 300;
  letter-spacing: 1px;
  min-height: 1.5em;
}

.cursor {
  display: inline-block; margin-left: 2px;
  animation: blink 1s step-end infinite;
  vertical-align: middle;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* 导航 */
.gateway {
  display: flex; justify-content: center; gap: 40px; margin-top: 60px;
}
.gate-item {
  display: flex; flex-direction: column; align-items: center; cursor: pointer;
  transition: transform 0.3s, opacity 0.3s; opacity: 0.8;
}
.gate-item:hover { transform: translateY(-5px); opacity: 1; }
.icon { font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
.text { font-size: 1rem; font-weight: 500; text-transform: uppercase; border-bottom: 1px solid transparent; transition: border-color 0.3s; }
.gate-item:hover .text { border-color: #fff; }

.simple-footer {
  margin-top: 80px; font-size: 0.8rem; color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 600px) {
  .name { font-size: 3rem; }
  .gateway { gap: 20px; }
  .icon { font-size: 1.5rem; }
}
</style>