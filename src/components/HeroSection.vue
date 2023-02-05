<template>
    <div class="hero_section">
        <div class="hero_section-frame">
            <div class="hero_text_button item">
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
                </div>
            </div>

            <div class="highlighted-nft item">
                <a href="artist-page-tablet">
                    <img
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
</template>
<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton }
}
</script>
<style lang="scss">
.hero_section {
    margin: 0 auto;
    grid-column: 1 / 12 span;
    // max-width: 1050px;
}

.hero_section-frame {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 30px;
    margin: 0 auto;
}

.hero_text_button {
    display: grid;
    grid-column: 1;
    gap: 30px;
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
    gap: 30px;
}

.smart-layers-pointers {
    margin: 0;
}


.highlighted-nft {
    grid-column: 2 / 1 span;
    grid-row: 1 / 3 span;
    width: 100%;
    min-width: 315px;
}


@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 480px) {
    .item:nth-child(2) {
        grid-column: 1;
        grid-row: 2 span;
    }
    .smart-layers-pointers {
        width: 100%;
    }
}

</style>
