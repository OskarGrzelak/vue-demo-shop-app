export default {
  addToCart(state, product) {
    // check if product is already in the cart
    const item = state.cart.find((item) => item.id === product.id)
    if (item) {
      // if so increase quantity
      const updatedCart = state.cart.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      })
      state.cart = updatedCart
    } else {
      // else add product to cart
      state.cart = [...state.cart, { ...product, quantity: 1 }]
    }
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  updateQuantity(state, payload) {
    const { product, quantity } = payload
    const updatedCart = state.cart.map((item) => {
      return item.id === product.id ? { ...item, quantity } : item
    })
    state.cart = updatedCart
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeFromCart(state, product) {
    const updatedCart = state.cart.filter((item) => item.id !== product.id)
    state.cart = updatedCart
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  setPromo(state, promo) {
    state.promo = promo
  },
}
