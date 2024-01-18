<script>
import BlogCard from './components/BlogCard.vue';
import AppBattleCard from './components/AppBattleCard.vue';
import Title from './components/Title.vue';
import { store } from './store.js';

export default {
  components: {
    AppBattleCard,
    BlogCard,
    Title

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
    <Title />
  </div>
</template>
<style lang="scss">
@use './assets/styles/generals.scss' as *;
</style>