<template>
  <div class="main-wrapper">
    <div class="container card">
      <!-- 头部信息 -->
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

      <!-- 关于我 -->
      <section>
        <h2>关于我</h2>
        <p>我是西南大学软件工程（中外合作办学）的大一新生，正在学习网页开发，喜欢把想法做成小项目。性格随和，乐于探索新事物。</p>
      </section>

      <!-- 兴趣 -->
      <section>
        <h2>兴趣</h2>
        <div class="chips">
          <span class="chip">弹钢琴</span>
          <span class="chip">踢足球</span>
          <span class="chip">数学与计算机</span>
          <span class="chip">烹饪 (素菜)</span>
        </div>
      </section>

      <!-- 技能 -->
      <section>
        <h2>技能</h2>
        <p class="meta">HTML · CSS · JavaScript · 基础算法</p>
        <p>擅长棋类博弈：象棋、围棋，以及在此刻依然挑战电脑 AI 的国际象棋。</p>
      </section>
      <!-- 关于 68FC -->
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
      <!-- 我和利物浦 -->
      <section>
        <h2>我和利物浦</h2>
        <div class="liverpool">
          <p>我是利物浦的死忠粉。从初中开始，红军那不屈不挠的精神就深深吸引了我。萨拉赫的进球、范戴克的防守、亨德森的铁血，构成了我对足球理解的基石。安菲尔德的奇迹时刻，教会了我永不放弃。</p>
        </div>
      </section>

      <!-- 未来规划 -->
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

      <!-- 联系 -->
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
/* Google Material Design Style - 支持暗黑模式 */

/* 1. 默认（亮色模式）变量定义 */
.main-wrapper {
  /* 亮色模式下的颜色 */
  --primary-color: #1a73e8;       /* Google 蓝 */
  --text-primary: #202124;        /* 深灰字 */
  --text-secondary: #5f6368;      /* 浅灰字 */
  --bg-color: #f8f9fa;            /* 网页背景灰 */
  --card-bg: #ffffff;             /* 卡片背景白 */
  --divider-color: #e8eaed;       /* 分割线 */
  --chip-bg: #e8f0fe;             /* 标签背景浅蓝 */
  --chip-text: #1967d2;           /* 标签文字深蓝 */
  --box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
  
  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  
  /* 布局设置 */
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  transition: background-color 0.3s, color 0.3s; /* 让颜色切换有过渡动画 */
}

/* 2. 暗黑模式变量覆盖 (关键代码！) */
/* 当 HTML 标签有 .dark 类时，修改 .main-wrapper 里的变量 */
:global(.dark) .main-wrapper {
  --primary-color: #8ab4f8;       /* 浅蓝色（暗色模式下蓝色要亮一点才看得清） */
  --text-primary: #e8eaed;        /* 浅灰白字 */
  --text-secondary: #9aa0a6;      /* 灰字 */
  --bg-color: #1b1b1f;            /* 深色背景 */
  --card-bg: #202124;             /* 深色卡片 */
  --divider-color: #3c4043;       /* 深色分割线 */
  --chip-bg: #172840;             /* 标签背景深蓝 */
  --chip-text: #8ab4f8;           /* 标签文字浅蓝 */
  --box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 4px 8px 3px rgba(0, 0, 0, 0.3); /* 加深阴影 */
}

.container {
  width: 100%;
  max-width: 720px;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 48px;
  box-sizing: border-box;
  transition: background-color 0.3s;
}

/* Header Section */
.header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.avatar-container {
  flex-shrink: 0;
}

.avatar {
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  color: #ffffff; /* 头像里的字永远是白色，不用变 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

:global(.dark) .avatar {
  color: #1f1f1f; /* 暗色模式下，蓝色背景变亮了，这里的字最好变黑一点增加对比度 */
}

.profile-info h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.2;
}

.subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.meta {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.divider {
  height: 1px;
  background-color: var(--divider-color);
  margin: 24px 0 32px 0;
}

/* Typography & Layout */
section {
  margin-bottom: 40px;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 16px;
  margin-top: 0;
  letter-spacing: 0.2px;
  border: none;
}

h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 0;
  color: var(--text-primary);
}

p {
  margin-bottom: 12px;
  font-size: 16px;
  margin-top: 0;
}

/* 68FC Story Boxes */
.story-box {
  /* 这里也要单独处理一下背景色，太亮了在暗色模式刺眼 */
  background-color: #f1f3f4;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border-left: 4px solid var(--primary-color);
}

/* 暗色模式下的 Story Box 背景 */
:global(.dark) .story-box {
  background-color: #303134; 
}

.story-box p {
  margin-bottom: 8px;
  font-size: 15px;
}

.story-box p:last-child {
  margin-bottom: 0;
}

.quote {
  font-style: italic;
  color: var(--text-secondary);
  border-left: 3px solid var(--divider-color);
  padding-left: 16px;
  margin-top: 20px;
}

/* Chips for Interests */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background-color: var(--chip-bg);
  color: var(--chip-text);
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
}

/* Roadmap List */
.roadmap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.roadmap-item {
  display: flex;
  flex-direction: column;
}

.roadmap-item .time {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.roadmap-item .content {
  font-size: 16px;
}

/* Button */
.button {
  display: inline-block;
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: box-shadow 0.2s, background-color 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

:global(.dark) .button {
  color: #1f1f1f; /* 暗色按钮文字变深，增加可读性 */
}

.button:hover {
  filter: brightness(1.1); /* 鼠标悬停变亮一点 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Footer */
footer {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
  color: var(--text-secondary);
  border-top: 1px solid var(--divider-color);
  padding-top: 24px;
}

/* Mobile Responsive */
@media (max-width: 600px) {
  .container {
    padding: 24px;
  }
  
  .header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .avatar {
    width: 72px;
    height: 72px;
    font-size: 32px;
  }
}
</style>