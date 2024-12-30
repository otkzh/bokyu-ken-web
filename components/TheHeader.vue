<template>
  <header class="header">
    <div class="header__wrapper">
      <a href="/">
        <img class="header__logo" src="~assets/img/logo.png" alt="logo" />
      </a>
      <h1>一般社団法人　防窮研究所</h1>
      <h2>Institute of Poverty Prevention</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    width: 142px;
  }
}
h1 {
  font-size: 4rem;
  font-weight: normal;
  text-align: left;
}
h2 {
  font-size: 3ch;
  font-weight: normal;
  text-align: left;
}
</style>
