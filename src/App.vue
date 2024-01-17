<script>

import AppBattleCard from './components/AppBattleCard.vue';
import { store } from './store.js';

export default {
  components:{
    AppBattleCard
  },
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <div>
    <AppBattleCard />
  </div>
</template>
<style lang="scss">
@use './assets/styles/generals.scss' as *;
</style>