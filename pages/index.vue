<template>
  <div>
    <div>Slider</div>
    <div>Activity</div>

    <article>
      <ContentDoc :head="false" path="purpose" />
    </article>
    <article>
      <h2>Project</h2>
      <a href="project"> プロジェクト</a>
    </article>
    <article>
      <ContentDoc :head="false" path="organization" />
    </article>
    <article>
      <ContentDoc :head="false" path="history" />
    </article>
    <article>
      <ContentDoc :head="false" path="member" />
    </article>
    <article>
      <ContentDoc :head="false" path="partners" />
    </article>
  </div>
</template>

<script setup></script>

<style lang="scss">
body {
  font-family: "Noto Sans JP", serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0 80px;
}
h2 {
  font-family: "M PLUS Rounded 1c";
  width: 60%;
  margin: 20px auto 20px;
  font-size: 2.4rem;
  font-weight: normal;
  text-align: center;
  background-size: 1px 1px;
}
h3 {
  font-size: 1.8rem;
  font-weight: normal;
  margin: 20px auto 20px;
  text-align: center;
}

a {
  text-decoration: none;
}
// 偶数番目のarticle要素に背景色を付ける
article:nth-child(odd) {
  background-color: rgba(241, 225, 221, 1);
}
</style>
