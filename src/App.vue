<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
    }
  }
}
</script>
<template lang="">
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>
<style lang="scss">
@use './assets/styles/generals.scss' as *;
@use './assets/styles/partials/variables' as *;
</style>