<template>
  <header>
    <base-container>
      <nav>
        <router-link to="/">
          <img src="../../assets/logo.png" alt="Logo" />
        </router-link>
        <router-link to="/cart">
          <button>
            <img src="../../assets/icon-cart.svg" alt="" />
            <span class="quantity" v-if="totalQuantity > 0">{{
              totalQuantity
            }}</span>
          </button>
        </router-link>
      </nav>
    </base-container>
  </header>
</template>

<script>
export default {
  computed: {
    totalQuantity() {
      return this.$store.getters.totalQuantity
    },
  },
}
</script>

<style scoped>
header {
  background-color: var(--color-primary);
  padding: 15px 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  position: relative;
  border: none;
  border-radius: 100%;
  background-color: transparent;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background-color: var(--color-secondary);
}

.icon {
  width: 42px;
  color: #fff;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 100%;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25%, -5%);
}

@media only screen and (max-width: 991.98px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}

@media only screen and (max-width: 575.98px) {
  header {
    padding: 10px 0;
  }
}
</style>
