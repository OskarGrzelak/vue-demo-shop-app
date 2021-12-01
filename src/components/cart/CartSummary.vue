<template>
  <div class="summary">
    <div class="header">
      Łączna kwota: <span class="total">{{ total }} zł</span>
    </div>
    <cart-summary-promo></cart-summary-promo>
    <cart-summary-form @readyToSend="sendForm"></cart-summary-form>
  </div>
  <cart-summary-confirmation
    :confirm="confirm"
    :email="email"
    @close="this.confirm = false"
  ></cart-summary-confirmation>
</template>

<script>
import CartSummaryPromo from './CartSummaryPromo.vue'
import CartSummaryForm from './CartSummaryForm.vue'
import CartSummaryConfirmation from './CartSummaryConfirmation.vue'
export default {
  components: {
    CartSummaryPromo,
    CartSummaryForm,
    CartSummaryConfirmation,
  },
  data() {
    return {
      email: '',
      confirm: false,
    }
  },
  computed: {
    total() {
      return this.$store.getters.total
    },
  },
  methods: {
    sendForm(email) {
      this.email = email
      this.confirm = true
    },
  },
}
</script>

<style scoped>
.summary {
  max-width: 350px;
  width: 100%;
  padding: 10px;
  border: 3px solid var(--color-primary);
  border-radius: 10px;
  text-align: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 24px;
}

.total {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}

@media only screen and (max-width: 991.98px) {
  .summary {
    align-self: center;
  }
}

@media only screen and (max-width: 575.98px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
