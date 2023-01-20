<template>
  <div class="discover-more-nfts">
    <div class="headline-button">
      <div class="head">
        <Heading style="font-size: var(--font-size-xxl); font-style: italic;">
          Discover More NFTS
        </Heading>
        <SubHeading
            style="font-family: var(--font-family-work_sans); font-size: var(--font-size-l);">
          Explore New Trending Nfts
        </SubHeading>
      </div>
      <div>
        <my-button class="see-all">
          <img
              class="icon-eye"
              src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/eye@2x.svg"
              alt="icon-eye">
          <div>See all</div>
        </my-button>
      </div>
    </div>
    <div class="grid">
      <DiscoverItems
          v-for="(content, index) in discover_content"
          :key="index"
          :image="content.image"
          :info="content.info"
          :avatar="content.avatar"
          :name="content.name"
          :eth="content.eth"
          :wETH="content.wETH"
      ></DiscoverItems>
    </div>
  </div>
</template>

<script>
import Heading from "./UI/Heading.vue";
import SubHeading from "./UI/SubHeading.vue";
import MyButton from "./UI/MyButton.vue";
import DiscoverItems from "./UI/DiscoverItems.vue";

export default {
  components: {DiscoverItems, Heading, SubHeading, MyButton},
  data() {
    return {
      discover_content: [
        {
          id: 1,
          image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-8@2x.png",
          info: "Distant Galaxy",
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-90@2x.png",
          name: "MoonDancer",
          eth: "1.63",
          wETH: "0.33"
        },
        {
          id: 2,
          image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-9@2x.png",
          info: "Life On Edena",
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-91@2x.png",
          name: "NebulaKId",
          eth: "1.63",
          wETH: "0.33"
        },
        {
          id: 3,
          image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-10@2x.png",
          info: "Astrofiction",
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-17@2x.png",
          name: "Spaceone",
          eth: "1.63",
          wETH: "0.33"
        },
      ]
    }
  }
}
</script>

<style scoped>
.discover-more-nfts {
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
  width: 750px;
}

.see-all {
  align-items: center;
  background-color: transparent;
  border: 2px solid;
  border-color: var(--call-to-action);
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  gap: 15px;
  height: 60px;
  justify-content: center;
  padding: 0 50px;
  pointer-events: auto;
  position: relative;
  transition: all 0.3s ease;
  width: fit-content;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
}
</style>