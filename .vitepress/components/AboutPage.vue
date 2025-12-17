<template>
  <div class="profile-container">
    
    <!-- 1. 顶部身份卡 -->
    <div class="id-card">
      <div class="photo-area">
        <!-- 如果你有头像，把 src 改成你的图片路径，比如 /avatar.jpg -->
        <!-- 如果没有，这个 div 会显示一个像素笑脸 -->
        <div class="pixel-face">☻</div>
      </div>
      
      <div class="info-area">
        <div class="row">
          <span class="label">ID:</span> <span class="val">LAN_WANG</span>
        </div>
        <div class="row">
          <span class="label">CLASS:</span> <span class="val">Software Engineer (SE)</span>
        </div>
        <div class="row">
          <span class="label">LEVEL:</span> <span class="val">LV.1 (Freshman)</span>
        </div>
        <div class="row">
          <span class="label">GUILD:</span> <span class="val">68FC / Liverpool</span>
        </div>
        <div class="row">
          <span class="label">STATUS:</span> <span class="val blink">Coding...</span>
        </div>
      </div>
    </div>

    <div class="dashed-line"></div>

    <!-- 2. 详细介绍 (打字机风格文本) -->
    <!-- 2. 详细介绍 (太宰治风格 - 冷静与热爱的矛盾) -->
    <div class="bio-section">
      <h3>> BIO_LOG:</h3>
      <p class="dazai-text">
        <span class="quote">“这是一个不存在的地方。”</span>
        <br>
        日日重复同样的事，遵循着与昨日相同的惯例，若能避开猛烈的狂喜，自然也不会有悲痛的来袭。
        <br>
        我大概是在等待一件名为<strong>“夏日和服”</strong>的东西——<br>
        <em>银杏叶是蓝色的，正如忧郁是快乐的底色。</em>
      </p>
    </div>

    <div class="dashed-line"></div>

    <!-- 3. 技术栈矩阵 -->
    <div class="skill-section">
      <h3>> SKILL_MATRIX:</h3>
      <div class="skill-grid">
        <div class="skill-item">[ HTML5 ] <span class="bar">■■■■■□</span></div>
        <div class="skill-item">[ CSS3  ] <span class="bar">■■■■□□</span></div>
        <div class="skill-item">[ Vue.js] <span class="bar">■■■□□□</span></div>
        <div class="skill-item">[ Python] <span class="bar">■■■■□□</span></div>
        <div class="skill-item">[ MySQL ] <span class="bar">■■■□□□</span></div>
        <div class="skill-item">[ Git   ] <span class="bar">■■■■□□</span></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.loli.net/css2?family=VT323&display=swap');
.profile-container {
  font-family: 'VT323', monospace;
  color: #ccc;
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;
}

/* --- 1. 身份卡布局 --- */
.id-card {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.photo-area {
  flex-shrink: 0;
}

.pixel-face {
  width: 120px;
  height: 120px;
  background: #0000aa; /* 经典的蓝色 */
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: #fff;
  box-shadow: 4px 4px 0 rgba(255,255,255,0.2);
}

.img-avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 2px solid #fff;
  filter: grayscale(100%); /* 黑白照片更有质感 */
}

.info-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.row {
  font-size: 1.4rem;
  border-bottom: 1px dashed #333;
  padding-bottom: 2px;
}

.label {
  color: #888;
  margin-right: 10px;
  width: 80px;
  display: inline-block;
}

.val {
  color: #00ff00; /* 黑客绿 */
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.blink {
  animation: blink 1s infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* --- 分割线 --- */
.dashed-line {
  border-bottom: 2px dashed #444;
  margin: 30px 0;
}

/* --- 2. 文本区 --- */
.bio-section h3, .skill-section h3 {
  color: #fff;
  background: #333;
  display: inline-block;
  padding: 2px 8px;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.bio-section p {
  font-size: 1.3rem;
  line-height: 1.6;
  color: #ddd;
}

code {
  background: #222;
  color: #ff00ff; /* 霓虹粉 */
  padding: 2px 6px;
  font-family: inherit;
}

strong {
  color: #00ffff; /* 青色 */
  font-weight: normal;
}

/* --- 3. 技能矩阵 --- */
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.skill-item {
  font-size: 1.3rem;
  background: rgba(255,255,255,0.05);
  padding: 5px 10px;
  border-left: 3px solid #0000aa;
}

.bar {
  color: #00ff00;
  letter-spacing: 2px;
  float: right;
}
/* 添加到 style scoped 中 */

.dazai-text {
  font-family: 'Georgia', 'Songti SC', serif; /* 宋体/衬线体更有文学感 */
  font-size: 1.2rem;
  line-height: 1.8;
  color: #bbb;
}

.quote {
  display: block; /* 独占一行 */
  color: #00ffff; /* 赛博青色 */
  border-left: 3px solid #0000aa;
  padding-left: 10px;
  margin-bottom: 10px;
  font-style: italic;
  font-family: 'VT323', monospace; /* 引用句保留像素风 */
  font-size: 1.4rem;
}

em {
  color: #888;
  font-style: normal;
  border-bottom: 1px dashed #555;
}

/* 移动端适配 */
@media (max-width: 600px) {
  .id-card { flex-direction: column; align-items: center; text-align: center; }
  .info-area { width: 100%; text-align: left; }
  .label { width: 60px; }
}
</style>