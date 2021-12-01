<template>
  <teleport to="body">
    <div class="modal" @click.self="this.$emit('close')">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ['close'],
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  padding: 100px;
  background-color: #fff;
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  margin: 10px;
}
</style>
