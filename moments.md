---
title: 朝花夕拾
outline: deep
---

<script setup>
// 我们把数据定义在这里，既清晰又不会报错
const photoList = [
  { image: '/moments/2025届聊城一中老校区高三68班.jpg', text: '2025届聊城一中老校区高三68班' },
  { image: '/moments/青春应无悔.jpg', text: 'my bro' },
  { image: '/moments/欧冠冠军liverpool.jpg', text: '利物浦欧冠之夜' },
  { image: '/background/bg.jpg', text: '星月夜 - 我们的精神图腾' }
]
</script>

# 🌸 朝花夕拾

> 回忆是时间的琥珀，封存着我们最珍贵的瞬间。

## 📸 影像长廊

这里记录了那些不想忘记的瞬间。

<!-- 现在只需要传一个变量名 galleryItems，清爽干净 -->
<MemoryGallery :items="photoList" />

---

## 📂 珍贵档案柜

这里存放着一些值得下载保存的文件。

::: info 📥 档案下载
点击下方链接即可下载。
:::

| 文件名 | 类型 | 大小 | 下载 |
| :--- | :---: | :---: | :---: |
| **68FC 战术手稿.pdf** | PDF | 2.4 MB | [点击下载](/moments/tactics.pdf) |
| **高中毕业纪念册.zip** | ZIP | 50 MB | [点击下载](/moments/memory.zip) |
| **联赛规则章程 v1.0** | DOCX | 150 KB | [点击下载](/moments/rules.docx) |

<style>
table {
  width: 100%;
  margin-top: 20px;
  display: table;
}
th { background-color: #f1f3f4; }
a { color: #1a73e8; text-decoration: none; font-weight: bold; }
a:hover { text-decoration: underline; }
</style>