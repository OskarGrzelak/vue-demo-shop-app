import { createRouter, createWebHistory } from 'vue-router'

import TheCart from './components/cart/TheCart.vue'
import SingleProduct from './components/products/SingleProduct.vue'
import ProductsList from './components/products/ProductsList'

const routes = [
  { path: '/', component: ProductsList },
  { path: '/products/:id', component: SingleProduct },
  { path: '/cart', component: TheCart },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPostition) {
    if (savedPostition) {
      return savedPostition
    }
    return { left: 0, top: 0 }
  },
})
