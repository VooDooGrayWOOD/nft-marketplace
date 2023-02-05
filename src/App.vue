<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    components: { Navbar }
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

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    font-family: 'Space Mono', monospace;
    font-family: 'Work Sans', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
    color: var(--text);
    cursor: pointer;
}

img {
    max-width: 100%;
}

:root {
    color: var(--text);
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

// .app {
//   background-color: var(--background);
//   border: 1px none;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   left: 0;
//   margin: 0;
//   min-height: 6695px;
//   min-width: 1280px;
//   mix-blend-mode: normal;
//   overflow-x: hidden;
//   position: relative;
//   top: 0;
//   width: 100%;
// }
</style>
