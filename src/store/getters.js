export default {
  cart(state) {
    return state.cart
  },
  total(state) {
    const total = state.cart
      .reduce((prev, curr) => {
        return prev + curr.quantity * curr.price
      }, 0)
      .toFixed(2)
    if (!state.promo) {
      return total
    } else {
      return (total - (total * state.promo.discount) / 100).toFixed(2)
    }
  },
  totalQuantity(state) {
    return state.cart.reduce((prev, curr) => {
      return prev + curr.quantity
    }, 0)
  },
  activePromo(state) {
    return state.promo
  },
  cartSummary(state, getters) {
    return {
      products: state.cart.map((product) => {
        return {
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
        }
      }),
      total: getters.total,
    }
  },
}
