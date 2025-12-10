<script setup>
import { useData } from 'vitepress'
// 获取控制权
const { isDark } = useData()
// 点击切换函数
const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="main-wrapper">
    <div class="container card">
      
      <!-- 切换按钮 -->
      <button class="theme-toggle" @click="toggleTheme" title="切换模式">
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>

      <header class="header">
        <div class="avatar-container">
          <div class="avatar">王</div>
        </div>
        <div class="profile-info">
          <h1>王一尧</h1>
          <div class="subtitle">西南大学 软件工程（中外合作办学） 大一</div>
          <div class="meta">正在学习 Web 开发与全栈技术</div>
        </div>
      </header>

      <div class="divider"></div>

      <section>
        <h2>关于我</h2>
        <p>我是西南大学软件工程（中外合作办学）的大一新生，正在学习网页开发，喜欢把想法做成小项目。性格随和，乐于探索新事物。</p>
      </section>
      
      <section>
        <h2>关于 68FC</h2>
        <p class="intro-text">
          68FC 是我们在聊城一中老校区 2025 届高三 68 班成立的足球社群，承载了我们整个高三热血与汗水的记忆。
        </p>
        
        <div class="story-box">
          <h3>起源与发展</h3>
          <p>
            一切始于 2023 年寒冷的冬天。由 68 班与 71 班热爱足球的同学们共同组建，最初演化为“黑人国际（NGI）”与“皇家松果（RSG）”两支队伍。随着赛季的推进与人员的流动，联赛逐渐走向正规化与白热化。
          </p>
        </div>

        <div class="story-box">
          <h3>双雄争霸：SGI vs RSE</h3>
          <p>
            2024 年春天，联赛迎来了重大改革。**宋国国际（SGI）**代表了本土足球的坚守，而新兴势力**皇家六八（RSE）**则强势崛起。
          </p>
          <p>
            两队的对决总是充满火药味与激情：从徐鹏飞的开局闪击，到 RSE 的绝平逆转；从白道国的处子秀梅开二度，到马敏畅的一条龙破门。虽然我们经常在球场上针锋相对，但这正是 68FC 独有的羁绊——在对抗中从不缺乏兄弟情谊。
          </p>
        </div>
        <p class="quote">
          “无论是主力还是替补，甚至是被戏称为‘虚蛋’或‘火炮’的队友，每个人都是 68FC 不可或缺的一块拼图。”
        </p>
      </section>

      <section>
        <h2>兴趣</h2>
        <div class="chips">
          <span class="chip">弹钢琴</span>
          <span class="chip">踢足球</span>
          <span class="chip">数学与计算机</span>
          <span class="chip">烹饪 (素菜)</span>
        </div>
      </section>

      <section>
        <h2>技能</h2>
        <p class="meta">HTML · CSS · JavaScript · 基础算法</p>
        <p>擅长棋类博弈：象棋、围棋，以及在此刻依然挑战电脑 AI 的国际象棋。</p>
      </section>

      <section>
        <h2>我和利物浦</h2>
        <div class="liverpool">
          <p>我是利物浦的死忠粉。从初中开始，红军那不屈不挠的精神就深深吸引了我。萨拉赫的进球、范戴克的防守、亨德森的铁血，构成了我对足球理解的基石。安菲尔德的奇迹时刻，教会了我永不放弃。</p>
        </div>
      </section>

      <section>
        <h2>未来规划</h2>
        <p>我的长期目标是创办一家专注 <strong>AI 时代新型网络安全</strong>的科技公司。</p>
        <div class="roadmap">
          <div class="roadmap-item">
            <span class="time">短期 (1-2年)</span>
            <span class="content">完成视频/音频鉴伪原型，积累数据集。</span>
          </div>
          <div class="roadmap-item">
            <span class="time">中期 (3-5年)</span>
            <span class="content">将核心能力封装为 API/SDK，获取首批客户。</span>
          </div>
          <div class="roadmap-item">
            <span class="time">长期 (5-10年)</span>
            <span class="content">成立公司，成为国内 AI 安全领域的技术输出者。</span>
          </div>
        </div>
      </section>

      <section>
        <h2>联系</h2>
        <a href="mailto:A17852262638@outlook.com" class="button">发送邮件</a>
      </section>

      <footer>
        <p>© 2025 王一尧 | It's not over.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container { position: relative; }
.theme-toggle {
  position: absolute; top: 24px; right: 24px; z-index: 100;
  background: transparent; border: none; cursor: pointer;
  color: var(--text-secondary); padding: 8px; border-radius: 50%;
  transition: all 0.3s ease; display: flex;
}
.theme-toggle:hover {
  background-color: var(--chip-bg); color: var(--primary-color); transform: rotate(15deg);
}

/* 亮色变量 */
.main-wrapper {
  --primary-color: #1a73e8;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --text-primary: #202124;
  --text-secondary: #5f6368;
  --divider-color: #e8eaed;
  --chip-bg: #e8f0fe;
  --chip-text: #1967d2;
  --story-bg: #f1f3f4;
  --card-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
}

/* 暗色变量 */
:global(.dark) .main-wrapper {
  --primary-color: #8ab4f8;
  --bg-color: #1b1b1f;
  --card-bg: #2e2e32;
  --text-primary: #e3e3e3;
  --text-secondary: #a1a1aa;
  --divider-color: #454545;
  --chip-bg: #283244;
  --chip-text: #8ab4f8;
  --story-bg: #3c3c3e;
  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

/* 通用布局 */
.main-wrapper {
  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  display: flex; justify-content: center; padding: 40px 16px;
  min-height: 100vh; box-sizing: border-box; width: 100%;
  transition: background-color 0.3s, color 0.3s;
}

.container {
  width: 100%; max-width: 720px; background-color: var(--card-bg);
  border-radius: 8px; box-shadow: var(--card-shadow);
  padding: 48px; box-sizing: border-box;
  transition: background-color 0.3s;
}

.header { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; }
.avatar-container { flex-shrink: 0; }
.avatar {
  width: 80px; height: 80px; background-color: var(--primary-color);
  color: #fff; border-radius: 50%; display: flex;
  align-items: center; justify-content: center; font-size: 36px;
  font-weight: 500; box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
:global(.dark) .avatar { color: #1b1b1f; }

.profile-info h1 { margin: 0; font-size: 28px; font-weight: 400; color: var(--text-primary); line-height: 1.2; }
.subtitle { font-size: 16px; color: var(--text-secondary); margin-top: 4px; }
.meta { font-size: 14px; color: var(--text-secondary); margin-top: 2px; }
.divider { height: 1px; background-color: var(--divider-color); margin: 24px 0 32px 0; }
section { margin-bottom: 40px; }
h2 { font-size: 20px; font-weight: 500; color: var(--primary-color); margin-bottom: 16px; margin-top: 0; letter-spacing: 0.2px; border: none; }
h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; margin-top: 0; color: var(--text-primary); }
p { margin-bottom: 12px; font-size: 16px; margin-top: 0; color: var(--text-primary); }
.story-box { background-color: var(--story-bg); padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid var(--primary-color); }
.story-box p { margin-bottom: 8px; font-size: 15px; }
.quote { font-style: italic; color: var(--text-secondary); border-left: 3px solid var(--divider-color); padding-left: 16px; margin-top: 20px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { background-color: var(--chip-bg); color: var(--chip-text); padding: 6px 16px; border-radius: 16px; font-size: 14px; font-weight: 500; display: inline-block; }
.roadmap { display: flex; flex-direction: column; gap: 12px; }
.roadmap-item .time { font-size: 13px; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; }
.roadmap-item .content { font-size: 16px; color: var(--text-primary); }
.button { display: inline-block; background-color: var(--primary-color); color: #fff; padding: 10px 24px; border-radius: 4px; text-decoration: none; font-weight: 500; transition: box-shadow 0.2s, background-color 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.2); }
:global(.dark) .button { color: #1b1b1f; font-weight: 600; }
.button:hover { filter: brightness(1.1); box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
footer { margin-top: 60px; text-align: center; font-size: 14px; color: var(--text-secondary); border-top: 1px solid var(--divider-color); padding-top: 24px; }
@media (max-width: 600px) {
  .container { padding: 24px; }
  .header { flex-direction: column; text-align: center; gap: 16px; }
  .theme-toggle { top: 16px; right: 16px; }
}
</style>