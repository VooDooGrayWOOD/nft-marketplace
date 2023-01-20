<template>
  <div class="nft-cards-grid">
    <div class="nft-cards-row">
      <a href="nft-page-desktop">
        <div class="nft-card">
          <div class="image">
            <img class="image-placeholder"
                 :src="image"
                 alt="Image Placeholder"/>
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
                        alt="Avatar Placeholder"/>
                  </div>
                </div>
                <div class="nft-artist">
                  {{ name }}
                </div>
              </div>
            </div>
            <div class="additional-info">
              <div class="price-div">
                <div class="price">
                  Price
                </div>
                <div class="eth">
                  {{ eth }} ETH
                </div>
              </div>
              <div class="highest-bid-div">
                <div class="highest-bid">
                  Highest Bid
                </div>
                <div class="w-eth">
                  {{ wETH }} wETH
                </div>
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
  align-items: center;
  background-color: transparent;
  border: 1px none;
  gap: 60px;
  height: auto;
  position: relative;
  width: fit-content;
}

.nft-cards-row {
  align-items: center;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 30px;
  height: auto;
  position: relative;
  width: 350px;
}

.nft-card {
  align-items: center;
  background-color: var(--background---secondary);
  border: 1px none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  position: relative;
}

.image-placeholder {
  align-self: stretch;
  background-color: transparent;
  height: 296px;
  min-width: 330px;
  mix-blend-mode: normal;
  object-fit: cover;
  position: relative;
}

.nft-info {
  align-items: flex-start;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: auto;
  padding: 20px 30px 25px;
  position: relative;
}

.artist-info {
  align-items: flex-start;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: auto;
  position: relative;
}

.nft-name {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 30.8px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
}

.artist-avatar-name {
  align-items: flex-start;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 12px;
  height: auto;
  position: relative;
}

.avatar {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 10px;
  height: auto;
  mix-blend-mode: normal;
  position: relative;
  width: fit-content;
}

.asset {
  background-color: transparent;
  border: 1px none;
  height: 24px;
  min-width: 24px;
  mix-blend-mode: normal;
  position: relative;
}

.avatar-placeholder {
  background-color: transparent;
  height: 24px;
  left: 0;
  mix-blend-mode: normal;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 24px;
}

.nft-artist {
  background-color: transparent;
  flex: 1;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
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
  letter-spacing: 0.00px;
  line-height: 13.2px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
}

.eth {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
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
  letter-spacing: 0.00px;
  line-height: 13.2px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
}

.w-eth {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  mix-blend-mode: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
}
</style>