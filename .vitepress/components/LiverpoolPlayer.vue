<script setup>
import { ref, onMounted } from 'vue'

const audioRef = ref(null)
const isPlaying = ref(false)

// 切换播放/暂停
const togglePlay = () => {
  const audio = audioRef.value
  if (isPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }
  isPlaying.value = !isPlaying.value
}

// 自动播放尝试 (浏览器可能拦截，所以需要 catch)
onMounted(() => {
  const audio = audioRef.value
  // 设置音量适中，别太吓人
  audio.volume = 0.5 
  
  // 尝试自动播放
  audio.play().then(() => {
    isPlaying.value = true
  }).catch((e) => {
    // 如果浏览器拦截了自动播放，就保持暂停状态，等待用户点击
    console.log("Autoplay blocked, waiting for user interaction.")
  })
})
</script>

<template>
  <div class="player-wrapper">
    <!-- 隐藏的音频标签 -->
    <audio ref="audioRef" src="/liverpool/ynwa.mp3" loop></audio>

    <!-- 悬浮播放按钮 -->
    <button 
      class="music-btn" 
      :class="{ 'playing': isPlaying }" 
      @click="togglePlay"
      title="You'll Never Walk Alone"
    >
      <!-- 播放时显示的图标 (音符) -->
      <span v-if="isPlaying">🎵</span>
      <!-- 暂停时显示的图标 (播放键) -->
      <span v-else>▶️</span>
    </button>
    
    <!-- 歌词/标语提示 (可选) -->
    <div class="lyrics-tip" :class="{ 'show': isPlaying }">
      YNWA 🔴
    </div>
  </div>
</template>

<style scoped>
/* 固定在右下角 */
.player-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 200; /* 保证在最上层 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

/* 按钮主体：利物浦红 */
.music-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #C8102E; /* Official Liverpool Red */
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(200, 16, 46, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* 鼠标悬停 */
.music-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(200, 16, 46, 0.6);
}

/* 播放时的呼吸动画 */
.music-btn.playing {
  animation: pulse 2s infinite;
}

/* 呼吸动画关键帧 */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(200, 16, 46, 0); }
  100% { box-shadow: 0 0 0 0 rgba(200, 16, 46, 0); }
}

/* 小标语 */
.lyrics-tip {
  font-size: 12px;
  font-weight: bold;
  color: #C8102E;
  opacity: 0;
  transition: opacity 0.5s;
  background: rgba(255,255,255,0.8);
  padding: 2px 6px;
  border-radius: 4px;
}

.lyrics-tip.show {
  opacity: 1;
}
</style>