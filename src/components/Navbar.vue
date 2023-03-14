<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="logo">
            <div>
                <img
                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront-7@2x.svg"
                    alt="Storefront"
                />
            </div>
            <div>
                <img
                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/nft-marketplace-3@2x.svg"
                    alt="NFT Marketplace"
                />
            </div>
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
    width: 100%;
    align-items: center;
    align-self: stretch;
    height: auto;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    mix-blend-mode: normal;
    padding: 20px 50px;
    position: relative;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    div {
        padding: 10px;
    }
}

.nav_btn {
    align-items: center;
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 10px;
    height: auto;
    justify-content: flex-end;
    position: relative;
    width: fit-content;
}

.btn {
    padding: 0px 20px;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
}

.btn:hover {
    transform: scale(0.95);
}

.btn_signup {
    color: var(--text);
    font-family: var(font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 600;
}
</style>
