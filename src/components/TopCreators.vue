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
        <my-button class="view-rankings">
          <img
              class="rocket-launch"
              src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-1@2x.svg"
              alt="RocketLaunch">
          <div>View Rankings</div>
        </my-button>
      </div>
    </div>
    <Creator></Creator>
  </div>
</template>

<script>
import Heading from "./UI/Heading.vue";
import SubHeading from "./UI/SubHeading.vue";
import MyButton from "./UI/MyButton.vue";
import Creator from "./UI/Creator.vue";

export default {
  components: {Creator, MyButton, Heading, SubHeading},

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
  padding: 0 50px;
  pointer-events: auto;
  position: relative;
  transition: all 0.3s ease;
  width: fit-content;
}
</style>