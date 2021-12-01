<template>
  <base-container>
    <base-loader v-if="loading"></base-loader>

    <div v-if="error">{{ error }}</div>

    <div class="product" v-if="product">
      <div class="image">
        <img :src="`${publicPath}${product.img}`" :alt="product.name" />
      </div>
      <div class="content">
        <h2 class="title">{{ product.name }}</h2>
        <p
          class="description"
          v-for="(p, index) in product.description.split('\n')"
          :key="index"
        >
          {{ p }}
        </p>
        <p class="price">{{ product.price }} zł</p>
        <base-button @click="addToCart(product)">Dodaj do koszyka</base-button>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      product: null,
      error: null,
      publicPath: process.env.BASE_URL
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    async fetchData() {
      this.error = null
      this.product = null
      this.loading = true
      const id = this.$route.params.id
      try {
        const response = await fetch(`${this.publicPath}products.json`)
        const data = await response.json()
        this.product = data.find((product) => product.id === parseInt(id))
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
}
</script>

<style scoped>
.product {
  display: flex;
  padding: 100px 0;
  margin: 0 -15px;
}

.product > * {
  margin: 0 15px;
}

.image {
  width: calc(50% - 15px);
  flex-shrink: 0;
}

.image > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
  .product {
    flex-direction: column;
    margin: -5px 0;
    padding: 50px 0;
  }

  .product > * {
    margin: 5px 0;
  }

  .image {
    max-width: 640px;
    width: 100%;
    flex-shrink: 0;
    margin: 0 auto;
  }
}
</style>
