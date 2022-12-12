<template >
    <div class="hero_section">
        <div class="hero_section_frame">
            <div class="hero_text_button">
                <div class="headline-subhead">
                    <p class="discover-digital-art-collect-nf-ts-D4ivpR valign-text-middle worksans-semi-bold-white-38px" data-id="I1962:8412;1962:8276">
                    Discover Digital Art & Collect Nfts
                    </p>
                    <p class="nft-marketplace-ui-c-D4ivpR worksans-normal-white-16px" data-id="I1962:8412;1962:8277">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                </div>
                <a href="create-account-tablet">
                    <my-button class="smart-layers-pointers" data-id="I1962:8412;1962:8278" data-hotspot-id="hp-1">
                        <img class="icon-paper_plane-FU2HYd" data-id="I1962:8412;1962:8278;1424:1791" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-2@2x.svg" alt="icon-paper_plane"/>
                        <div class="button-FU2HYd worksans-semi-bold-white-16px" data-id="I1962:8412;1962:8278;1424:1792">
                            Get Started
                        </div>
                    </my-button>
                </a>
                <div class="additional-info-pDutu9" data-id="I1962:8412;1962:8279">
                    <div class="total-sale-JhiPKg" data-id="I1962:8412;1962:8280">
                        <div class="x240k-puVG18 valign-text-middle spacemono-bold-white-22px" data-id="I1962:8412;1962:8281">
                            240k+
                        </div>
                        <div class="total-sale-puVG18 worksans-normal-white-16px" data-id="I1962:8412;1962:8282">
                            Total Sale
                        </div>
                    </div>
                    <div class="auctions-JhiPKg" data-id="I1962:8412;1962:8283">
                        <div class="x100k-tAgjPE valign-text-middle spacemono-bold-white-22px" data-id="I1962:8412;1962:8284">
                            100k+
                        </div>
                        <div class="auctions-tAgjPE worksans-normal-white-16px" data-id="I1962:8412;1962:8285">
                            Auctions
                        </div>
                    </div>
                    <div class="artists-JhiPKg" data-id="I1962:8412;1962:8286">
                        <div class="x240k-Fb6EBK valign-text-middle spacemono-bold-white-22px" data-id="I1962:8412;1962:8287">
                            240k+
                        </div>
                        <div class="artists-Fb6EBK worksans-normal-white-16px" data-id="I1962:8412;1962:8288">
                            Artists
                        </div>
                    </div>
                </div>
            </div>
            <a href="artist-page-tablet">
                    <div class="highlighted-nft">
                        <img style="width:100%; height:100%" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" anima-src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"/>
                    </div>
            </a>
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
    .hero_section {
    align-items: center;
    align-self: stretch;
    background-color: var(--background);
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    justify-content: center;
    mix-blend-mode: normal;
    padding: 80px 0px;
    position: relative;
}
.hero_section_frame {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    position: relative;
    width: 690px;
}
.hero_text_button {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    position: relative;
    width: 330px;
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
.discover-digital-art {
    background-color: transparent;
    color: var(--text);
    flex: 1;
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-xxxxl);
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.00px;
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
    font-size: var(--font-size-xxl);
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
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}
.nft-marketplace-ui-c-D4ivpR {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0.00px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
}
.worksans-normal-white-16px {
    color: var(--text);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}
.spacemono-bold-white-22px {
    color: var(--text);
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
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
.icon-paper_plane-FU2HYd {
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
    height: 330px;
    overflow: hidden;
    position: relative;
}
a:-webkit-any-link {
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
}
</style>