<template>
  <navbar></navbar>
  <form class="app">
    <router-view></router-view>
  </form>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {Navbar}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  display: block;
  font-family: 'Space Mono', monospace;
  font-family: 'Work Sans', sans-serif;
}

:root {
  // font-family: Helvetica, sans-serif;

  color: rgba(39, 99, 91, 0.87);
  background-color: var(--background);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --background: #2b2b2b;
  --background---secondary: #3b3b3b;
  --black: #000000;
  --call-to-action: #a259ff;
  --caption--label-text: #858584;
  --celeste: #cccccc;
  --jade: #00ac4f;
  --masala: #3b3b3b80;
  --text: #ffffff;
  --white: #ffffff1a;
  --font-size-l: 22px;
  --font-size-m: 16px;
  --font-size-s: 12px;
  --font-size-xl: 28px;
  --font-size-xxl: 38px;
  --font-size-xxxl: 51px;
  --font-size-xxxxl: 67px;
  --font-family-space_mono: 'Space Mono', Helvetica;
  --font-family-work_sans: 'Work Sans', Helvetica;
}

.app {
  background-color: var(--background);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  margin: 0;
  min-height: 6580px;
  min-width: 1280px;
  mix-blend-mode: normal;
  overflow-x: hidden;
  position: relative;
  top: 0;
  width: 100%;
}

a {
  color: var(--text)
}

// @media screen and (min-width: 834px) and (max-width: 1279px) {

// }
</style>
