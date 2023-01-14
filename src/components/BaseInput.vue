<script>
/*
*Code written by Sofia Widholm. 
*JavaScriptbaserad webbutveckling, Webbutveckling, Mittuniversitetet.
*Last update 2023-01-14
*/

export default {
  name: "BaseInput",
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
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <p>
    <!-- Label element -->
    <label :for="id" class="form-label fw-bold">{{ label }}</label>
    <!-- Input element -->
    <input :id="id" :type="type" :value="modelValue" class="form-control"
      @input="$emit('update:modelValue', $event.target.value)" />
  </p>
</template>