<template>
  <div class="top-creators">
    <div class="headline-button">
      <div class="head">
        <Heading style="font-size: var(--font-size-xxl);">
          Top Creators
        </Heading>
        <SubHeading style="font-family: var(--font-family-work_sans); font-size: var(--font-size-l);">
          Checkout Top Rated Creators On The Nft Marketplace.
        </SubHeading>
      </div>
      <div>
        <my-button class="view-rankings"><img class="rocket-launch-xx4t1W" data-id="I1647:23898;1326:14284;1424:1798"
                                              src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-1@2x.svg"
                                              anima-src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-1@2x.svg"
                                              alt="RocketLaunch">
          <div>View Rankings</div>
        </my-button>
      </div>
    </div>
    <div class="artist-card-grid">
      <div class="artist-card-row">
        <a href="artist-page">
          <div class="artist-card">
            <div class="artist-avatar">
              <div class="avatar">
                <div class="asset">
                  <img class="avatar-placeholder" data-id="I1647:23898;1326:14288;1288:12907;1379:1356;1379:1351"
                       src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-3@2x.png"
                       anima-src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-3@2x.png"
                       alt="Avatar Placeholder">
                </div>
              </div>
            </div>
            <div class="artist-info">
              <div class="dish-studio">
                Keepitreal
              </div>
              <div class="additional-info">
                <div class="total-sales">Total Sales:</div>
                <div class="price">34.53 ETH</div>
              </div>
            </div>
            <div class="ranking-number">
              <div class="number">1</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./UI/Heading.vue";
import SubHeading from "./UI/SubHeading.vue";
import MyButton from "./UI/MyButton.vue";

export default {
  components: {MyButton, Heading, SubHeading},
}
</script>

<style scoped>
.top-creators {
  align-items: center;
  align-self: stretch;
  background-color: var(--background);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: auto;
  mix-blend-mode: normal;
  overflow: hidden;
  padding: 80px 195px;
  position: relative;
}

.headline-button {
  align-items: flex-end;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 100px;
  height: auto;
  margin-left: -80px;
  margin-right: -80px;
  position: relative;
  width: 1050px;
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
  width: 703px;
}

.view-rankings {
  align-items: center;
  background-color: transparent;
  border: 2px solid;
  border-color: var(--call-to-action);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 60px;
  justify-content: center;
  padding: 0px 50px;
  pointer-events: auto;
  position: relative;
  transition: all 0.3s ease;
  width: fit-content;
}

.artist-card-grid {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: auto;
  margin-left: -80px;
  margin-right: -80px;
  position: relative;
  width: fit-content;
}

.artist-card-row {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 30px;
  height: auto;
  position: relative;
  width: 1050px;
}

.artist-card {
  align-items: center;
  background-color: var(--background---secondary);
  border: 1px none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  height: auto;
  mix-blend-mode: normal;
  padding: 20px;
  pointer-events: auto;
  position: relative;
  transition: all 0.3s ease;
}

.artist-avatar {
  align-items: flex-end;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  width: fit-content;
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
  width: 110px;
}

.asset {
  background-color: transparent;
  border: 1px none;
  height: 120px;
  margin-right: -10px;
  min-width: 120px;
  mix-blend-mode: normal;
  position: relative;
}

.avatar-placeholder {
  background-color: transparent;
  height: 120px;
  left: 0;
  mix-blend-mode: normal;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 120px;
}

.artist-info {
  align-items: center;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: auto;
  justify-content: center;
  position: relative;
}

.dish-studio {
  align-self: stretch;
  background-color: transparent;
  letter-spacing: 0.00px;
  line-height: 30.8px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.additional-info {
  align-items: flex-start;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 10px;
  height: auto;
  justify-content: center;
  position: relative;
}

.total-sales {
  background-color: transparent;
  flex: 1;
  letter-spacing: 0.00px;
  color: var(--caption--label-text);
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: right;
  white-space: nowrap;
}

.price {
  background-color: transparent;
  flex: 1;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
  font-style: normal;
  font-size: var(--font-size-m);
  position: relative;
  text-align: left;
  white-space: nowrap;
}

.ranking-number {
  background-color: var(--background);
  border: 1px none;
  border-radius: 20px;
  height: 30px;
  left: 20px;
  mix-blend-mode: normal;
  position: absolute;
  top: 18px;
  width: 30px;
}

.number {
  background-color: transparent;
  height: 22px;
  left: 10px;
  letter-spacing: 0.00px;
  line-height: 22.4px;
  mix-blend-mode: normal;
  position: absolute;
  color: var(--caption--label-text);
  font-family: var(--font-family-space_mono);
  font-size: var(--font-size-m);
  text-align: center;
  top: 3px;
  white-space: nowrap;
  width: auto;
}
</style>