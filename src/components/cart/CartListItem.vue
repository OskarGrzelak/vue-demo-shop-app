<template>
  <li class="cart-list-item">
    <div>
      <div class="image">
        <img :src="`${publicPath}${product.img}`" :alt="product.name" />
      </div>
      <h3 class="title">{{ product.name }}</h3>
    </div>
    <div>
      <p>{{ product.price }} zł</p>
      <MultiplyIcon class="icon-times" />
      <base-input
        class="quantity"
        type="number"
        min="0"
        :value="productQuantity"
        @input="updateQuantity(product, Number($event.target.value))"
      ></base-input>
      <TrashIcon class="icon-delete" @click="remove(product)" />
    </div>
  </li>
</template>

<script>
import TrashIcon from '../../assets/icon-trash.svg?inline'
import MultiplyIcon from '../../assets/icon-times.svg?inline'
export default {
  components: {
    TrashIcon,
    MultiplyIcon,
  },
  props: ['product'],
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  computed: {
    productQuantity() {
      return this.product.quantity
    },
  },
  methods: {
    updateQuantity(product, quantity) {
      this.$store.dispatch('updateQuantity', { product, quantity })
    },
    remove(product) {
      this.$store.dispatch('removeFromCart', product)
    },
  },
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 8px -7px rgba(81, 158, 138, 1);
}

.cart-list-item > div {
  display: flex;
  align-items: center;
}

.image {
  position: relative;
  width: 90px;
  height: 63px;
  margin-right: 10px;
}

.image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.icon-times {
  width: 10px;
  margin: 0 10px;
  color: var(--color-grey);
}

.quantity {
  width: 60px;
  padding: 0.4em 0 0.4em 0.2em;
}

.icon-delete {
  width: 20px;
  color: var(--color-dark);
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.2s;
}

.icon-delete:hover {
  color: var(--color-red);
}

@media only screen and (max-width: 575.98px) {
  .image {
    display: none;
  }
}
</style>
