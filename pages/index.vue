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
      <ContentDoc :head="false" path="member" class="member"/>
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
  padding: 0 24px;
}
@media (max-width: 768px) {
  body {
    padding: 0 8px;
  }
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
// リストのスタイル
ul {
  list-style: none;
  padding: 4px 0;
  margin: 0;

  li {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 8px 16px;
    // border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ul {
      padding-left: 15px;
      margin-top: 8px;

      li {
        box-shadow: none;
        background-color: transparent;
        padding: 4px 0;
        font-size: 14px;
        border-bottom: 1px dashed #ddd;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

// Member
.prose img {
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.prose ul {
  list-style: none;
  padding: 0;
}

.prose ul li {
  margin-bottom: 4px;
}

.prose h2 {
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: bold;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
}

.member {
// ul>liをflexで3列に並べる
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; // 左詰めに変更
    margin: 0 -8px;

    li {
        width: calc(33.333% - 16px);
        margin: 0 8px 16px;
        box-sizing: border-box;

        // スマホの場合は2列にする
        @media (max-width: 768px) {
            width: calc(50% - 16px);
            margin: 0 8px 16px;
        }

        // 最後の要素の右余白を削除
        &:nth-child(3n) {
            margin-right: 0;
        }

        @media (max-width: 768px) {
            &:nth-child(2n) {
                margin-right: 0;
            }
        }


      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      // liの中のulは1列にする
      ul {
        display: block;
        margin: 0;
        padding: 0;

        li {
          width: 100%;
          margin-bottom: 4px;
          font-size: 14px;
          border-bottom: none;
          padding: 0;
          &:first-child {
            font-weight: bold;
            font-size: 16px;
          }
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>
