<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="logo">
            <div>
                <img
                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront-7@2x.svg"
                    alt="Storefront"
                />
            </div>
            <div class="btn">NFT Marketplace</div>
        </div>
        <div v-show="!mobile" class="nav_btn">
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
        <div class="icon">
            <img
                @click="toggleMobileNav"
                v-show="mobile"
                :class="{ 'icon-active': mobileNav }"
                src="@/image/Burger Menu.png"
                alt="bars"
            />
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li>
                    <div class="icon">
                        <img
                            @click="toggleMobileNav"
                            v-show="mobile"
                            :class="{ 'icon-active': mobileNav }"
                            src="@/image/cross.svg"
                            alt="close"
                        />
                    </div>
                </li>
                <li class="link">Marketplace</li>
                <li class="link">Rankings</li>
                <li class="link">Connect a wallet</li>
                <my-button class="btn-signup-div">
                    <img
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/user-1@2x.svg"
                    />
                    <div class="btn_signup">Sign Up</div>
                </my-button>
            </ul>
        </transition>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton },
    name: 'navigation',
    data() {
        return {
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWitdh: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        checkScreen() {
            this.windowWitdh = window.innerWidth
            if (this.windowWitdh <= 950) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    }
}
</script>

<style lang="scss">
.navbar {
    color: #ffffff;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1210px;

    @media (min-width: 1140px) {
        max-width: 1140px;
    }

    ul,
    .link {
        list-style: none;
        text-decoration: none;
    }

    li {
        cursor: pointer;
        padding: 10px;
    }

    .link {
        transition: 0.5s ease all;
        border-bottom: 1px solid transparent;

        &:hover {
            color: var(--call-to-action-opacity);
            border-color: var(--call-to-action-opacity);
        }
    }
}

.logo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1/2 span;
    place-items: center start;
    gap: 20px;
    cursor: pointer;

    img {
        min-width: 40px;
        transition: 0.5s ease all;
    }

    div {
        padding: 10px;
    }
}

.nav_btn {
    align-items: center;
    background-color: transparent;
    border: 1px none;
    display: grid;
    margin: 16px 0;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 5/8 span;
    place-items: center;
    white-space: nowrap;
    letter-spacing: 0px;
    line-height: 22.4px;
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

.icon {
    display: grid;
    grid-column: 11 / 1 span;
    width: 30px;
    height: 30px;
    place-items: center;
    place-self: center;
    cursor: pointer;

    img {
        transition: 0.5s ease all;
    }
}

.icon-active {
    transform: rotate(90deg);
}

.dropdown-nav {
    background-color: var(--background---secondary);
    display: grid;
    grid-column: 10 / 1 span;
    place-items: center;
    position: fixed;
    z-index: 2;
    width: 100%;
    max-width: 250px;
    height: 100%;
    top: 0;
    left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

@media screen and (max-width: 790px) {
    .logo {
        grid-column: 2 / 4 span;
    }
}

@media screen and (max-width: 440px) {
    .navbar {
        padding: 0 20px;
    }
    .logo {
        grid-column: 1 / 2 span;
    }
    .dropdown-nav {
        grid-column: 7 / 2 span;
    }
    .icon {
        grid-column: 10 / 3 span;
    }
}
</style>
