<template>
    <navbar></navbar>
    <form class="app">
        <router-view></router-view>
    </form>
</template>

<script>
import Navbar from './components/UI/Navbar.vue'

export default {
    components: { Navbar }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    display: block;
}

:root {
    // font-family: Inter, Avenir, Helvetica, Arial, sans-serif;

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
    --font-family-space_mono: "Space Mono", Helvetica;
    --font-family-work_sans: "Work Sans", Helvetica;
}

.app {
    padding: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 720px;
}

// @media screen and (min-width: 834px) and (max-width: 1279px) {
// .screen .homepage-desktop {
//     display: none;
// }
// }
</style>
