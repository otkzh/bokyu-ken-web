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
    font-size: 4rem;
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
  }
  &__logo {
    &-image {
      display: flex;
      align-items: center;
      width: 142px;
    }
  }
}
</style>
