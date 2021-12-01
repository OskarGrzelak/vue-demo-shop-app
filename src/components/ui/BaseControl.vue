<template>
  <div class="form-control">
    <slot @inputChange="readInput"></slot>
    <p class="error-message" v-if="validityError">
      {{ validityError }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['validityError'],
  methods: {
    readInput(input) {
      console.log('input changed: ', input)
    },
  }
}
</script>

<style scoped>
.form-control {
  display: flex;
  margin: 10px 0 40px;
  position: relative;
}

.form-control > *:first-child:not(:last-child) {
  margin-right: 10px;
}

.error-message {
  position: absolute;
  top: 100%;
  left: 13px;
  font-size: 14px;
  color: var(--color-red);
}
</style>