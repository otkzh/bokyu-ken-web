<template>
  <footer class="footer">
    <div class="footer__content">
      <h3 class="footer__title">連絡先</h3>
      <p class="footer__text">研究所 所長: 白取 耕一郎（Koichiro Shiratori）</p>
      <p class="footer__text">
        住所: 〒603-8143 京都府京都市北区小山上総町 大谷大学内 白取研究室
      </p>
      <p class="footer__text">
        Shiratori Laboratory, Otani University, Koyama Kamifusa-cho, Kita-ku,
        Kyoto 603-8143, Japan
      </p>
      <p class="footer__text">
        本部は大谷大学社会学部の白取研究室に設置、防窮研究に関して関西を中心に若手研究者や地方自治体関係者に各種社会法人と一緒に、大谷大学の学生も交えて調査・研究活動を行っています。
      </p>
      <p class="footer__text">
        メールアドレス:
        inst.poverty.prevention※gmail.com（※の部分に@を入れて下さい）
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: left;
  &__content {
    max-width: 800px;
    margin: 0 auto;
  }
  &__title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  &__text {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.5;
  }
}

.header {
  &__wrapper {
    @media screen and (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__logo {
    width: 142px;
  }
  &__menu {
    display: flex;
    @media screen and (max-width: 600px) {
      display: inline-block;
      text-align: right;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 0 16px;
      font-size: 15px;
      list-style: none;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
