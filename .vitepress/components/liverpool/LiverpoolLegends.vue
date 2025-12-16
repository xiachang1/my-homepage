<script setup>
const legends = [
  { name: 'STEVEN GERRARD', role: 'THE CAPTAIN', desc: '永远的队长。伊斯坦布尔奇迹缔造者。', img: '/liverpool/Gerrard.jpg' },
  { name: 'MOHAMED SALAH', role: 'THE PHARAOH', desc: '安菲尔德法老。现役传奇，纪录粉碎机。', img: '/liverpool/salah.jpg' },
  { name: 'VIRGIL VAN DIJK', role: 'THE WALL', desc: '后防定海神针。不可逾越的叹息之墙。', img: '/liverpool/Dijk.jpg' },
  { name: 'FERNANDO TORRES', role: 'EL NIÑO', desc: '圣婴。那段红色岁月里最锋利的矛。', img: '/liverpool/Torres.jpg' },
  { name: 'JORDAN HENDERSON', role: 'THE LEADER', desc: '全满贯队长。勤勉与领袖力的化身。', img: '/liverpool/Henderson.jpg' }
]
</script>

<template>
  <div class="dark-room">
    <!-- 档案网格 -->
    <div class="monitor-grid">
      <div v-for="(player, index) in legends" :key="index" class="monitor-card">
        
        <!-- 屏幕显示区 -->
        <div class="screen-frame">
          <img :src="player.img" :alt="player.name" loading="lazy">
          <!-- 扫描线滤镜 -->
          <div class="scanlines"></div>
          <!-- 红色覆盖层 -->
          <div class="red-overlay"></div>
          <!-- 角标 -->
          <div class="rec-dot">REC ●</div>
        </div>

        <!-- 数据面板 -->
        <div class="data-panel">
          <div class="panel-header">
            <span class="code-id">ID_0{{ index + 1 }}</span>
            <span class="status">ACTIVE</span>
          </div>
          <h3 class="glitch-name" :data-text="player.name">{{ player.name }}</h3>
          <span class="role-badge">{{ player.role }}</span>
          <p class="desc">> {{ player.desc }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.loli.net/css2?family=VT323&display=swap');
/* --- 1. 暗房环境 --- */
.dark-room {
  width: 100%;
  /* 既然是组件，不需要设高度，让它撑开 */
  padding: 20px 0;
  background: transparent; /* 背景由全局 body 控制 */
}

/* --- 2. 网格布局 --- */
.monitor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 30px;
}

/* --- 3. 监控器卡片 --- */
.monitor-card {
  background: #050505;
  border: 1px solid #330000; /* 暗红边框 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  font-family: 'VT323', monospace;
  position: relative;
  transition: all 0.3s ease;
}

.monitor-card:hover {
  border-color: #ff003c; /* 悬停变亮红 */
  box-shadow: 0 0 25px rgba(255, 0, 60, 0.4); /* 红色光晕爆发 */
  transform: scale(1.02);
  z-index: 10;
}

/* --- 4. 屏幕区域 (图片) --- */
.screen-frame {
  height: 200px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid #C8102E;
}

.screen-frame img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.2); /* 默认黑白高对比 */
  transition: filter 0.3s;
}

/* 悬停时恢复色彩，甚至加红 */
.monitor-card:hover .screen-frame img {
  filter: grayscale(0%) contrast(1.1) sepia(30%) hue-rotate(-50deg) saturate(3); /* 诡异的红色调 */
}

/* 扫描线特效 (电视纹理) */
.scanlines {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4));
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 2;
}

/* 红色氛围灯 */
.red-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle, transparent 40%, rgba(200, 16, 46, 0.6) 100%);
  z-index: 3;
  pointer-events: none;
}

.rec-dot {
  position: absolute; top: 10px; right: 10px;
  color: #ff003c; font-size: 12px; font-weight: bold;
  z-index: 4;
  animation: blink 1s infinite;
  text-shadow: 0 0 5px #ff003c;
}

@keyframes blink { 50% { opacity: 0; } }

/* --- 5. 数据面板 --- */
.data-panel {
  padding: 15px;
  color: #aaa;
}

.panel-header {
  display: flex; justify-content: space-between;
  font-size: 12px; color: #555;
  margin-bottom: 5px;
  border-bottom: 1px dashed #333;
  padding-bottom: 5px;
}
.status { color: #0f0; text-shadow: 0 0 5px #0f0; } /* 绿色在线状态 */

.glitch-name {
  color: #fff;
  font-size: 24px;
  margin: 10px 0 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}

/* 名字故障效果 (悬停时) */
.monitor-card:hover .glitch-name {
  text-shadow: 2px 0 #ff003c, -2px 0 #00f3ff;
}

.role-badge {
  display: inline-block;
  background: #300000;
  color: #ff003c;
  padding: 2px 6px;
  font-size: 12px;
  border: 1px solid #ff003c;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(255,0,60, 0.3);
}

.desc {
  font-size: 14px;
  line-height: 1.4;
  color: #888;
  margin: 0;
}
</style>