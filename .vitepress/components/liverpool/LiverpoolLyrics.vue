<template>
  <div class="pixel-lyric-box">
    <!-- 模拟播放器头部 -->
    <div class="box-header">
      <span class="title">♫ YNWA.mp3 - PLAYING...</span>
      <div class="indicators">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>

    <div class="box-content">
      <!-- 装饰线 -->
      <div class="pixel-line">----------------------------------------</div>
      
      <p class="verse">
        When you walk through the storm<br>
        Hold your head up high<br>
        And don't be afraid of the dark
      </p>

      <p class="verse">
        At the end of the storm<br>
        There's a golden sky<br>
        And the sweet silver song of the lark
      </p>

      <p class="verse">
        Walk on, through the wind<br>
        Walk on, through the rain<br>
        Though your dreams be tossed and blown
      </p>

      <!-- 高潮部分：霓虹红 + 闪烁 -->
      <div class="chorus-box">
        <p class="chorus">
          WALK ON, WALK ON<br>
          WITH HOPE IN YOUR HEART<br>
          AND YOU'LL NEVER WALK ALONE
        </p>
        <p class="chorus highlight">
          YOU'LL NEVER WALK ALONE...<span class="cursor">_</span>
        </p>
      </div>

      <div class="pixel-line">----------------------------------------</div>
      
      <!-- 底部进度条模拟 -->
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
      <div class="time-code">00:45 / 02:38</div>
    </div>
  </div>
</template>

<style scoped>
/* 引入像素字体 */
@import url('https://fonts.loli.net/css2?family=VT323&display=swap');
/* --- 主容器 --- */
.pixel-lyric-box {
  margin: 40px auto;
  max-width: 600px;
  background-color: #000; /* 纯黑底 */
  border: 2px solid #C8102E; /* 利物浦红边框 */
  box-shadow: 
    4px 4px 0 #8B0000, /* 深红像素阴影 */
    0 0 20px rgba(200, 16, 46, 0.3); /* 红色发光 */
  font-family: 'VT323', monospace;
  color: #ddd;
  position: relative;
}

/* --- 头部 --- */
.box-header {
  background: #C8102E; /* 红底 */
  color: #fff;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.indicators .dot {
  display: inline-block;
  width: 8px; height: 8px;
  background: #000;
  margin-left: 4px;
}

/* --- 内容区 --- */
.box-content {
  padding: 20px;
  text-align: center;
  /* 添加扫描线背景纹理 */
  background-image: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(200, 16, 46, 0.1) 50%);
  background-size: 100% 4px;
}

.pixel-line {
  color: #555;
  letter-spacing: 2px;
  margin: 15px 0;
  overflow: hidden;
  white-space: nowrap;
}

/* 歌词文本 */
.verse {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #bbb;
}

/* --- 高潮部分 --- */
.chorus-box {
  border: 1px dashed #C8102E;
  padding: 20px;
  margin: 30px 0;
  background: rgba(200, 16, 46, 0.1);
}

.chorus {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  line-height: 1.4;
  text-shadow: 2px 2px 0 #C8102E;
  margin: 0;
}

.highlight {
  color: #ff3333; /* 更亮的红 */
  margin-top: 10px;
  text-shadow: 0 0 10px #ff0000;
}

/* 光标闪烁 */
.cursor {
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* --- 进度条 --- */
.progress-bar {
  width: 100%;
  height: 10px;
  background: #333;
  margin-top: 20px;
  border: 1px solid #555;
}

.progress-fill {
  width: 60%;
  height: 100%;
  background: #C8102E;
  position: relative;
}

/* 进度条头部的方块 */
.progress-fill::after {
  content: '';
  position: absolute;
  right: 0; top: 0;
  width: 10px; height: 100%;
  background: #fff;
}

.time-code {
  text-align: right;
  font-size: 1rem;
  color: #C8102E;
  margin-top: 5px;
}
</style>