<template>
  <base-container>
    <div class="cart" v-if="cart.length > 0">
      <cart-list
        :cart="cart"
      ></cart-list>
      <cart-summary></cart-summary>
    </div>
    <div class="empty" v-else>
      <h2>Twój koszyk jest pusty</h2>
      <router-link to="/">Zobacz listę produktów &gt;&gt;&gt;</router-link>
    </div>
  </base-container>
</template>

<script>
import CartList from './CartList.vue'
import CartSummary from './CartSummary.vue'
/* import { getCart, setCart } from '../../cart' */
export default {
  components: {
    CartList,
    CartSummary,
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    }
  },
}
</script>

<style scoped>
.cart {
  display: flex;
  margin: 0 -15px;
  padding: 100px 0;
}

.cart > * {
  margin: 0 15px;
}

.empty {
  margin: 100px auto;
  width: fit-content;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
}

@media only screen and (max-width: 991.98px) {
  .cart {
    flex-direction: column;
    margin: -25px 0;
    padding: 50px 0;
  }

  .cart > * {
    margin: 25px 0;
  }
}
</style>
