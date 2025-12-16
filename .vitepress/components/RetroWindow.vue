<script setup>
import { useRouter, useRoute } from 'vitepress'
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'C:\\System\\Explorer.exe' }
})

const router = useRouter()
const route = useRoute()

const go = (path) => {
  router.go(path)
}

const isActive = (path) => route.path.includes(path)

// --- 1. 定义两套菜单数据 ---

// 68FC 的菜单
const menu68FC = [
  { text: '球队阵容', link: '/68fc/squad', icon: '📁' },
  { text: '赛事中心', link: '/68fc/matches', icon: '📊' },
  { text: '队史荣誉', link: '/68fc/history', icon: '📜' }
]

// 利物浦的菜单 (在这里定义利物浦侧边栏的内容)
const menuLFC = [
  { text: '利物浦首页', link: '/liverpool/', icon: '🔴' },
  // 如果以后有更多利物浦页面，可以在这里加，比如：
  // { text: '伊斯坦布尔', link: '/liverpool/istanbul', icon: '🏆' }
]

// --- 2. 智能判断当前是哪个板块 ---
const isLiverpool = computed(() => route.path.includes('/liverpool'))

// 根据当前路径，决定显示哪套菜单
const currentMenu = computed(() => {
  if (isLiverpool.value) {
    return menuLFC
  } else {
    return menu68FC // 默认显示 68FC
  }
})

// --- 3. 动态侧边栏标题 ---
const sidebarTitle = computed(() => isLiverpool.value ? 'LFC ARCHIVE' : '68FC EXPLORER')

</script>

<template>
  <div class="retro-container">
    <div class="main-window">
      
      <!-- 窗口标题栏 -->
      <div class="window-header" :class="{ 'header-lfc': isLiverpool }">
        <div class="header-left">
          <span class="app-icon">{{ isLiverpool ? '🔴' : '⚽' }}</span>
          <span class="win-title">{{ title }}</span>
        </div>
        <div class="win-controls">
          <button class="sys-btn" @click="go('/')" title="返回首页">Home</button>
          <!-- 如果在利物浦页面，显示去68FC的按钮；反之亦然 -->
          <button v-if="isLiverpool" class="sys-btn" @click="go('/68fc/squad')">68FC</button>
          <button v-else class="sys-btn" @click="go('/liverpool')">LFC</button>
          
          <span class="deco-btn">_</span>
          <span class="deco-btn">□</span>
          <span class="deco-btn close">×</span>
        </div>
      </div>

      <div class="window-body">
        <!-- 侧边栏 -->
        <aside class="inner-sidebar">
          <div class="sidebar-title">{{ sidebarTitle }}</div>
          
          <ul class="nav-list">
            <!-- 使用 v-for 循环渲染动态菜单 -->
            <li 
              v-for="item in currentMenu" 
              :key="item.link"
              :class="{ active: isActive(item.link) }" 
              @click="go(item.link)"
            >
              <span class="icon">{{ item.icon }}</span> {{ item.text }}
            </li>
          </ul>

          <div class="sidebar-footer">
            <div class="disk-info">
              <span class="icon">💾</span> {{ isLiverpool ? 'LFC_DATA (D:)' : '68FC_DATA (C:)' }}
            </div>
            <div class="free-space">1892 MB free</div>
          </div>
        </aside>

        <!-- 内容区 -->
        <main class="inner-content">
          <div class="content-scroll">
            <slot></slot>
          </div>
        </main>
      </div>

      <div class="window-footer">
        <span>User: {{ isLiverpool ? 'KOP' : 'Admin' }}</span>
        <span class="right">Ln 1, Col 1  UTF-8</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ... (保留之前所有的 CSS 样式，不需要变动，只加下面这一点) ... */

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
  height: 85vh; 
}

/* 标题栏默认样式 (蓝色 - 68FC) */
.window-header {
  background: linear-gradient(90deg, #000088, #0000ff);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #555;
  flex-shrink: 0;
}

/* --- 新增：利物浦专属标题栏颜色 (红色) --- */
.header-lfc {
  background: linear-gradient(90deg, #8B0000, #C8102E) !important;
}

.win-title { color: #fff; font-weight: bold; letter-spacing: 1px; margin-left: 10px;}
.app-icon { font-size: 1.2rem; }

.sys-btn {
  background: #4c0099; border: 1px outset #fff; cursor: pointer; margin-right: 10px;
  font-family: inherit; font-size: 12px; padding: 2px 8px;
}
.sys-btn:hover { background: #fff; }
.deco-btn {
  display: inline-block; width: 16px; height: 16px; background: #ccc;
  text-align: center; line-height: 14px; font-size: 12px; margin-left: 4px; border: 1px outset #fff; color: #000;
}
.close { background: #ff5555; color: white; }

.window-body {
  display: flex;
  flex: 1;
  overflow: hidden; 
}

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

.inner-content {
  flex: 1;
  background: #000;
  position: relative;
  overflow: hidden;
}
.content-scroll {
  height: 100%;
  overflow-y: auto; 
  padding: 30px;
  scrollbar-width: thin;
  scrollbar-color: #0055ff #111;
}
.content-scroll::-webkit-scrollbar { width: 8px; }
.content-scroll::-webkit-scrollbar-track { background: #111; }
.content-scroll::-webkit-scrollbar-thumb { background: #0055ff; }

.window-footer {
  background: #ccc; color: #000; padding: 2px 10px; font-size: 0.9rem;
  border-top: 2px solid #fff;
  display: flex; justify-content: space-between;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .window-body { flex-direction: column; }
  .inner-sidebar { width: 100%; height: auto; border-right: none; border-bottom: 2px solid #555; }
  .nav-list { display: flex; flex-wrap: wrap; }
  .nav-list li { flex: 1; justify-content: center; border-bottom: none; border-right: 1px solid #333;}
  .sidebar-footer { display: none; }
  .main-window { height: 95vh; }
}
</style>