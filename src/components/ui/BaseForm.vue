<template>
  <form @submit.prevent="onSubmit" @inputChange="readInput" >
    <slot @inputChange="this.$emit('inputChange', inputValue)"></slot>
  </form>
</template>

<script>
export default {
  props: ['onSubmit'],
  methods: {
    readInput(input) {
      console.log('input changed: ', input)
    },
  }
}
</script>