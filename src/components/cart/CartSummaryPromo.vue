<template>
  <div class="promo-section">
    <p class="promo-message" v-if="activePromo">
      Aktywny kod promocyjny: "<strong>{{ activePromo.promo }}</strong
      >". Zniżka
      <span class="discount">{{ activePromo.discount }}%</span>
    </p>
    <div class="input-group" v-else>
      <input
        class="input"
        type="text"
        placeholder="Masz kod rabatowy?"
        ref="promoCode"
      />
      <p class="error-message" type="error" v-if="error">
        {{ error }}
      </p>
      <base-button @click="activatePromoCode">Aktywuj</base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      promoCodeIsValid: true,
    }
  },
  computed: {
    activePromo() {
      return this.$store.getters.activePromo
    },
    error() {
      return this.promoCodeIsValid ? null : 'Niepoprawny kod promocyjny'
    },
  },
  methods: {
    activatePromoCode() {
      const code = this.validatePromoCode()
      if (this.promoCodeIsValid) {
        this.$store.dispatch('setPromo', {
          promo: this.$refs.promoCode.value,
          discount: code.length,
        })
      }
      this.$refs.promoCode.value = ''
    },
    validatePromoCode() {
      const code = this.$refs.promoCode.value.replace(/[^0-9]/g, '')
      this.promoCodeIsValid = code.length >= 2 && code.length <= 8
      return code
    },
  },
}
</script>

<style scoped>
.promo-section {
  margin-bottom: 40px;
  font-size: 14px;
  text-align: left;
}

.promo-message {
  font-size: 14px;
}

.discount {
  font-weight: 700;
  color: var(--color-primary);
}

.input-group {
  display: flex;
  margin: 10px 0 40px;
  position: relative;
}

.input {
  width: 100%;
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  padding: 0.2em 0.8em;
}

.input-group > *:first-child:not(:last-child) {
  margin-right: 10px;
}

.error-message {
  position: absolute;
  top: 100%;
  left: 13px;
  font-size: 14px;
  color: var(--color-red);
}
</style>
