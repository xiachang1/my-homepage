<script setup>
import { useRouter, useRoute } from 'vitepress'

const props = defineProps({
  title: { type: String, default: 'C:\\System\\68FC.exe' }
})

const router = useRouter()
const route = useRoute()

const go = (path) => {
  router.go(path)
}

// 判断当前链接是否激活，用于高亮显示
const isActive = (path) => route.path.includes(path)
</script>

<template>
  <div class="retro-container">
    <!-- 主窗口 -->
    <div class="main-window">
      
      <!-- 1. 窗口标题栏 (顶部导航) -->
      <div class="window-header">
        <div class="header-left">
          <span class="app-icon">⚽</span>
          <span class="win-title">{{ title }}</span>
        </div>
        <!-- 这里的按钮模拟系统操作，也可以做成回首页 -->
        <div class="win-controls">
          <button class="sys-btn" @click="go('/')" title="返回首页">Home</button>
          <button class="sys-btn" @click="go('/about')" title="切换到关于我">About</button>
          <button class="sys-btn" @click="go('/liverpool')" title="切换到利物浦">LFC</button>
          <span class="deco-btn">_</span>
          <span class="deco-btn">□</span>
          <span class="deco-btn close">×</span>
        </div>
      </div>

      <div class="window-body">
        <!-- 2. 窗口内侧边栏 (代替 Sidebar) -->
        <aside class="inner-sidebar">
          <div class="sidebar-title">EXPLORER</div>
          
          <ul class="nav-list">
            <li :class="{ active: isActive('/squad') }" @click="go('/68fc/squad')">
              <span class="icon">📁</span> 球队阵容
            </li>
            <li :class="{ active: isActive('/matches') }" @click="go('/68fc/matches')">
              <span class="icon">📊</span> 赛事中心
            </li>
            <li :class="{ active: isActive('/history') }" @click="go('/68fc/history')">
              <span class="icon">📜</span> 队史荣誉
            </li>
          </ul>

          <div class="sidebar-footer">
            <div class="disk-info">
              <span class="icon">💾</span> 68FC_DATA (C:)
            </div>
            <div class="free-space">2025 MB free</div>
          </div>
        </aside>

        <!-- 3. 内容显示区 -->
        <main class="inner-content">
          <div class="content-scroll">
            <slot></slot> <!-- Markdown 内容在这里渲染 -->
          </div>
        </main>
      </div>

      <!-- 底部状态栏 -->
      <div class="window-footer">
        <span>User: Admin</span>
        <span class="right">Ln 1, Col 1  UTF-8</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 容器 */
.retro-container {
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 100vh;
  box-sizing: border-box;
}

.main-window {
  width: 1000px;
  max-width: 95%;
  background: #000;
  border: 2px solid #555;
  box-shadow: 10px 10px 0 #0000aa;
  display: flex;
  flex-direction: column;
  height: 85vh; /* 固定高度，内部滚动 */
}

/* 标题栏 */
.window-header {
  background: linear-gradient(90deg, #000088, #0000ff);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #555;
  flex-shrink: 0;
}
.win-title { color: #fff; font-weight: bold; letter-spacing: 1px; margin-left: 10px;}
.app-icon { font-size: 1.2rem; }

.sys-btn {
  background: #1701e0; border: 1px outset #fff; cursor: pointer; margin-right: 10px;
  font-family: inherit; font-size: 12px; padding: 2px 8px;
}
.sys-btn:hover { background: #fff; }
.deco-btn {
  display: inline-block; width: 16px; height: 16px; background: #ccc;
  text-align: center; line-height: 14px; font-size: 12px; margin-left: 4px; border: 1px outset #fff; color: #000;
}
.close { background: #ff5555; color: white; }

/* 主体布局 */
.window-body {
  display: flex;
  flex: 1;
  overflow: hidden; /* 防止溢出 */
}

/* 侧边栏样式 */
.inner-sidebar {
  width: 220px;
  background: #111;
  border-right: 2px solid #555;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.sidebar-title {
  background: #333; color: #ccc; padding: 5px 10px; font-size: 0.9rem;
  border-bottom: 1px solid #555;
}
.nav-list {
  list-style: none; padding: 0; margin: 0; flex: 1;
}
.nav-list li {
  padding: 12px 15px;
  color: #888;
  cursor: pointer;
  border-bottom: 1px dashed #333;
  transition: all 0.2s;
  display: flex; align-items: center; gap: 10px;
}
.nav-list li:hover { background: #222; color: #fff; }
.nav-list li.active {
  background: #0000aa; color: #fff; border-left: 4px solid #00ffff;
}
.sidebar-footer {
  padding: 15px; color: #555; font-size: 0.8rem; border-top: 1px solid #333;
}

/* 内容区样式 */
.inner-content {
  flex: 1;
  background: #000;
  position: relative;
  overflow: hidden;
}
.content-scroll {
  height: 100%;
  overflow-y: auto; /* 只让内容区滚动 */
  padding: 30px;
  /* 滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: #0055ff #111;
}
.content-scroll::-webkit-scrollbar { width: 8px; }
.content-scroll::-webkit-scrollbar-track { background: #111; }
.content-scroll::-webkit-scrollbar-thumb { background: #0055ff; }

/* 底部栏 */
.window-footer {
  background: #ccc; color: #000; padding: 2px 10px; font-size: 0.9rem;
  border-top: 2px solid #fff;
  display: flex; justify-content: space-between;
  flex-shrink: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .window-body { flex-direction: column; }
  .inner-sidebar { width: 100%; height: auto; border-right: none; border-bottom: 2px solid #555; }
  .nav-list { display: flex; flex-wrap: wrap; }
  .nav-list li { flex: 1; justify-content: center; border-bottom: none; border-right: 1px solid #333;}
  .sidebar-footer { display: none; }
  .main-window { height: 95vh; }
}
</style>