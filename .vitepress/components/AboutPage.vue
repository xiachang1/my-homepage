<script setup>
// 这里不需要复杂的逻辑，主要是静态展示
const skills = [
  { name: 'Vue & Vite', icon: 'https://skillicons.dev/icons?i=vue,vite' },
  { name: 'Python & SQL', icon: 'https://skillicons.dev/icons?i=python,mysql' },
  { name: 'Design', icon: 'https://skillicons.dev/icons?i=figma,ps' }
]
</script>

<template>
  <div class="about-wrapper">
    
    <!-- 1. 顶部大图 / 艺术标语 -->
    <div class="hero-section">
      <div class="hero-text">
        <h1 class="title">Hello, I'm Yiyao.</h1>
        <p class="subtitle">Software Engineer / Dreamer / KOP</p>
      </div>
      <!-- 这是一个“拍立得”风格的照片 -->
      <div class="polaroid">
        <!-- 替换成你自己的生活照，或者暂时用梵高 -->
        <img src="/background/little angel.jpg" alt="Me" /> 
        <div class="caption">2025 @Liaocheng</div>
      </div>
    </div>

    <!-- 2. 叙事段落 (杂志排版) -->
    <div class="story-section">
      <p class="drop-cap">
        我是一名就读于<strong>西南大学</strong>软件工程专业的大一新生。
        在这个充满 0 和 1 的数字世界里，我正在寻找属于自己的秩序与美感。
      </p>
      <p>
        代码对我来说不仅是工具，更是一种<strong>表达方式</strong>。就像在足球场上寻找空档一样，我也在算法中寻找最优解。
        如果不写代码，我大概率正在<strong>画画</strong>，或者在琴房里弹奏一曲肖邦。
      </p>
    </div>

    <!-- 3. 时间轴 (Timeline) -->
    <div class="section-title">Timeline</div>
    <div class="timeline">
      <div class="timeline-item">
        <div class="year">2025 - Present</div>
        <div class="content">
          <h3>西南大学 (SWU)</h3>
          <p>软件工程（中外合作办学） | 开启全栈开发之路</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="year">2022 - 2025</div>
        <div class="content">
          <h3>聊城一中 (LCYZ)</h3>
          <p>68FC 创始人之一 / 高中足球联赛经历 / 青春的烙印</p>
        </div>
      </div>
    </div>

    <!-- 4. 技能卡片 (Bento Grid 风格) -->
    <div class="section-title">Tech Stack</div>
    <div class="tech-grid">
      <div class="tech-card" v-for="skill in skills" :key="skill.name">
        <img :src="skill.icon" :alt="skill.name" />
        <span>{{ skill.name }}</span>
      </div>
    </div>

    <!-- 5. 底部名言 -->
    <div class="footer-quote">
      "Stay hungry, stay foolish."
    </div>

  </div>
</template>

<style scoped>
/* --- 全局容器 --- */
.about-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Georgia', serif; /* 使用衬线字体，更有书卷气 */
  color: #333;
}

/* --- 1. Hero 区域 --- */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  font-family: 'Times New Roman', serif;
  letter-spacing: -1px;
}

.subtitle {
  font-family: 'Roboto', sans-serif; /* 副标题用无衬线 */
  color: #666;
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* 拍立得照片风格 */
.polaroid {
  background: #fff;
  padding: 10px 10px 30px 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transform: rotate(3deg); /* 稍微歪一点，更有生活感 */
  transition: transform 0.3s;
}
.polaroid:hover {
  transform: rotate(0deg) scale(1.05);
}
.polaroid img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  filter: grayscale(20%); /* 稍微加点黑白滤镜，更有质感 */
}
.caption {
  font-family: 'Caveat', cursive; /* 最好引入一个手写体 */
  text-align: center;
  margin-top: 10px;
  color: #555;
  font-size: 0.9rem;
}

/* --- 2. 叙事段落 --- */
.story-section {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 60px;
}
.story-section p {
  margin-bottom: 20px;
}
/* 首字下沉效果 */
.drop-cap::first-letter {
  font-size: 3.5rem;
  float: left;
  line-height: 0.8;
  margin-right: 10px;
  font-weight: bold;
  color: #1a73e8; /* 强调色 */
}

/* --- 3. 时间轴 --- */
.section-title {
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #999;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 30px;
  letter-spacing: 1px;
}

.timeline {
  border-left: 2px solid #eee;
  padding-left: 30px;
  margin-bottom: 60px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -37px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: #fff;
  border: 2px solid #1a73e8;
  border-radius: 50%;
}

.year {
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem;
  color: #1a73e8;
  font-weight: bold;
  margin-bottom: 5px;
}

.timeline-item h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.timeline-item p {
  margin: 5px 0 0;
  color: #666;
  font-size: 0.95rem;
}

/* --- 4. 技术栈卡片 --- */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.tech-card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid transparent;
  transition: all 0.3s;
}

.tech-card:hover {
  background: #fff;
  border-color: #eee;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transform: translateY(-3px);
}

.tech-card img {
  height: 30px;
  margin-bottom: 10px;
}

.tech-card span {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
}

/* --- 5. 底部 --- */
.footer-quote {
  text-align: center;
  font-style: italic;
  color: #ccc;
  font-size: 1.5rem;
  font-family: 'Times New Roman', serif;
  margin-top: 80px;
}

/* 移动端适配 */
@media (max-width: 600px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }
  .title { font-size: 2.5rem; }
  .polaroid { transform: rotate(0deg); }
}
</style>