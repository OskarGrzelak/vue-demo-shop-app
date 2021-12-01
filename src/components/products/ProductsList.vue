<template>
  <base-container>
    <base-loader v-if="loading"></base-loader>

    <div v-if="error">{{ error }}</div>

    <div v-if="products" class="products-list">
      <products-list-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></products-list-item>
    </div>
  </base-container>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue'
export default {
  components: {
    ProductsListItem,
  },
  data() {
    return {
      loading: false,
      products: null,
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
      this.products = null
      this.loading = true
      try {
        const response = await fetch(`${this.publicPath}products.json`)
        const data = await response.json()
        this.products = data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.products-list {
  display: flex;
  margin: -15px;
  padding: 100px 0;
}

.products-list > * {
  margin: 15px;
}

@media only screen and (max-width: 991.98px) {
  .products-list {
    flex-direction: column;
    margin: -25px 0;
    padding: 50px 0;
  }

  .products-list > * {
    margin: 25px 0;
  }
}
</style>
