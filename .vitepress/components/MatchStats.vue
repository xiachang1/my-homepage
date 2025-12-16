<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  homeName: { type: String, default: '主队' },
  awayName: { type: String, default: '客队' },
  stats: { type: Array, required: true }
})

const chartRef = ref(null)
let myChart = null

const initChart = () => {
  if (!chartRef.value) return
  myChart = echarts.init(chartRef.value)

  const categories = props.stats.map(item => item.name)
  const homeData = props.stats.map(item => -item.home)
  const awayData = props.stats.map(item => item.away)

  const option = {
    backgroundColor: 'transparent',
    // 提示框暗黑风
    tooltip: { 
      trigger: 'axis', 
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderColor: '#00f3ff',
      textStyle: { color: '#fff', fontFamily: 'monospace' },
      formatter: (params) => {
        const home = params[0]; const away = params[1];
        return `${home.name}<br/>${home.seriesName}: ${Math.abs(home.value)}<br/>${away.seriesName}: ${away.value}`;
      }
    },
    grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
    xAxis: [{ type: 'value', show: false }],
    yAxis: [{
      type: 'category', axisTick: { show: false }, data: categories,
      axisLabel: { color: '#00f3ff', fontWeight: 'bold', fontFamily: 'monospace' }, // 青色字体
      position: 'center', axisLine: { show: false }
    }],
    series: [
      {
        name: props.homeName, type: 'bar', stack: 'Total', data: homeData,
        itemStyle: { 
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#000' }, { offset: 1, color: '#00f3ff' }]), // 赛博蓝渐变
          borderRadius: [5, 0, 0, 5] 
        },
        label: { show: true, position: 'left', formatter: (v) => Math.abs(v.value), color: '#fff' }
      },
      {
        name: props.awayName, type: 'bar', stack: 'Total', data: awayData,
        itemStyle: { 
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#ff0055' }, { offset: 1, color: '#000' }]), // 赛博粉渐变
          borderRadius: [0, 5, 5, 0] 
        },
        label: { show: true, position: 'right', color: '#fff' }
      }
    ]
  }
  myChart.setOption(option)
}

onMounted(() => { initChart(); window.addEventListener('resize', () => myChart?.resize()) })
onUnmounted(() => { myChart?.dispose() })
</script>

<template>
  <div class="cyber-stats">
    <div class="score-board">
      <div class="team home">{{ homeName }}</div>
      <div class="vs">VS</div>
      <div class="team away">{{ awayName }}</div>
    </div>
    <div ref="chartRef" class="chart-box"></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

.cyber-stats {
  background: #050505;
  border: 1px solid #333;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.1);
  font-family: 'Share Tech Mono', monospace;
}

.score-board {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 24px; font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 10px;
}

.team.home { color: #00f3ff; text-shadow: 0 0 5px #00f3ff; }
.team.away { color: #ff0055; text-shadow: 0 0 5px #ff0055; }
.vs { color: #fff; font-style: italic; }

.chart-box { width: 100%; height: 400px; }
</style>