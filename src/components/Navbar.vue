<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="logo">
            <img
                
                src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront-7@2x.svg"
                alt="Storefront"
                
            /><img
                
                src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/nft-marketplace-3@2x.svg"
                alt="NFT Marketplace"
                
            />
        </div>
        <div class="nav_btn">
            <div class="btn" @click="$router.push('/about-me')">
                Marketplace
            </div>
            <div class="btn" @click="$router.push('/articles')">Rankings</div>
            <div class="btn" @click="$router.push('/articles')">
                Connect a wallet
            </div>
            <my-button @click="$router.push('/articles')"
                ><img
                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/user-1@2x.svg"
                />
                <div class="btn_signup">Sign Up</div>
            </my-button>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton }
}
</script>

<style lang="scss">
.navbar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    margin: 0 auto;
    padding: 15px 15px;
    max-width: 1210px;
    color: #ffffff;
}

.logo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1 / 4 span;
    place-items: center start;
    cursor: pointer;
}

.nav_btn {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 6 / 7 span;
    place-items: center;
    white-space: nowrap;
}

.btn {
    padding: 0px 20px;
    text-align: center;
    cursor: pointer;
}

.btn:hover {
    transform: scale(0.95);
}

.btn_signup {
    display: grid;
    place-items: center end;
    font-size: var(--font-size-m);
}

@media screen and (max-width: 1000px) {
    .logo {
        grid-column: 2 / 4 span;
    }
    .nav_btn {
        display: none;
    }
}
</style>
