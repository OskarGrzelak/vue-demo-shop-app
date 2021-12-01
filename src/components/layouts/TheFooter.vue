<template>
  <footer>
    <base-container mode="flex">
      <router-link to="/">
        <img src="../../assets/logo.png" alt="Logo" />
      </router-link>
      <ul>
        <li><FacebookLogo /></li>
        <li><InstagramLogo /></li>
        <li><TwitterLogo /></li>
      </ul>
    </base-container>
  </footer>
</template>

<script>
import FacebookLogo from '../../assets/icon-facebook.svg?inline'
import InstagramLogo from '../../assets/icon-instagram.svg?inline'
import TwitterLogo from '../../assets/icon-twitter.svg?inline'

export default {
  components: {
    FacebookLogo,
    InstagramLogo,
    TwitterLogo,
  },
}
</script>

<style scoped>
footer {
  background-color: var(--color-dark);
  padding: 50px 0;
}

ul {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}

ul > li {
  margin: 0 15px;
  height: 24px;
}

svg {
  fill: #fff;
  transition: fill 0.2s;
  cursor: pointer;
}

svg:hover {
  fill: var(--color-secondary);
}

@media only screen and (max-width: 575.98px) {
  footer {
    padding: 25px 0;
  }

  ul {
    margin-bottom: 20px;
  }
}
</style>
