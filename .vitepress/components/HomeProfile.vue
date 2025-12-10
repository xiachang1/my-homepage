<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
const go = (path) => {
  router.go(path)
}
</script>

<template>
  <div class="art-wrapper">
    <!-- 遮罩层：让背景变暗一点，保证文字看得清 -->
    <div class="overlay"></div>

    <div class="content-center">
      <!-- 极简的个人标识 -->
      <div class="identity">
        <h1 class="name">王一尧</h1>
        <p class="slogan">Code, Football, and Art.</p>
      </div>

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
        <!-- ▼▼▼ 新增：朝花夕拾 ▼▼▼ -->
        <div class="gate-item" @click="go('/moments')">
          <span class="icon">🌸</span>
          <span class="text">朝花夕拾</span>
        </div>
        <!-- ▲▲▲ 新增结束 ▲▲▲ -->
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
  /* 梵高-星月夜 高清图 */
/* 直接用 /bg.jpg 引用，VitePress 会自动去 public 文件夹找 */
background: url('/background/bg.jpg') no-repeat center center;  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 2. 黑色遮罩 (关键：否则字看不清) */
.overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 40% 的黑色遮罩 */
  backdrop-filter: blur(2px);      /* 轻微模糊，增加景深感 */
  z-index: 1;
}

/* 3. 内容容器 */
.content-center {
  position: relative;
  z-index: 2; /* 浮在遮罩之上 */
  text-align: center;
  color: #fff;
  padding: 20px;
  animation: fadeIn 1.5s ease-out;
}

/* 4. 名字与标语 */
.name {
  font-family: 'Times New Roman', serif; /* 衬线字体，更有艺术感 */
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
  border-color: #fff; /* 鼠标悬停加下划线 */
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