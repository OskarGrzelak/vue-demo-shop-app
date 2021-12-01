<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
div {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 575.98px) {
  div {
    padding: 0 10px;
  }
  
  .flex {
    flex-direction: column-reverse;
  }
}
</style>