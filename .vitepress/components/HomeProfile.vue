<script setup>
import { useRouter } from 'vitepress'
import { ref, onMounted } from 'vue'

const router = useRouter()
const go = (path) => {
  router.go(path)
}

// --- 打字机逻辑 ---
const sloganText = "Code, Football, and Art." 
const displayedSlogan = ref("") 
let i = 0

const typeWriter = () => {
  if (i < sloganText.length) {
    displayedSlogan.value += sloganText.charAt(i)
    i++
    setTimeout(typeWriter, 100) 
  }
}

onMounted(() => {
  typeWriter() 
})
</script>

<template>
  <div class="art-wrapper">
    <!-- 遮罩层 -->
    <div class="overlay"></div>

    <div class="content-center">
      
      <!-- ▼▼▼ 找回了丢失的这一块！ ▼▼▼ -->
      <div class="identity">
        <h1 class="name">王一尧</h1>
        <p class="slogan">
          {{ displayedSlogan }}<span class="cursor">|</span>
        </p>
      </div>
      <!-- ▲▲▲ ▲▲▲ -->

      <!-- 核心导航入口 -->
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
        <div class="gate-item" @click="go('/moments')">
          <span class="icon">🌸</span>
          <span class="text">朝花夕拾</span>
        </div>
      </nav>

      <!-- 底部版权 -->
      <footer class="simple-footer">
        <p>© 2025 It's not over.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* 1. 世界名画背景 */
.art-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* ⚠️ 确保你的 public/background/ 目录下真的有 bg.jpg 这个文件 */
  background: url('/background/bg.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 2. 黑色遮罩 */
.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1;
}

/* 3. 内容容器 */
.content-center {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 20px;
  animation: fadeIn 1.5s ease-out;
}

/* 4. 名字与标语 */
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
  min-height: 1.5em; /* 防止打字前高度塌陷 */
}

/* 光标闪烁动画 (移到了外层，确保电脑端也能看到) */
.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  vertical-align: middle; /* 对齐光标 */
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 5. 导航入口 */
.gateway {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
}

.gate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0.8;
}

.gate-item:hover {
  transform: translateY(-5px);
  opacity: 1;
}

.icon {
  font-size: 2rem;
  margin-bottom: 8px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.text {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.gate-item:hover .text {
  border-color: #fff;
}

/* 6. 极简页脚 */
.simple-footer {
  margin-top: 80px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

/* 进场动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 移动端适配 */
@media (max-width: 600px) {
  .name { font-size: 3rem; }
  .gateway { gap: 20px; }
  .icon { font-size: 1.5rem; }
}
</style>