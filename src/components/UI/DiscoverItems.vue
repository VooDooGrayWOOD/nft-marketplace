<template>
    <div class="nft-cards-grid">
        <div class="nft-cards-row">
            <a href="nft-page-desktop">
                <div class="nft-card">
                    <div class="image">
                        <img
                            class="image-placeholder"
                            :src="image"
                            alt="Image Placeholder"
                        />
                    </div>
                    <div class="nft-info">
                        <div class="artist-info">
                            <div class="nft-name">
                                {{ info }}
                            </div>
                            <div class="artist-avatar-name">
                                <div class="avatar">
                                    <div class="asset">
                                        <img
                                            class="avatar-placeholder"
                                            :src="avatar"
                                            alt="Avatar Placeholder"
                                        />
                                    </div>
                                </div>
                                <div class="nft-artist">
                                    {{ name }}
                                </div>
                            </div>
                        </div>
                        <div class="additional-info">
                            <div class="price-div">
                                <div class="price">Price</div>
                                <div class="eth">{{ eth }} ETH</div>
                            </div>
                            <div class="highest-bid-div">
                                <div class="highest-bid">Highest Bid</div>
                                <div class="w-eth">{{ wETH }} wETH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        info: String,
        avatar: String,
        name: String,
        eth: String,
        wETH: String
    }
}
</script>

<style scoped>
.nft-cards-grid {
    background-color: transparent;
    border: 1px none;
    gap: 60px;
    height: auto;
}

.nft-cards-row {
    align-items: center;
    background-color: transparent;
    border: 1px none;
    display: grid;
    gap: 30px;
    height: auto;
    position: relative;
    width: 335px;
}

.nft-card {
    align-items: center;
    background-color: var(--background---secondary);
    border: 1px none;
    border-radius: 20px;
    cursor: pointer;
    display: grid;
    flex: 1;
    flex-direction: column;
    height: 469px;
    mix-blend-mode: normal;
    pointer-events: auto;
    position: relative;
    transition: all 0.3s ease;
}

.image {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    border-radius: 20px 20px 0 0;
    display: grid;
    flex-direction: column;
    gap: 10px;
    height: auto;
    position: relative;
}

.image-placeholder {
    background-color: transparent;
    height: auto;
    min-width: 340px;
    object-fit: cover;
}

.nft-info {
    background-color: transparent;
    border: 1px none;
    display: grid;
    gap: 25px;
    padding: 20px 30px 25px;
}

.artist-info {
    background-color: transparent;
    border: 1px none;
    display: grid;
    gap: 5px;
    height: auto;
}

.nft-name {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 30.8px;
    margin-top: -1px;
    font-size: var(--font-size-l);
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
}

.artist-avatar-name {
    place-items: start;
    background-color: transparent;
    border: 1px none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    height: auto;
}

.asset {
    background-color: transparent;
    border: 1px none;
    height: 24px;
    min-width: 24px;
    position: relative;
}

.avatar-placeholder {
    background-color: transparent;
    height: 24px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 24px;
}

.nft-artist {
    letter-spacing: 0px;
    margin-top: -1px;
    font-size: var(--font-size-m);
    font-family: var(--font-family-space_mono);
    position: relative;
    text-align: left;
    white-space: nowrap;
}

.additional-info {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border-bottom-style: none;
    border-left-style: none;
    border-right-style: none;
    border-style: none;
    border-top-style: none;
    display: flex;
    height: auto;
    position: relative;
}

.price-div {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;
    height: auto;
    padding: 0 21px 0 0;
    position: relative;
}

.price {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 13.2px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    font-family: var(--font-family-space_mono);
    color: var(--caption--label-text);
    white-space: nowrap;
}

.eth {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
    font-family: var(--font-family-space_mono);
}

.highest-bid-div {
    align-items: flex-end;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;
    height: auto;
    justify-content: center;
    position: relative;
}

.highest-bid {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 13.2px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: right;
    font-family: var(--font-family-space_mono);
    color: var(--caption--label-text);
    white-space: nowrap;
}

.w-eth {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    font-family: var(--font-family-space_mono);
    position: relative;
    text-align: right;
    white-space: nowrap;
}
</style>
