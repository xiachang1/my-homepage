<script setup>
const legends = [
  { name: 'Steven Gerrard', role: 'The Eternal Captain', desc: '永远的队长，伊斯坦布尔奇迹的缔造者。', img: '/liverpool/Gerrard.jpg' },
  { name: 'Mohamed Salah', role: 'The Egyptian King', desc: '现役传奇，安菲尔德的法老。', img: '/liverpool/salah.jpg' },
  { name: 'Virgil van Dijk', role: 'The Colossus', desc: '后防定海神针，不可逾越的高墙。', img: '/liverpool/Dijk.jpg' },
  { name: 'Fernando Torres', role: 'El Niño', desc: '金发圣婴，那段红色岁月的初恋。', img: '/liverpool/Torres.jpg' },
  { name: 'Jordan Henderson', role: 'The Leader', desc: '全满贯队长，勤勉与领袖力的化身。', img: '/liverpool/Henderson.jpg' }
]
</script>

<template>
  <div class="royal-grid">
    <div v-for="player in legends" :key="player.name" class="royal-card">
      <div class="frame">
        <img :src="player.img" :alt="player.name" loading="lazy">
      </div>
      <div class="info">
        <h3>{{ player.name }}</h3>
        <div class="separator">✦</div>
        <span class="role">{{ player.role }}</span>
        <p>{{ player.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.royal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.royal-card {
  background: #fdfbf7; /* 羊皮纸色 */
  border: 1px solid #d4af37; /* 金色边框 */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.4s ease;
  position: relative;
}

/* 双线边框效果 */
.royal-card::before {
  content: ''; position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px;
  border: 1px solid #d4af37; pointer-events: none;
}

.royal-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(200, 16, 46, 0.15); /* 悬停泛红光 */
}

.frame {
  margin: 15px;
  height: 280px;
  overflow: hidden;
  border-bottom: 2px solid #C8102E; /* 底部红线 */
}

.frame img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.6s ease;
  filter: sepia(20%); /* 轻微复古色调 */
}

.royal-card:hover .frame img {
  transform: scale(1.05);
  filter: sepia(0%); /* 悬停变回原色 */
}

.info { padding: 0 20px 20px; }

.info h3 {
  font-family: 'Times New Roman', serif;
  font-size: 22px;
  color: #C8102E; /* 利物浦红 */
  margin: 10px 0 5px;
  letter-spacing: 1px;
}

.separator { color: #d4af37; font-size: 14px; margin: 5px 0; }

.role {
  display: block;
  font-family: 'Georgia', serif;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
}

.info p {
  font-size: 13px; color: #666; margin-top: 10px; font-style: italic; line-height: 1.6;
}
</style>