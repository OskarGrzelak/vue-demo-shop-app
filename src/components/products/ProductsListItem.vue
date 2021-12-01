<template>
  <div class="card">
    <router-link :to="`/products/${product.id}`">
      <img :src="`${publicPath}${product.img}`" :alt="product.name" />
    </router-link>
    <div class="content">
      <router-link :to="`/products/${product.id}`">
        <h2 class="title">{{ product.name }}</h2>
      </router-link>
      <p class="description">{{ product.description.slice(0, 80) }}...</p>
      <p class="price">{{ product.price }} zł</p>
    </div>
    <base-button @click="addToCart(product)">Dodaj do koszyka</base-button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
}
</script>

<style scoped>
.card {
  text-align: center;
}

.content {
  padding: 0 10px;
  text-align: left;
}

.title {
  margin: 10px 0;
}

.description {
  margin: 10px 0;
}

.price {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 10px 0 50px;
}

@media only screen and (max-width: 991.98px) {
  .content {
    text-align: center;
  }

  .image {
    margin: 0 auto;
  }
}
</style>
