<script>
import BlogCard from './components/BlogCard.vue';
import AppBattleCard from './components/AppBattleCard.vue';
import { store } from './store.js';

export default {
  components: {
    AppBattleCard,
    BlogCard

  },
  data() {
    return {
      store
    }
  }
}
</script>
<template lang="">
  <div>
    <AppBattleCard />
    <BlogCard/>
  </div>
</template>
<style lang="scss">
@use './assets/styles/generals.scss' as *;
</style>