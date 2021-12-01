import { createStore } from 'vuex'
import cartMutations from './mutations'
import cartActions from './actions'
import cartGetters from './getters'

const store = createStore({
  state() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      promo: null,
      timer: null,
    }
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
})

export default store
