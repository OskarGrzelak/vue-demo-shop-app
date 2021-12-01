<template>
  <form @submit.prevent="handleFormSubmit">
    <base-control :validityError="emailValidity.error">
      <base-input type="email" placeholder="Podaj email" v-model="emailInput" />
    </base-control>
    <base-button>Złóż zamówienie</base-button>
  </form>
</template>

<script>
export default {
  props: ['submitHandler'],
  data() {
    return {
      emailInput: '',
      emailValidity: {
        isValid: true,
        error: null,
      },
    }
  },
  methods: {
    handleFormSubmit() {
      this.validateEmail()
      if (this.emailValidity.isValid) {
        this.$emit('readyToSend', this.emailInput)
      }
    },
    validateEmail() {
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailInput)
      ) {
        this.emailValidity.isValid = false
        this.emailValidity.error = 'Nieprawidłowy email'
      } else {
        this.emailValidity.isValid = true
        this.emailValidity.error = null
      }
    },
  },
}
</script>
