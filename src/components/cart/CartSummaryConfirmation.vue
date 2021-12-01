<template>
  <base-modal v-if="confirm" @close="this.$emit('close')">
    <h2>Gratulacje!</h2>
    <p>Twoje zamówienie zostało przyjęte do realizacji.</p>
    <ul>
      <li v-for="product in summary.products" :key="product.id">
        {{ product.name }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Kwota zamówienia: {{ summary.total }} zł</p>
    <p>
      Szczegóły wysłaliśmy na adres email <strong>{{ email }}</strong
      >.
    </p>
  </base-modal>
</template>

<script>
export default {
  props: ['confirm', 'email'],
  computed: {
    summary() {
      return this.$store.getters.cartSummary
    },
  },
}
</script>
