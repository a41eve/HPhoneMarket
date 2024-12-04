<template>
  <div class="landing-content">
    <div class="container">
      <header class="header">
        <a href="#" class="header-logo">
          <h1>HPhoneMarket</h1>
        </a>
        <nav class="header-nav">
          <ul class="header-nav__list">
            <li class="header-nav__item">
              <a href="#" class="header-nav__link">Главная</a>
            </li>
            <li class="header-nav__item">
              <a href="#" class="header-nav__link">Главная</a>
            </li>
            <li class="header-nav__item">
              <a href="#" class="header-nav__link">Главная</a>
            </li>
            <li class="header-nav__item">
              <a href="#" class="header-nav__link">Главная</a>
            </li>
            <li class="header-nav__item-btn">
              <button type="button">Войти</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing-content {
    width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  &-nav {
    &__list {
      display: flex;
      align-items: center;
      column-gap: 50px;
    }
  }
}
</style>
