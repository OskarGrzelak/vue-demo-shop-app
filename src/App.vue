<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

/* Root variables */
:root {
  --color-primary: #519e8a;
  --color-secondary: #7eb09b;
  --color-dark: #476a6f;
  --color-red: #e01313;
  --color-grey: #aaa;
  --color-text: #212922;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd,
ul {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  overflow-x: hidden;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: var(--color-text);
}

/* A elements */
a:link,
a:visited {
  text-decoration: none;
  color: var(--color-text);
  transition: color 0.2s;
}

a:hover,
a:active {
  text-decoration: none;
  color: var(--color-secondary);
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  line-height: 1.1;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* General media queries */
@media only screen and (max-width: 575.98px) {
  body {
    font-size: 16px;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app > *:last-child {
  margin-top: auto;
}

@media only screen and (max-width: 991.98px) {
  #app {
    margin-top: 90px;
  }
}

@media only screen and (max-width: 575.98px) {
  #app {
    margin-top: 80px;
  }
}
</style>
