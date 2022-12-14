<template>
    <div class="navbar">
        <div style="font-size: var(--font-size-l); font-family: var(--font-family-space_mono); cursor: pointer;" @click="$router.push('/')">
            Marketplace
        </div>
        <div class="nav_btn">
            <div 
                class="btn"
                @click="$router.push('/about-me')"
                >Marketplace
            </div>
            <div 
                class="btn"
                @click="$router.push('/articles')"
                >Rankings
            </div>
            <div 
                class="btn"
                @click="$router.push('/articles')"
                >Connect a wallet
            </div>
            <my-button 
                @click="$router.push('/articles')"
                ><img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/user-1@2x.svg" />
                <div class="btn_signup">
                    Sign Up
                </div> 
            </my-button>
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
    font-family: var(font-family-work_sans);
    height: 100px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
}

.nav_btn {
    margin-left: auto;
    background-color: transparent;
    letter-spacing: 0.00px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    white-space: nowrap;
    width: fit-content;
}
.btn {
    margin-left: 60px;
    text-align: center;
    cursor: pointer;
}
.btn:hover {
    transform:  scale(0.95);
}
.btn_signup {
    color: var(--text);
    font-family: var(font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 600;
}
</style>
