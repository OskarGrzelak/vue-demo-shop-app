<template>
  <input
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: ['modelValue'],
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  padding: 0.2em 0.8em;
}
</style>
