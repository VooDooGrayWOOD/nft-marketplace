<template>
    <div class="hero_section">
        <div class="hero_section_frame">
            <div class="hero_text_button">
                <div class="headline-subhead">
                    <p
                        class="discover-digital-art-collect-nf-ts-D4ivpR valign-text-middle worksans-semi-bold-white-38px"
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
                <div class="additional-info-pDutu9">
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
            <a href="artist-page-tablet">
                <div class="highlighted-nft">
                    <img
                        style="width: 100%; height: 100%"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
                        anima-src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
                    />
                </div>
            </a>
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
    width: 100%;
    height: auto;
    align-items: center;
    align-self: stretch;
    background-color: var(--background);
    border: 1px none;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-content: center;
    mix-blend-mode: normal;
    padding: 80px 195px;
    position: relative;
}

.hero_section_frame {
    background-color: transparent;
    border: 1px none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: auto;
    margin-left: -80px;
    margin-right: -80px;
    position: relative;
    max-width: 1050px;
}

.hero_text_button {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 30px;
    height: auto;
    position: relative;
}

.headline-subhead {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    position: relative;
}

.discover-digital-art-collect-nf-ts-D4ivpR {
    background-color: transparent;
    color: var(--text);
    flex: 1;
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-xxxxl);
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 73.7px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    width: 510px;
}

.worksans-semi-bold-white-38px {
    color: var(--text);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-xxxxl);
    font-style: normal;
    font-weight: 600;
}

.valign-text-middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.worksans-semi-bold-white-16px {
    color: var(--text);
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}

.nft-marketplace-ui-c-D4ivpR {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 35.2px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
}

.worksans-normal-white-16px {
    color: var(--text);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
}

.spacemono-bold-white-22px {
    color: var(--text);
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-xl);
    font-style: normal;
    font-weight: 700;
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
    align-items: center;
    background-color: transparent;
    border: 1px none;
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 510px;
    overflow: hidden;
    position: relative;
}

a:-webkit-any-link {
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
}
</style>
