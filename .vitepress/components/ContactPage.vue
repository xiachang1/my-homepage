<script setup>
import { ref } from 'vue'

const copied = ref(false)
const email = 'A17852262638@outlook.com'

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (err) {
    console.error('Failed to copy!', err)
  }
}
</script>

<template>
  <div class="contact-terminal">
    
    <!-- 标题区 -->
    <h1 class="terminal-title">📡 ESTABLISHING CONNECTION...</h1>
    <blockquote class="terminal-quote">
      "发现花朵之美的，就是人."
    </blockquote>

    <!-- 1. 邮箱板块 -->
    <div class="channel-box">
      <div class="channel-header">
        <span class="icon">📧</span> PROTOCOL: EMAIL
      </div>
      <div class="channel-body" @click="copyEmail">
        <span class="command">> SEND_MAIL_TO:</span>
        <span class="value">{{ email }}</span>
        <span class="cursor" v-if="!copied">_</span>
        
        <!-- 复制反馈提示 -->
        <div class="copy-status" :class="{ show: copied }">
          [ COPIED TO CLIPBOARD ]
        </div>
      </div>
      <div class="channel-footer">
        Click to copy address
      </div>
    </div>

    <!-- 2. GitHub 板块 -->
    <div class="channel-box">
      <div class="channel-header">
        <span class="icon">🐙</span> PROTOCOL: GITHUB
      </div>
      <a href="https://github.com/xiachang1" target="_blank" class="channel-body link-mode">
        <span class="command">> ACCESS_REPO:</span>
        <span class="value">github.com/xiachang1</span>
        <span class="arrow">↗</span>
      </a>
      <div class="channel-footer">
        View source code & contributions
      </div>
    </div>

    <!-- 3. Gitee 板块 -->
    <div class="channel-box">
      <div class="channel-header">
        <span class="icon">📦</span> PROTOCOL: GITEE
      </div>
      <a href="https://gitee.com/fyfsych" target="_blank" class="channel-body link-mode">
        <span class="command">> ACCESS_MIRROR:</span>
        <span class="value">gitee.com/fyfsych</span>
        <span class="arrow">↗</span>
      </a>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.contact-terminal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
  font-family: 'VT323', monospace;
  padding: 10px;
}

/* 标题样式 */
.terminal-title {
  grid-column: 1 / -1;
  font-size: 2.5rem;
  /* ▼▼▼ 加 !important 防止被全局样式覆盖 ▼▼▼ */
  color: #00ff00 !important; 
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  text-align: center;
  margin-bottom: 0;
  border: none !important;
}

.terminal-quote {
  grid-column: 1 / -1;
  text-align: center;
  /* ▼▼▼ 强制绿色 ▼▼▼ */
  color: #8f8 !important;
  border-left: 4px solid #00ff00 !important;
  background: rgba(0, 255, 0, 0.05) !important;
  padding: 10px;
  margin-bottom: 30px;
  font-style: italic;
}

/* 通道盒子 */
.channel-box {
  background: #000;
  border: 2px solid #333;
  padding: 2px;
  transition: all 0.3s;
  position: relative; /* 为了定位 */
}

.channel-box:hover {
  border-color: #00ff00;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
  transform: translateY(-5px);
  z-index: 10;
}

/* 头部 */
.channel-header {
  background: #222;
  color: #fff;
  padding: 5px 10px;
  font-size: 1.2rem;
  border-bottom: 2px solid #333;
}

/* 主体区域 */
.channel-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  position: relative;
  text-decoration: none !important;
  height: 100px; /* 固定高度 */
  justify-content: center;
}

/* 链接模式 */
.channel-body.link-mode {
  color: inherit;
}

.command { 
  /* ▼▼▼ 强制浅绿或灰色 ▼▼▼ */
  color: #88cc88 !important; 
  font-size: 1rem; 
}

.value { 
  /* ▼▼▼ 强制亮绿色 (原来是白色，现在统一成黑客绿更帅) ▼▼▼ */
  color: #00ff00 !important; 
  font-size: 1.4rem; 
  letter-spacing: 1px; 
  word-break: break-all; 
  text-shadow: 0 0 5px rgba(0,255,0,0.3);
}

.cursor { 
  animation: blink 1s infinite; 
  color: #00ff00 !important; 
}

.arrow { 
  position: absolute; right: 15px; top: 50%; transform: translateY(-50%); 
  color: #00ff00 !important; /* 箭头也改绿 */
  font-size: 1.5rem; 
}

/* 底部说明 */
.channel-footer {
  background: #111;
  color: #555;
  font-size: 0.9rem;
  padding: 5px 10px;
  text-align: right;
  border-top: 1px dashed #333;
}

/* 复制成功的提示 */
.copy-status {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 255, 0, 0.95);
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.copy-status.show {
  opacity: 1;
}

@keyframes blink { 50% { opacity: 0; } }

/* 移动端适配 */
@media (max-width: 600px) {
  .contact-terminal { grid-template-columns: 1fr; }
}
</style>