export default {
  addToCart(context, product) {
    context.commit('addToCart', product)
  },
  updateQuantity(context, payload) {
    if (context.state.timer) {
      clearTimeout(context.state.timer)
    }
    const { product, quantity } = payload
    if (quantity >= 0) {
      context.commit('updateQuantity', payload)
    }
    if (quantity === 0) {
      context.state.timer = setTimeout(function () {
        context.commit('removeFromCart', product)
      }, 1500)
    }
  },
  removeFromCart(context, product) {
    context.commit('removeFromCart', product)
  },
  setPromo(context, promo) {
    context.commit('setPromo', promo)
  },
}
