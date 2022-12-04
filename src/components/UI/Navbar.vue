<template>
    <div class="navbar">
        <div style="font-size: 20px" @click="$router.push('/')">
            Vue3 + Vite
        </div>
        <div class="nav_btn">
            <my-button
                style="margin-left: 20px"
                @click="$router.push('/about-me')"
                >About Me</my-button
            >
            <my-button
                style="margin-left: 20px"
                @click="$router.push('/articles')"
                >Articles</my-button
            >
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    components: { MyButton }
}
</script>

<style lang="scss">
.navbar {
    height: 50px;
    background-color: rgba(16, 40, 37, 0.87);
    box-shadow: 2px 2px 4px #001515;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.nav_btn {
    margin-left: auto;
}
</style>
