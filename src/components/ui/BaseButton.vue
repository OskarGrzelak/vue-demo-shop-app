<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 0.5em 0.8em;
  border: none;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}

.button:hover {
  background-color: var(--color-secondary);
}
</style>