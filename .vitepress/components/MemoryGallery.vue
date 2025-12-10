<script setup>
// 定义接收的数据格式
defineProps({
  // 接收一个数组，每个元素包含 image(路径) 和 text(描述)
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="gallery-grid">
    <div v-for="(item, index) in items" :key="index" class="photo-card">
      <div class="img-box">
        <img :src="item.image" :alt="item.text" loading="lazy" />
      </div>
      <div class="caption">
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 网格布局：自动适应屏幕宽度 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

/* 照片卡片 */
.photo-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

/* 悬停特效：浮起 */
.photo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* 图片容器 */
.img-box {
  width: 100%;
  height: 200px; /* 固定高度，整齐划一 */
  overflow: hidden;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保证图片填满且不变形 */
  transition: transform 0.5s ease;
}

/* 悬停时图片轻微放大 */
.photo-card:hover .img-box img {
  transform: scale(1.05);
}

/* 文字描述 */
.caption {
  padding: 16px;
  background: #fff;
}

.caption p {
  margin: 0;
  font-size: 15px;
  color: #444;
  line-height: 1.5;
  text-align: center;
  font-weight: 500;
}
</style>