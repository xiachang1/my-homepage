<script setup>
defineProps({
  name: String,      // 姓名
  number: String,    // 号码
  position: String,  // 位置 (FW/MF/DF/GK)
  value: String,     // 身价 (你的手稿数据)
  desc: String,      // 短评
  tags: Array        // 标签 (如：金球奖、吐饼)
})

// 根据位置返回不同的颜色类名
const getPosClass = (pos) => {
  if (pos === 'GK') return 'pos-gk'
  if (pos.includes('DF')) return 'pos-df'
  if (pos.includes('MF')) return 'pos-mf'
  return 'pos-fw'
}
</script>

<template>
  <div class="player-card">
    <div class="card-header">
      <div class="number">{{ number }}</div>
      <div class="position" :class="getPosClass(position)">{{ position }}</div>
    </div>
    <div class="card-body">
      <div class="avatar-placeholder">{{ name[0] }}</div>
      <h3 class="name">{{ name }}</h3>
      <div class="value">身价: {{ value }}</div>
      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <p class="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.player-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}
.player-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #eee;
}
.number { font-size: 24px; font-weight: 900; color: #ccc; font-style: italic; }
.position { 
  font-weight: bold; padding: 2px 8px; border-radius: 4px; font-size: 12px; 
  display: flex; align-items: center;
}
/* 位置颜色 */
.pos-gk { background: #fff3cd; color: #856404; } /* 黄色 */
.pos-df { background: #d4edda; color: #155724; } /* 绿色 */
.pos-mf { background: #d1ecf1; color: #0c5460; } /* 蓝色 */
.pos-fw { background: #f8d7da; color: #721c24; } /* 红色 */

.card-body { padding: 20px; text-align: center; }

.avatar-placeholder {
  width: 60px; height: 60px; background: #eee; border-radius: 50%;
  margin: 0 auto 10px; line-height: 60px; font-size: 24px; font-weight: bold; color: #666;
}

.name { margin: 0; font-size: 18px; color: #333; }
.value { font-size: 14px; color: #1a73e8; margin: 5px 0; font-weight: bold; }

.tags { display: flex; gap: 5px; justify-content: center; flex-wrap: wrap; margin: 10px 0; }
.tag { font-size: 12px; background: #f1f3f4; padding: 2px 8px; border-radius: 10px; color: #555; }

.desc { font-size: 13px; color: #666; margin-top: 10px; text-align: left; line-height: 1.5; }
</style>