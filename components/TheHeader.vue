<template>
  <header class="header">
    <div class="header__wrapper">
      <a href="/" class="header__logo">
        <img class="header__logo-image" src="~assets/img/logo.png" alt="logo" />
      </a>
      <div class="header__titles">
        <h1 class="header__title">一般社団法人 防窮研究所</h1>
        <h2 class="header__subtitle">Institute of Poverty Prevention</h2>
      </div>
      <a href="https://forms.gle/gcBYv374vTtaQBPP8" target="_blank" class="contact-button">お問い合わせ</a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  padding: 8px;
  border-bottom: 1px solid #ddd;

  &__titles {
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 3rem;
    font-weight: normal;
    text-align: left;
    margin: 0;
  }
  &__subtitle {
    font-size: 2rem;
    font-weight: normal;
    text-align: left;
    width: 100%;
    margin: 0;
  }
  &__wrapper {
    display: flex;
    padding: 4px;
    flex-wrap: wrap;
  }
  &__logo {
    &-image {
      display: flex;
      align-items: center;
      width: 80px;
    }
  }

  @media (max-width: 768px) {
    &__title {
      font-size: 2rem;
    }
    &__subtitle {
      font-size: 1.5rem;
    }
    &__wrapper {
      flex-direction: column;
      align-items: center;
    }
    &__logo {
      margin-bottom: 8px;
    }
  }

  // Contact button styles
  .contact-button {
  padding: 8px 16px;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  position: absolute;
  top: 20px;
  right: 20px;
}

}
</style>
