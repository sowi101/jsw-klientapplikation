<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

export default {
  name: "SubmitButton",
  props: {
    value: {
      type: String,
    },
  }
}
</script>
  
<template>
    <!-- Button element  -->
    <input type="submit" :value="value" class="btn btn-color fw-bold" />
</template>

<style scoped>
/* Default colors for SubmitButton */
.btn-color {
  background-color: #B0D0D3;
  color: #333333;
}

.btn-color:hover {
  background-color: #97C0C4;
  color: #333333;
}
</style>