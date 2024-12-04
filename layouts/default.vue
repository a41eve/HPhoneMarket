<template>
  <div class="main-wrapper">
    <active-header></active-header>
    
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ActiveHeader from "~/components/header/ActiveHeader.vue";

export default {
  components: {
    ActiveHeader,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
}

.content-wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.content-wrapper > :first-child {
  flex: 1 0 auto;
}
</style>
