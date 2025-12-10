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
/* 纯净版 CSS，去除了所有 Dark Mode 逻辑 */

.main-wrapper {
  /* 定义颜色变量 */
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

  /* 布局 */
  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 720px;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  padding: 48px;
  box-sizing: border-box;
}

/* 头部 */
.header { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; }
.avatar-container { flex-shrink: 0; }
.avatar {
  width: 80px; height: 80px; background-color: var(--primary-color);
  color: #fff; border-radius: 50%; display: flex;
  align-items: center; justify-content: center; font-size: 36px;
  font-weight: 500; box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.profile-info h1 { margin: 0; font-size: 28px; font-weight: 400; color: var(--text-primary); line-height: 1.2; }
.subtitle { font-size: 16px; color: var(--text-secondary); margin-top: 4px; }
.meta { font-size: 14px; color: var(--text-secondary); margin-top: 2px; }
.divider { height: 1px; background-color: var(--divider-color); margin: 24px 0 32px 0; }

/* 正文 */
section { margin-bottom: 40px; }
h2 { font-size: 20px; font-weight: 500; color: var(--primary-color); margin-bottom: 16px; margin-top: 0; letter-spacing: 0.2px; border: none; }
h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; margin-top: 0; color: var(--text-primary); }
p { margin-bottom: 12px; font-size: 16px; margin-top: 0; }

/* 68FC 故事块 */
.story-box { background-color: var(--story-bg); padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid var(--primary-color); }
.story-box p { margin-bottom: 8px; font-size: 15px; }
.quote { font-style: italic; color: var(--text-secondary); border-left: 3px solid var(--divider-color); padding-left: 16px; margin-top: 20px; }

/* 标签 */
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { background-color: var(--chip-bg); color: var(--chip-text); padding: 6px 16px; border-radius: 16px; font-size: 14px; font-weight: 500; display: inline-block; }

/* 路线图 */
.roadmap { display: flex; flex-direction: column; gap: 12px; }
.roadmap-item .time { font-size: 13px; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; }
.roadmap-item .content { font-size: 16px; }

/* 按钮 */
.button { display: inline-block; background-color: var(--primary-color); color: white; padding: 10px 24px; border-radius: 4px; text-decoration: none; font-weight: 500; transition: box-shadow 0.2s, background-color 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.2); }
.button:hover { background-color: #1765cc; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }

/* 页脚 */
footer { margin-top: 60px; text-align: center; font-size: 14px; color: #9aa0a6; border-top: 1px solid var(--divider-color); padding-top: 24px; }

@media (max-width: 600px) {
  .container { padding: 24px; }
  .header { flex-direction: column; text-align: center; gap: 16px; }
}
</style>