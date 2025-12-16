<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
const go = (path) => {
  router.go(path)
}
</script>

<template>
  <div class="retro-body">
    
    <!-- 1. 顶部滚动字幕 (Marquee) -->
    <div class="marquee-container">
      <div class="marquee-content">
        WELCOME TO LAN'S DIGITAL GARDEN *** SYSTEM READY *** 欢迎访问 *** 银杏叶落下的地方 *** KEEP IT REAL ***
      </div>
    </div>

    <!-- 2. 主容器：模拟复古窗口 -->
    <div class="main-window">
      
      <!-- 窗口标题栏 -->
      <div class="window-header">
        <span class="win-title">C:\Users\Lan\Home.exe</span>
        <div class="win-controls">
          <span class="btn">_</span>
          <span class="btn">□</span>
          <span class="btn">×</span>
        </div>
      </div>

      <!-- 窗口内容区 -->
      <div class="window-content">
        
        <!-- 左侧：导航栏 -->
        <aside class="sidebar">
          <div class="profile-pic">
            <!-- 这里用纯CSS画一个像素风的方块代替头像，保持神秘 -->
            <div class="pixel-block">Lan.</div>
          </div>
          
          <nav class="retro-nav">
            <button class="nav-btn" @click="go('/about')">
              [ 关于我 ]
            </button>
            <button class="nav-btn" @click="go('/68fc/squad')">
              [ 68 FC ]
            </button>
            <button class="nav-btn" @click="go('/liverpool')">
              [ 利物浦 ]
            </button>
          </nav>

          <div class="status-box">
            <p>Mood: 🧊</p>
            <p>Music: OFF</p>
            <p>Loc: Unknown</p>
          </div>
        </aside>

        <!-- 右侧：主要展示区 -->
        <main class="main-display">
          <h1 class="pixel-title">Hello, World.</h1>
          <div class="divider"></div>
          <p class="intro-text">
            这是一个不存在的地方。<br>
            日日重复同样的事，遵循着与昨日相同的惯例，若能避开猛烈的狂喜，自然也不会有悲痛的来袭。<br>
            <span class="highlight">银杏叶</span> 是蓝色的，<br>
            正如忧郁是快乐的底色。
          </p>

          <!-- 模拟一个更新日志 -->
          <div class="updates-box">
            <div class="box-title">/// LATEST UPDATES</div>
            <ul>
              <li><span class="date">2025.01</span> :: System Init... OK</li>
              <li><span class="date">2025.02</span> :: 68FC Database Loaded.</li>
              <li><span class="date">2025.03</span> :: Waiting for connection...</li>
            </ul>
          </div>
        </main>

      </div>
      
      <!-- 窗口底部状态栏 -->
      <div class="window-footer">
        <span>Guest User</span>
        <span class="blink">|</span>
      </div>
    </div>

    <!-- 底部版权 -->
    <footer class="retro-footer">
      © 2025 Lan. Designed with <span style="color:blue">♥</span> and Ginkgo.
    </footer>

  </div>
</template>

<style scoped>
/* 引入复古像素字体 (如果网络不好可能回退到等宽字体) */
@import url('https://fonts.loli.net/css2?family=VT323&display=swap');
/* --- 核心背景：蓝色银杏叶平铺 --- */
.retro-body {
  width: 100%;
  min-height: 100vh;
  font-family: 'VT323', 'Courier New', monospace;
  /* 
     这里使用 SVG Data URI 绘制了一个抽象的蓝色银杏叶图案 
     并设置为 repeat (平铺)
  */
  background-color: #000;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 60 C 30 60 20 40 10 30 C 0 20 10 0 30 10 C 50 0 60 20 50 30 C 40 40 30 60 30 60' fill='none' stroke='%230055ff' stroke-width='1' opacity='0.5'/%3E%3Cpath d='M30 60 L 30 35' stroke='%230055ff' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 60px 60px; /* 控制叶子大小 */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ccc;
}

/* --- 1. 滚动字幕 --- */
.marquee-container {
  width: 100%;
  background: #0000aa; /* 经典的 Windows 蓝屏蓝 */
  color: #fff;
  border-bottom: 2px solid #fff;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 5px 0;
}

.marquee-content {
  display: inline-block;
  animation: scroll 15s linear infinite;
  padding-left: 100%;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* --- 2. 主窗口 --- */
.main-window {
  margin-top: 40px;
  width: 90%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.85); /* 半透明黑底 */
  border: 2px solid #555;
  box-shadow: 8px 8px 0px #0000aa; /* 硬阴影 */
  display: flex;
  flex-direction: column;
}

/* 窗口标题栏 */
.window-header {
  background: linear-gradient(90deg, #000088, #0000ff);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #555;
}

.win-title {
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
}

.win-controls .btn {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #ccc;
  color: #000;
  text-align: center;
  line-height: 14px;
  font-size: 12px;
  margin-left: 4px;
  border: 1px outset #fff;
  cursor: pointer;
}

/* 窗口内容布局 */
.window-content {
  display: flex;
  min-height: 400px;
}

/* 左侧边栏 */
.sidebar {
  width: 200px;
  border-right: 2px dashed #333;
  padding: 20px;
  text-align: center;
  background: #050505;
}

.pixel-block {
  width: 100px;
  height: 100px;
  background: #0000aa;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  border: 2px solid #fff;
  image-rendering: pixelated;
}

.nav-btn {
  display: block;
  width: 100%;
  background: transparent;
  border: 1px solid #333;
  color: #0099ff;
  padding: 10px;
  margin-bottom: 10px;
  font-family: inherit;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.1s;
  text-align: left;
}

.nav-btn:hover {
  background: #0000aa;
  color: #fff;
  border-color: #fff;
}

.status-box {
  margin-top: 30px;
  border: 1px inset #333;
  padding: 10px;
  font-size: 0.9rem;
  text-align: left;
  color: #666;
}

/* 右侧主内容 */
.main-display {
  flex: 1;
  padding: 30px;
  position: relative;
  /* 增加一点扫描线效果 */
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 2px, 3px 100%;
}

.pixel-title {
  margin: 0;
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 0px #0000aa;
}

.divider {
  height: 2px;
  background: #0099ff;
  margin: 20px 0;
  width: 50px;
}

.intro-text {
  font-size: 1.4rem;
  line-height: 1.6;
  color: #bbb;
}

.highlight {
  color: #00ffff;
  text-decoration: underline;
}

.updates-box {
  margin-top: 40px;
  border: 1px solid #333;
  padding: 15px;
  background: #0a0a0a;
}

.box-title {
  background: #333;
  color: #fff;
  padding: 2px 5px;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.updates-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.updates-box li {
  margin-bottom: 5px;
  font-size: 1rem;
}

.date {
  color: #0099ff;
}

/* 底部状态栏 */
.window-footer {
  background: #ccc;
  color: #000;
  padding: 2px 10px;
  font-size: 0.9rem;
  border-top: 2px solid #fff;
}

.blink {
  animation: blink 1s infinite;
}

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.retro-footer {
  margin-top: 20px;
  font-size: 1rem;
  color: #555;
}

/* 移动端适配 */
@media (max-width: 700px) {
  .window-content {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 2px dashed #333;
    box-sizing: border-box;
  }
  .pixel-title {
    font-size: 2rem;
  }
}
</style>