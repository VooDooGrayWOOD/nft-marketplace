<template>
  <div class="how-it-works">
    <div class="head">
      <Heading style="font-size: var(--font-size-xxl);">
        How It Works
      </Heading>
      <SubHeading style="font-family: var(--font-family-work_sans); font-size: var(--font-size-l);">
        Find Out Hoe to Get Started
      </SubHeading>
    </div>
    <div class="card-row">
      <div class="info-card">
        <img class="icon"
             src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e7a0c4007a135b1516473/img/icon-18@2x.svg"
             alt="Icon"/>
        <div class="card-details">
          <div class="setup-your-wallet">
            Setup Your Wallet
          </div>
          <p class="set-up-your-wallet-o">
            Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right
            corner.
          </p>
        </div>
      </div>
      <div class="info-card">
        <img class="icon"
             src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e7a0c4007a135b1516473/img/icon-19@2x.svg"
             alt="Icon"/>
        <div class="card-details">
          <div class="setup-your-wallet">
            Create Collection
          </div>
          <p class="set-up-your-wallet-o">
            Upload your work and setup your collection. Add a description, social links and floor price.
          </p>
        </div>
      </div>
      <div class="info-card">
        <img class="icon"
             src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e7a0c4007a135b1516473/img/icon-20@2x.svg"
             alt="Icon"/>
        <div class="card-details">
          <div class="setup-your-wallet">
            Start Earning
          </div>
          <p class="set-up-your-wallet-o">
            Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./UI/Heading.vue";
import SubHeading from "./UI/SubHeading.vue";

export default {
  components: {Heading, SubHeading}
}
</script>

<style scoped>
.how-it-works {
  align-items: center;
  align-self: stretch;
  background-color: var(--background);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: auto;
  mix-blend-mode: normal;
  overflow: hidden;
  padding: 80px 0;
  position: relative;
}

.head {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  position: relative;
  width: 1046px;
}

.card-row {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 30px;
  height: auto;
  margin-left: -80px;
  margin-right: -80px;
  position: relative;
  width: fit-content;
}

.info-card {
  align-items: center;
  align-self: stretch;
  background-color: var(--background---secondary);
  border: 1px none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  mix-blend-mode: normal;
  padding: 10px 30px 30px;
  position: relative;
  width: 330px;
}

.icon {
  background-color: transparent;
  height: 250px;
  min-width: 250px;
  mix-blend-mode: normal;
  position: relative;
}

.card-details {
  align-items: center;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  position: relative;
}

.setup-your-wallet {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 30.8px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  color: var(--text);
  font-family: var(--font-family-work_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 600;
}

.set-up-your-wallet-o {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  mix-blend-mode: normal;
  position: relative;
  text-align: center;
  color: var(--text);
  font-family: var(--font-family-work_sans);
  font-size: var(--font-size-m);
  font-style: normal;
  font-weight: 400;
}
</style>