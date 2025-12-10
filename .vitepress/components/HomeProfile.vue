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
            一切始于 2023 年寒冷的冬天。由 68 班与 71 班热爱足球的同学们共同组建，最初演化为“黑人国际（NGI）”与“皇家松果（RSG）”两支队伍。
          </p>
        </div>

        <div class="story-box">
          <h3>双雄争霸：SGI vs RSE</h3>
          <p>
            2024 年春天，联赛迎来了重大改革。**宋国国际（SGI）**与**皇家六八（RSE）**强势崛起。两队的对决总是充满火药味与激情。
          </p>
        </div>
        <p class="quote">
          “无论是主力还是替补，每个人都是 68FC 不可或缺的一块拼图。”
        </p>
      </section>

      <!-- 兴趣 -->
      <section>
        <h2>兴趣</h2>
        <div class="chips">
          <span class="chip">🎹 弹钢琴</span>
          <span class="chip">⚽ 踢足球</span>
          <span class="chip">VX 数学与计算机</span>
          <span class="chip">🍳 烹饪 (素菜)</span>
        </div>
      </section>

      <!-- 技能 (升级版) -->
      <section>
        <h2>技术栈</h2>
        <div class="skill-wall">
          <img src="https://skillicons.dev/icons?i=html,css,js,vue,vite,git,github,vscode,python,mysql&perline=10" alt="My Skills" />
        </div>
        <p style="margin-top: 12px; font-size: 14px; color: #555;">
          擅长棋类博弈：象棋、围棋，以及在此刻依然挑战电脑 AI 的国际象棋。
        </p>
      </section>

      <!-- 我和利物浦 -->
      <section>
        <h2>我和利物浦</h2>
        <div class="liverpool">
          <p>我是利物浦的死忠粉。从初中开始，红军那不屈不挠的精神就深深吸引了我。安菲尔德的奇迹时刻，教会了我永不放弃。</p>
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
/* 1. 动态流光背景 */
.main-wrapper {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  
  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
  color: #202124;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 2. 毛玻璃卡片 */
.container {
  width: 100%;
  max-width: 720px;
  background: rgba(255, 255, 255, 0.9); /* 90%不透明度 */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  padding: 48px;
  box-sizing: border-box;
}

/* 头部 */
.header { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; }
.avatar-container { flex-shrink: 0; }

/* 3. 头像旋转特效 */
.avatar {
  width: 80px; height: 80px; 
  background-color: #1a73e8;
  color: #fff; border-radius: 50%; display: flex;
  align-items: center; justify-content: center; font-size: 36px;
  font-weight: 500; box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.6s ease-in-out;
  cursor: pointer;
}
.avatar:hover {
  transform: rotate(360deg) scale(1.1); /* 旋转并放大 */
}

.profile-info h1 { margin: 0; font-size: 28px; font-weight: 700; color: #333; line-height: 1.2; }
.subtitle { font-size: 16px; color: #5f6368; margin-top: 4px; font-weight: 500;}
.meta { font-size: 14px; color: #5f6368; margin-top: 2px; }
.divider { height: 1px; background-color: rgba(0,0,0,0.1); margin: 24px 0 32px 0; }

/* 正文 */
section { margin-bottom: 40px; }
h2 { font-size: 20px; font-weight: 700; color: #1a73e8; margin-bottom: 16px; margin-top: 0; letter-spacing: 0.2px; border: none; }
h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; margin-top: 0; color: #333; }
p { margin-bottom: 12px; font-size: 16px; margin-top: 0; }

/* 故事块 */
.story-box { background-color: rgba(26, 115, 232, 0.1); padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 4px solid #1a73e8; }
.story-box p { margin-bottom: 8px; font-size: 15px; }
.quote { font-style: italic; color: #666; border-left: 3px solid #ccc; padding-left: 16px; margin-top: 20px; }

/* 技能墙 */
.skill-wall { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.skill-wall img { max-width: 100%; height: auto; }

/* 标签 */
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { background-color: #e8f0fe; color: #1967d2; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; display: inline-block; transition: transform 0.2s;}
.chip:hover { transform: translateY(-2px); }

/* 路线图 */
.roadmap { display: flex; flex-direction: column; gap: 12px; }
.roadmap-item .time { font-size: 13px; font-weight: 700; color: #5f6368; text-transform: uppercase; }
.roadmap-item .content { font-size: 16px; }

/* 按钮 */
.button { display: inline-block; background-color: #1a73e8; color: white; padding: 12px 28px; border-radius: 30px; text-decoration: none; font-weight: 500; transition: all 0.3s; box-shadow: 0 4px 6px rgba(26, 115, 232, 0.3); }
.button:hover { background-color: #1765cc; box-shadow: 0 6px 12px rgba(26, 115, 232, 0.4); transform: translateY(-2px); }

/* 页脚 */
footer { margin-top: 60px; text-align: center; font-size: 14px; color: #888; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 24px; }

@media (max-width: 600px) {
  .container { padding: 24px; }
  .header { flex-direction: column; text-align: center; gap: 16px; }
}
</style>