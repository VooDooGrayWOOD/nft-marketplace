<template>
    <div class="hero_section">
        <div class="hero_section_frame">
            <div class="hero_text_button">
                <div class="headline-subhead item">
                    <p
                        class="discover-digital-art worksans-semi-bold-white-38px"
                    >
                        Discover Digital Art & Collect Nfts
                    </p>
                    <p class="nft-marketplace-ui">
                        NFT marketplace UI created with Anima for Figma.
                        Collect, buy and sell art from more than 20k NFT
                        artists.
                    </p>
                </div>

                <div class="highlighted-nft item">
                    <a href="artist-page-tablet">
                        <img
                            style="height: 100%"
                            src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
                        />
                    </a>
                </div>

                <my-button class="smart-layers-pointers item">
                    <img
                        class="icon-paper_plane"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-2@2x.svg"
                        alt="icon-paper_plane"
                    />
                    <a href="create-account-tablet">
                        <div>Get Started</div>
                    </a>
                </my-button>

                <div class="additional-info item">
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
    border: 1px none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    height: auto;
}

.hero_text_button {
    display: grid;
    place-items: center start;
    gap: 20px;
}

.item:nth-child(1) {
    grid-column: 1 span;
    grid-row: 1 / 1 span;
}

.item:nth-child(2) {
    grid-column: 2 span;
    grid-row: 1 / 3 span;
}

.item:nth-child(4) {
    grid-column: 1 span;
}

.headline-subhead {
    display: grid;
    gap: 30px;
    height: auto;
}

.discover-digital-art {
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

.highlighted-nft img {
    width: 100%;
    min-width: 315px;
    margin: 0 auto;
    overflow: hidden;
}

a:-webkit-any-link {
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
}

@media screen and (max-width: 1120px) {
    .discover-digital-art {
        font-size: var(--font-size-xxl);
    }
}

@media screen and (max-width: 900px) {
    .item:nth-child(2) {
        grid-column: 1 span;
        grid-row: 2 / 1 span;
    }
    .smart-layers-pointers {
        min-width: 100%;
    }
}
</style>
