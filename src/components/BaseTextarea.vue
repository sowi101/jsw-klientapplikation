<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

export default {
  name: "BaseTextarea",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String],
      default: "",
    }
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <p class="col">
  <!-- Label element -->
  <label :for="id" class="form-label fw-bold">{{ label }}</label>
  <!-- Input element -->
  <textarea :id="id" :value="modelValue" class="form-control"
    @input="$emit('update:modelValue', $event.target.value)"></textarea>
  </p>
</template>