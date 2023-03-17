<template>
    <div class="hero_section">
        <div class="hero_section_frame">
            <div class="hero_text_button">
                <div class="headline-subhead item">
                    <p
                        class="discover-digital-art-collect-nf-ts-D4ivpR worksans-semi-bold-white-38px"
                    >
                        Discover Digital Art & Collect Nfts
                    </p>
                    <p
                        class="nft-marketplace-ui-c-D4ivpR worksans-normal-white-16px"
                    >
                        NFT marketplace UI created with Anima for Figma.
                        Collect, buy and sell art from more than 20k NFT
                        artists.
                    </p>
                </div>
                <div class="highlighted-nft item">
                    <a href="artist-page-tablet">
                        <img
                            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
                        />
                    </a>
                </div>
                <a href="create-account-tablet item">
                    <my-button class="smart-layers-pointers">
                        <img
                            class="icon-paper_plane"
                            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-2@2x.svg"
                            alt="icon-paper_plane"
                        />
                        <div>Get Started</div>
                    </my-button>
                </a>
                <div class="additional-info-pDutu9 item">
                    <div>
                        <div class="spacemono-bold-white-22px">240k+</div>
                        <div class="worksans-normal-white-16px">Total Sale</div>
                    </div>
                    <div>
                        <div class="spacemono-bold-white-22px">100k+</div>
                        <div class="worksans-normal-white-16px">Auctions</div>
                    </div>
                    <div>
                        <div class="spacemono-bold-white-22px">240k+</div>
                        <div class="worksans-normal-white-16px">Artists</div>
                    </div>
                </div>
            </div>
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
.hero_section {
    background-color: var(--background);
    display: grid;
    grid-column: 1 / 12 span;
    margin: 0 auto;
}

.hero_section_frame {
    height: auto;
}

.hero_text_button {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(130px, 1fr));
    place-items: center start;
    gap: 20px;
    margin: 80px auto 80px;
}

.headline-subhead {
    display: grid;
    gap: 10px;
    height: auto;
}

.item:nth-child(2) {
    grid-row: 1 / 3 span;
    grid-column: 2 / 1 span;
}

.worksans-semi-bold-white-38px {
    font-size: var(--font-size-xxxxl);
    font-weight: 600;
}

.worksans-semi-bold-white-16px {
    font-size: var(--font-size-m);
}

.nft-marketplace-ui-c-D4ivpR {
    line-height: 35.2px;
}

.worksans-normal-white-16px {
    font-size: var(--font-size-l);
}

.spacemono-bold-white-22px {
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-xl);
    padding-bottom: 10px;
}

.additional-info-pDutu9 {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    border-radius: 20px;
    display: flex;
    gap: 30px;
    height: auto;
    position: relative;
}

.smart-layers-pointers {
    margin: 0;
}

.icon-paper_plane {
    background-color: transparent;
    height: 20px;
    min-width: 20px;
    position: relative;
}

.highlighted-nft {
    width: 100%;
    max-width: 500px;
    min-width: 320px;
    height: auto;
}

a:-webkit-any-link {
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
}

@media screen and (max-width: 1020px) {
    .hero_text_button {
        grid-column: 3 span;
        text-align: center;
        place-items: center;
    }

    .subhead_head {
        font-size: var(--font-size-xl);
    }
}

@media screen and (max-width: 790px) {
    .hero_section {
        text-align: center;
    }
    .subhead_head {
        font-size: var(--font-size-l);
    }
    .social_icon img {
        margin: 0;
        width: 38px;
        height: 38px;
    }
    .headline-subhead {
        margin: 0 15px;
    }
    
    .item:nth-child(2) {
        grid-row: 2;
        grid-column: 1;
    }

    .worksans-semi-bold-white-38px {
        font-size: var(--font-size-xxl);
    }

    .worksans-normal-white-16px {
        font-size: var(--font-size-m);
    }

    .spacemono-bold-white-22px {
        font-size: var(--font-size-l);
    }
}
</style>
