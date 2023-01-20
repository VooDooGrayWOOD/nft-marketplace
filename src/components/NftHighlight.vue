<template>
  <div class="nft-highlight">
    <div class="nft-info">
      <div class="frame-highlight">
        <div class="nft-artist-name-button">
          <a href="artist-page-desktop">
            <div class="artist-card">
              <div class="avatar">
                <div class="asset">
                  <img
                      class="avatar-placeholder"
                      src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-83@2x.png"
                      alt="Avatar Placeholder"/>
                </div>
              </div>
              <div class="dish-studio">
                Shroomie
              </div>
            </div>
          </a>
          <div class="magic-mashrooms">
            Magic Mashrooms
          </div>
          <a href="nft-page-desktop">
            <my-button class="button-div">
              <img
                  class="icon-eye"
                  src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/eye@2x.svg"
                  alt="icon-eye">
              <div class="button">
                See NFT
              </div>
            </my-button>
          </a>
        </div>
        <div class="auction-timer">
          <div class="auction-ends-in">
            Auction ends in:
          </div>
          <div class="timer">
            <div class="hours">
              <div class="x59">
                23
              </div>
              <div class="hours-name">
                Hours
              </div>
            </div>
            <div class="x-semi">
              :
            </div>
            <div class="minutes">
              <div class="x59">
                59
              </div>
              <div class="minutes-name">
                Minutes
              </div>
            </div>
            <div class="x-semi">:</div>
            <div class="seconds">
              <div class="x59">
                59
              </div>
              <div class="seconds-name">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";

export default {
  components: {MyButton}
}
</script>

<style scoped>
.nft-highlight {
  align-items: center;
  align-self: stretch;
  background-color: transparent;
  background-image: url(https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/nft-highlight@1x.png);
  background-position: 50% 50%;
  background-size: cover;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: auto;
  mix-blend-mode: normal;
  position: relative;
}

.nft-info {
  align-items: flex-end;
  align-self: stretch;
  background: linear-gradient(180deg, rgba(162.00005114078522, 89.00000989437103, 255, 0) 0%, rgb(162.00000554323196, 89.00000229477882, 255) 100%);
  background-color: transparent;
  border: 1px none;
  display: flex;
  height: auto;
  justify-content: center;
  mix-blend-mode: normal;
  padding: 360px 195px 60px;
  position: relative;
}

.frame-highlight {
  align-items: flex-end;
  background-color: transparent;
  border: 1px none;
  display: flex;
  height: auto;
  justify-content: center;
  position: relative;
  width: 1050px;
}

.nft-artist-name-button {
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

.artist-card {
  align-items: center;
  background-color: var(--background---secondary);
  border: 1px none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: auto;
  mix-blend-mode: normal;
  padding: 10px 20px;
  position: relative;
  width: fit-content;
}

.magic-mashrooms {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 30px;
  height: auto;
  position: relative;
  color: var(--text);
  font-family: var(--font-family-work_sans);
  font-size: var(--font-size-xxxl);
  font-style: normal;
  font-weight: 600;
}

.button-div {
  align-items: center;
  background-color: var(--text);
  border: 1px none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 60px;
  justify-content: center;
  mix-blend-mode: normal;
  padding: 22px 50px;
  pointer-events: auto;
  position: relative;
  transition: all 0.3s ease;
  width: fit-content;
}

.icon-eye {
  background-color: transparent;
  height: 20px;
  margin-bottom: -2px;
  margin-top: -2px;
  min-width: 20px;
  position: relative;
}

.button {
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  margin-bottom: -2px;
  margin-top: -4px;
  mix-blend-mode: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
  color: var(--background);
  font-family: var(--font-family-work_sans);
  font-size: var(--font-size-m);
  font-style: normal;
  font-weight: 600;
}

.auction-timer {
  -webkit-backdrop-filter: blur(10px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(10px) brightness(100%);
  background-color: var(--masala);
  border: 1px none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  justify-content: flex-end;
  mix-blend-mode: normal;
  padding: 30px;
  position: relative;
  width: 295px;
}

.auction-ends-in {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 13.2px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
  color: var(--text);
  font-family: var(--font-family-space_mono);
  font-size: var(--font-size-s);
  font-style: normal;
  font-weight: 400;
}

.timer {
  align-items: flex-start;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 10px;
  height: auto;
  position: relative;
}

.hours, .minutes, .seconds {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
  height: auto;
  position: relative;
  color: var(--text);
  font-family: var(--font-family-space_mono);
  font-size: var(--font-size-s);
  font-style: normal;
  font-weight: 400;
}

.x59 {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 45.6px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
  color: var(--text);
  font-family: var(--font-family-space_mono);
  font-size: var(--font-size-xxl);
  font-style: normal;
  font-weight: 700;
}

.hours-name, .minutes-name, .seconds-name {
  align-self: stretch;
  background-color: transparent;
  flex: 1;
  letter-spacing: 0.00px;
  line-height: 13.2px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
}

.x-semi {
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 39.2px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
  width: fit-content;
  color: var(--text);
  font-family: var(--font-family-space_mono);
  font-size: var(--font-size-xl);
  font-style: normal;
  font-weight: 700;
}

</style>