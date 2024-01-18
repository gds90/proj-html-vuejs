<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
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
  </div>
</template>
<style lang="scss">
@use './assets/styles/generals.scss' as *;
</style>