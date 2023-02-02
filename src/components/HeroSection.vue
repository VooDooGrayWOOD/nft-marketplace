<template>
    <div class="hero_section">
        <div class="hero_section_frame">
            <div class="hero_text_button">
                <div class="headline-subhead">
                    <p
                        class="discover-digital-art-collect-nf-ts valign-text-middle worksans-semi-bold-white-38px"
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
                    <a href="create-account-tablet">
                        <my-button class="smart-layers-pointers">
                            <img
                                class="icon-paper_plane"
                                src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-2@2x.svg"
                                alt="icon-paper_plane"
                            />
                            <div>Get Started</div>
                        </my-button>
                    </a>
                </div>

                <div class="additional-info">
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
            <div class="highlighted-nft">
                <a href="artist-page-tablet">
                    <img
                        style="height: 100%"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
                    />
                </a>
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
    border: 1px none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    height: auto;
}

.hero_text_button {
    display: grid;
    place-items: center start;
    gap: 20px;
}

.headline-subhead {
    display: grid;
    gap: 30px;
    height: auto;
}

.worksans-semi-bold-white-38px {
    font-size: var(--font-size-xxxxl);
}

.spacemono-bold-white-22px {
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-xl);
    padding-bottom: 10px;
}

.additional-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1 / 3 span;
    gap: 30px;
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
    height: 510px;
    margin: 0 auto;
    overflow: hidden;
}

a:-webkit-any-link {
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
}
</style>
