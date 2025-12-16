<script setup>
defineProps({
  name: String, number: String, position: String, value: String, desc: String, tags: Array
})
</script>

<template>
  <div class="retro-card">
    <div class="card-inner">
      <!-- 头部：像素边框 -->
      <div class="card-header">
        <span class="no">NO.{{ number }}</span>
        <span class="pos">[{{ position }}]</span>
      </div>
      
      <!-- 主体 -->
      <div class="card-body">
        <div class="avatar-pixel">
          {{ name[0] }}
        </div>
        <div class="info">
          <h3 class="name">{{ name }}</h3>
          <div class="stat-line">
            <span class="label">RATING:</span>
            <span class="val">{{ value }}</span>
          </div>
        </div>
      </div>

      <!-- 标签 -->
      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">&lt;{{ tag }}&gt;</span>
      </div>

      <!-- 描述 -->
      <div class="desc-box">
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.loli.net/css2?family=VT323&display=swap');
.retro-card {
  font-family: 'VT323', monospace;
  background: #000;
  border: 2px solid #555;
  /* 经典的像素阴影 */
  box-shadow: 4px 4px 0 #0000aa; 
  margin-bottom: 20px;
  transition: transform 0.2s;
}

.retro-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #0099ff;
  border-color: #fff;
}

.card-inner { padding: 15px; }

.card-header {
  display: flex; justify-content: space-between;
  border-bottom: 1px dashed #333;
  padding-bottom: 5px; margin-bottom: 10px;
  color: #0099ff; font-size: 1.2rem;
}

.card-body {
  display: flex; gap: 15px; align-items: center; margin-bottom: 15px;
}

.avatar-pixel {
  width: 50px; height: 50px;
  background: #0000aa; color: #fff;
  border: 2px solid #fff;
  display: flex; justify-content: center; align-items: center;
  font-size: 1.5rem;
}

.name {
  margin: 0; font-size: 1.8rem; color: #fff; letter-spacing: 2px; line-height: 1;
}

.stat-line { margin-top: 5px; font-size: 1rem; }
.label { color: #666; margin-right: 5px; }
.val { color: #00ffff; }

.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
.tag {
  background: #111; color: #aaa; padding: 2px 6px; font-size: 0.9rem; border: 1px solid #333;
}

.desc-box {
  background: #0a0a0a;
  border: 1px inset #333;
  padding: 8px;
  font-size: 1rem; color: #ccc;
  line-height: 1.4;
}
</style>