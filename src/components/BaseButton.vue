<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

export default {
  name: "BaseButton",
  props: {
    text: String,
  }
}
</script>
  
<template>
  <!-- Button element -->
  <button class="btn btn-color fw-bold w-100">
    {{ text }}
  </button>
</template>

<style scoped>
/* Default colors for BaseButton */
.btn-color {
  background-color: #B0D0D3;
  color: #333333;
}
.btn-color:hover {
  background-color: #97C0C4;
  color: #333333;
}
</style>