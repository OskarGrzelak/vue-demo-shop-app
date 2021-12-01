<template>
  <ul class="cart-list">
    <cart-list-item
      v-for="product in cart"
      :key="product.id"
      :product="product"
    ></cart-list-item>
  </ul>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
  components: {
    CartListItem,
  },
  props: ['cart'],
}
</script>

<style scoped>
.cart-list {
  list-style: none;
  flex-grow: 1;
  flex-shrink: 1;
  margin-top: -15px;
  margin-bottom: -15px;
}
</style>
