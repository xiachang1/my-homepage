<script setup>
import { useRouter, useRoute } from 'vitepress'
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'C:\\System\\Explorer.exe' }
})

const router = useRouter()
const route = useRoute()

const go = (path) => {
  // 如果是 mailto 链接，直接打开邮件客户端
  if (path.startsWith('mailto:')) {
    window.location.href = path
    return
  }
  router.go(path)
}

const isActive = (path) => route.path.includes(path)

// --- 1. 定义三套侧边栏菜单 ---

// A. 68FC 菜单
const menu68FC = [
  { text: '球队阵容', link: '/68fc/squad', icon: '📁' },
  { text: '赛事中心', link: '/68fc/matches', icon: '📊' },
  { text: '队史荣誉', link: '/68fc/history', icon: '📜' }
]

// B. 利物浦菜单
const menuLFC = [
  { text: '红军精神', link: '/liverpool/', icon: '🔴' }
]

// C. About 菜单 (修复了这里的闭合问题)
const menuAbout = [
  { text: 'ABOUT ME', link: '/about', icon: '👨‍💻' },
  { text: 'CONTACT', link: '/contact', icon: '📡' }
] // <--- 之前漏了这个 ]

// --- 2. 顶部导航栏 (固定显示 Home, About, 68FC, LFC) ---
const topMenu = [
  { text: 'Home', link: '/', icon: '🏠' },
  { text: 'About', link: '/about', icon: '👨‍💻' }, // 加上了 About
  { text: '68FC', link: '/68fc/squad', icon: '⚽' },
  { text: 'LFC', link: '/liverpool/', icon: '🔴' }
]

// --- 3. 智能判断当前板块 ---
const isLiverpool = computed(() => route.path.includes('/liverpool'))
const isAbout = computed(() => route.path.includes('/about') || route.path.includes('/contact'))

// 动态决定侧边栏显示什么
const currentMenu = computed(() => {
  if (isLiverpool.value) return menuLFC
  if (isAbout.value) return menuAbout
  return menu68FC // 默认为 68FC
})

// 动态侧边栏标题
const sidebarTitle = computed(() => {
  if (isLiverpool.value) return 'LFC ARCHIVE'
  if (isAbout.value) return 'PERSONAL INFO'
  return '68FC EXPLORER'
})

</script>

<template>
  <div class="retro-container">
    <div class="main-window">
      
      <!-- 窗口标题栏 -->
      <div class="window-header" :class="{ 'header-lfc': isLiverpool, 'header-about': isAbout }">
        <div class="header-left">
          <span class="app-icon" v-if="isLiverpool">🔴</span>
          <span class="app-icon" v-else-if="isAbout">👨‍💻</span>
          <span class="app-icon" v-else>⚽</span>
          <span class="win-title">{{ title }}</span>
        </div>
        
        <!-- ▼▼▼ 顶部导航栏 ▼▼▼ -->
        <div class="header-nav">
          <button 
            v-for="item in topMenu" 
            :key="item.text"
            class="top-nav-btn" 
            :class="{ active: isActive(item.link) && item.link !== '/' }"
            @click="go(item.link)"
          >
            {{ item.text }}
          </button>
        </div>
        <!-- ▲▲▲ ▲▲▲ -->

        <div class="win-controls">
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
            <li 
              v-for="item in currentMenu" 
              :key="item.text"
              :class="{ active: isActive(item.link) }" 
              @click="go(item.link)"
            >
              <span class="icon">{{ item.icon }}</span> {{ item.text }}
            </li>
          </ul>

          <div class="sidebar-footer">
            <div class="disk-info">
              <span class="icon">💾</span> {{ isLiverpool ? 'LFC_DATA (D:)' : (isAbout ? 'USER_DATA (E:)' : '68FC_DATA (C:)') }}
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
        <span>User: {{ isLiverpool ? 'KOP' : (isAbout ? 'Guest' : 'Admin') }}</span>
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
  gap: 20px;
}

/* 利物浦红 */
.header-lfc {
  background: linear-gradient(90deg, #8B0000, #C8102E) !important;
}

/* About页 (紫色/深灰) */
.header-about {
  background: linear-gradient(90deg, #4b0082, #8a2be2) !important;
}

.header-left { display: flex; align-items: center; min-width: 150px; }
.win-title { color: #fff; font-weight: bold; letter-spacing: 1px; margin-left: 10px;}
.app-icon { font-size: 1.2rem; }

/* 顶部导航按钮 */
.header-nav {
  display: flex;
  gap: 10px;
  flex: 1;
  justify-content: center;
}

.top-nav-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  padding: 2px 12px;
  transition: all 0.2s;
  text-transform: uppercase;
}

.top-nav-btn:hover {
  background: rgba(255,255,255,0.2);
  color: #fff;
  border-color: #fff;
}

.top-nav-btn.active {
  background: #fff;
  color: #000;
  border-color: #fff;
  font-weight: bold;
}

.win-controls { display: flex; min-width: 60px; justify-content: flex-end; }
.deco-btn {
  display: inline-block; width: 16px; height: 16px; background: #ccc;
  text-align: center; line-height: 14px; font-size: 12px; margin-left: 4px; border: 1px outset #fff; color: #000;
}
.close { background: #ff5555; color: white; }

.window-body { display: flex; flex: 1; overflow: hidden; }

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
.nav-list { list-style: none; padding: 0; margin: 0; flex: 1; }
.nav-list li {
  padding: 12px 15px;
  color: #888;
  cursor: pointer;
  border-bottom: 1px dashed #333;
  transition: all 0.2s;
  display: flex; align-items: center; gap: 10px;
}
.nav-list li:hover { background: #222; color: #fff; }
.nav-list li.active { background: #0000aa; color: #fff; border-left: 4px solid #00ffff; }
.sidebar-footer { padding: 15px; color: #555; font-size: 0.8rem; border-top: 1px solid #333; }

.inner-content { flex: 1; background: #000; position: relative; overflow: hidden; }
.content-scroll {
  height: 100%; overflow-y: auto; padding: 30px;
  scrollbar-width: thin; scrollbar-color: #0055ff #111;
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

/* 移动端适配 */
@media (max-width: 768px) {
  .window-body { flex-direction: column; }
  
  /* 侧边栏横向排列 */
  .inner-sidebar { width: 100%; height: auto; border-right: none; border-bottom: 2px solid #555; }
  .nav-list { display: flex; flex-wrap: wrap; }
  .nav-list li { flex: 1; justify-content: center; border-bottom: none; border-right: 1px solid #333; padding: 8px 5px; font-size: 0.9rem;}
  
  .sidebar-footer { display: none; }
  .main-window { height: 95vh; }

  /* ▼▼▼ 关键修改：让导航栏在手机上显示 ▼▼▼ */
  
  /* 1. 显示导航栏，缩小间距 */
  .header-nav { 
    display: flex !important; 
    gap: 4px; 
    flex: 1; 
    justify-content: flex-start; /* 靠左排 */
  }

  /* 2. 隐藏长标题 (C:\Users...)，给按钮腾地方 */
  .win-title { display: none; }
  
  /* 3. 缩小按钮尺寸，防止换行 */
  .top-nav-btn {
    padding: 2px 6px;
    font-size: 12px;
  }
  
  /* 4. 调整左侧图标区域 */
  .header-left { min-width: auto; margin-right: 5px; }

  /* ▲▲▲ 修改结束 ▲▲▲ */
}
</style>