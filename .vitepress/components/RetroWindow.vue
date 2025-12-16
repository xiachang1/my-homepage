<script setup>
defineProps({
  title: { type: String, default: 'C:\\System\\68FC.exe' }
})
</script>

<template>
  <div class="retro-wrapper">
    <!-- 那个蓝色的银杏叶背景 -->
    <div class="retro-bg"></div>

    <!-- 主窗口 -->
    <div class="main-window">
      <!-- 窗口标题栏 -->
      <div class="window-header">
        <span class="win-title">{{ title }}</span>
        <div class="win-controls">
          <span class="btn">_</span><span class="btn">□</span><span class="btn">×</span>
        </div>
      </div>

      <!-- 窗口内容区 (这里用了 slot，用来塞 Markdown 的内容) -->
      <div class="window-content">
        <slot></slot>
      </div>

      <!-- 底部状态栏 -->
      <div class="window-footer">
        <span>Status: Online</span><span class="blink">|</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.retro-wrapper {
  /* 强制占满全屏背景，但允许内容滚动 */
  min-height: 100vh;
  width: 100%;
  font-family: 'VT323', 'Courier New', monospace;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #000;
}

/* 蓝色银杏背景 */
.retro-bg {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 60 C 30 60 20 40 10 30 C 0 20 10 0 30 10 C 50 0 60 20 50 30 C 40 40 30 60 30 60' fill='none' stroke='%230055ff' stroke-width='1' opacity='0.5'/%3E%3Cpath d='M30 60 L 30 35' stroke='%230055ff' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 60px 60px;
  z-index: 0;
  pointer-events: none;
}

/* 窗口样式 */
.main-window {
  position: relative; z-index: 10;
  width: 100%; max-width: 900px; /* 稍微宽一点放球员 */
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid #555;
  box-shadow: 8px 8px 0px #0000aa;
  display: flex; flex-direction: column;
}

.window-header {
  background: linear-gradient(90deg, #000088, #0000ff);
  padding: 5px 10px; display: flex; justify-content: space-between; align-items: center;
  border-bottom: 2px solid #555;
}
.win-title { color: #fff; font-weight: bold; letter-spacing: 1px; }
.win-controls .btn {
  display: inline-block; width: 16px; height: 16px; background: #ccc; color: #000;
  text-align: center; line-height: 14px; font-size: 12px; margin-left: 4px; border: 1px outset #fff;
}

.window-content {
  padding: 30px;
  color: #ccc;
}

.window-footer {
  background: #ccc; color: #000; padding: 2px 10px; font-size: 0.9rem; border-top: 2px solid #fff;
}
.blink { animation: blink 1s infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
</style>