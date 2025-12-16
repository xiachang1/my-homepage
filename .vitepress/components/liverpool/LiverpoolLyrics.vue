<template>
  <div class="hymn-container">
    <div class="hymn-content">
      <div class="ornament">❦</div>
      <p>When you walk through the storm</p>
      <p>Hold your head up high</p>
      <p>And don't be afraid of the dark</p>
      <p>At the end of the storm</p>
      <p>There's a golden sky</p>
      <p>And the sweet silver song of the lark</p>
      <br>
      <p class="highlight">Walk on, walk on, with hope in your heart</p>
      <p class="highlight">And you'll never walk alone</p>
      <div class="ornament">❦</div>
    </div>
  </div>
</template>

<style scoped>
.hymn-container {
  margin: 40px auto;
  max-width: 600px;
  background: #fff;
  border-top: 4px solid #C8102E;
  border-bottom: 4px solid #C8102E;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 40px;
  position: relative;
}

.hymn-content {
  text-align: center;
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #2c3e50;
  line-height: 2;
  font-size: 16px;
  letter-spacing: 0.5px;
}

.ornament {
  color: #d4af37; /* 金色装饰 */
  font-size: 24px;
  margin: 10px 0;
}

.highlight {
  color: #C8102E;
  font-weight: bold;
  font-size: 18px;
}
</style>