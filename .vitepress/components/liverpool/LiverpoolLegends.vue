<script setup>
const legends = [
  {
    name: 'Steven Gerrard',
    role: 'The Captain Forever',
    desc: '永远的队长，伊斯坦布尔奇迹的缔造者，红军的灵魂。',
    img: '/liverpool/Gerrard.jpg'
  },
  {
    name: 'Mohamed Salah',
    role: 'The Egyptian King',
    desc: '英超记录粉碎机，现役传奇，安菲尔德的法老。',
    img: '/liverpool/salah.jpg'
  },
  {
    name: 'Virgil van Dijk',
    role: 'The Wall',
    desc: '后防定海神针，这世上没有人能轻易过掉范戴克。',
    img: '/liverpool/Dijk.jpg'
  },
  {
    name: 'Fernando Torres',
    role: 'El Niño (圣婴)',
    desc: '那一头飘逸的金发，是无数红军球迷初恋的模样。',
    img: '/liverpool/Torres.jpg'
  },
  {
    name: 'Jordan Henderson',
    role: 'The Leader',
    desc: '他是举起英超和欧冠奖杯的铁血队长，勤勉与领袖力的化身。',
    img: '/liverpool/Henderson.jpg'
  }
]
</script>

<template>
  <div class="player-grid">
    <div v-for="player in legends" :key="player.name" class="player-card">
      <div class="img-box">
        <img :src="player.img" :alt="player.name" loading="lazy">
      </div>
      <div class="info">
        <h3>{{ player.name }}</h3>
        <span class="role">{{ player.role }}</span>
        <p>{{ player.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.player-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s;
  border: 1px solid #eee;
}

.player-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(200, 16, 46, 0.2);
}

.img-box {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.player-card:hover .img-box img {
  transform: scale(1.05);
}

.info {
  padding: 15px;
  text-align: center;
}

.info h3 {
  margin: 0;
  font-size: 18px;
  color: #C8102E;
}

.info .role {
  display: block;
  font-size: 12px;
  color: #888;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
  margin-top: 4px;
}

.info p {
  font-size: 13px;
  color: #555;
  margin: 0;
  line-height: 1.4;
}
</style>