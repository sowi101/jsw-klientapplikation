<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

import { RouterLink, RouterView } from "vue-router";
import Header from './components/Header.vue';

export default {
  components: { Header },
}
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>

</style>
