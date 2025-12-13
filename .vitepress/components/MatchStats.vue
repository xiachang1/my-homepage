<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  homeName: { type: String, default: '主队' },
  awayName: { type: String, default: '客队' },
  // 数据格式：[{ name: '射门', home: 14, away: 18 }, ...]
  stats: { type: Array, required: true }
})

const chartRef = ref(null)
let myChart = null

const initChart = () => {
  if (!chartRef.value) return
  myChart = echarts.init(chartRef.value)

  // 提取数据
  const categories = props.stats.map(item => item.name)
  const homeData = props.stats.map(item => -item.home) // 左侧用负数实现
  const awayData = props.stats.map(item => item.away)

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params) => {
        // 自定义提示框，把负数转回正数显示
        const home = params[0];
        const away = params[1];
        return `${home.name}<br/>
                ${home.seriesName}: ${Math.abs(home.value)}<br/>
                ${away.seriesName}: ${away.value}`;
      }
    },
    legend: {
      data: [props.homeName, props.awayName],
      bottom: 0,
      textStyle: { color: '#666' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        show: false // 隐藏 X 轴刻度
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: categories,
        axisLabel: {
          color: '#333',
          fontWeight: 'bold',
          fontSize: 13,
          align: 'center',
          margin: 0, // 让文字居中
          padding: [0, 0, 0, 0] // 特殊处理：文字其实是盖在中间的
        },
        // 让 Y 轴线在中间
        position: 'center', 
        axisLine: { show: false } // 隐藏轴线
      }
    ],
    series: [
      {
        name: props.homeName,
        type: 'bar',
        stack: 'Total',
        data: homeData,
        itemStyle: {
          color: '#1a73e8', // 蓝色 (RSE)
          borderRadius: [5, 0, 0, 5]
        },
        label: {
          show: true,
          position: 'left',
          formatter: (v) => Math.abs(v.value) // 显示正数
        }
      },
      {
        name: props.awayName,
        type: 'bar',
        stack: 'Total',
        data: awayData,
        itemStyle: {
          color: '#e73c7e', // 红色 (SGI)
          borderRadius: [0, 5, 5, 0]
        },
        label: {
          show: true,
          position: 'right'
        }
      }
    ]
  }

  myChart.setOption(option)
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => myChart?.resize())
})

onUnmounted(() => {
  myChart?.dispose()
})
</script>

<template>
  <div class="match-stats-container">
    <!-- 比分板 -->
    <div class="score-board">
      <div class="team home">{{ homeName }}</div>
      <div class="score">VS</div>
      <div class="team away">{{ awayName }}</div>
    </div>
    
    <!-- 图表 -->
    <div ref="chartRef" class="chart-box"></div>
  </div>
</template>

<style scoped>
.match-stats-container {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin: 20px 0;
  border: 1px solid #eee;
}

.score-board {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  padding: 0 40px;
}

.team.home { color: #1a73e8; }
.team.away { color: #e73c7e; }
.score { color: #ccc; font-size: 16px; }

.chart-box {
  width: 100%;
  height: 400px;
}
</style>