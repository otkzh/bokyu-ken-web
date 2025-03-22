<template>
  <div>
    <TopSlider />
    <h2 id="news">Activity</h2>
    <ul>
      <li v-for="(article, index) in news" :key="index">
        <div class="news-box">
          <div>
            <span class="news-date">{{ formatDate(article.releaseDate) }}</span>
          </div>
          <div>
            <div v-if="article.eventDate" class="event-date">
              <span class="event-date-text">開催日</span>
              {{ formatDate(article.eventDate) }}
            </div>
            <nuxt-link :to="article._path" class="news-link">
              <span>{{ article.title }}</span>
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>

    <article>
      <ContentDoc :head="false" path="purpose" />
    </article>
    <article>
      <ContentDoc :head="false" path="project" />
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

<script setup>
// newsはreleaseDate新しい順にソートする
const news = await queryContent("/news").sort({ releaseDate: -1 }).find();
console.log(news);
</script>

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
/**
   * News
   */
#news + ul {
  list-style-type: none;
  padding: 0 8px;

  .news-box {
    display: flex;
  }
  .news-date {
    margin-right: 8px;
    font-weight: bold;
    font-size: 16px;
  }

  .event-date {
    font-size: 14px;
    display: inline-block;
    margin-right: 4px;

    &-text {
      color: #000;
      background-color: white;
      border: 1px solid #000;
      border-radius: 4px;
      padding: 2px;
    }
  }

  .news-link {
    text-decoration: none;
  }

  .news-report {
    font-size: 16px;
    color: white;
    background-color: rgb(83, 139, 0);
    border: 1px solid white;
    border-radius: 4px;
    padding: 2px;
  }
}
</style>
