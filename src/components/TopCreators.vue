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
    <div class="grid">
      <Creator
          v-for="(creator, index) in creators"
          :key="index"
          :avatar="creator.avatar"
          :dish_studio="creator.dish_studio"
          :price="creator.price"
          :number="creator.number"
      ></Creator>
      <Creator
          v-for="(creator, index) in creators2"
          :key="index"
          :avatar="creator.avatar"
          :dish_studio="creator.dish_studio"
          :price="creator.price"
          :number="creator.number"
      ></Creator>
      <Creator
          v-for="(creator, index) in creators3"
          :key="index"
          :avatar="creator.avatar"
          :dish_studio="creator.dish_studio"
          :price="creator.price"
          :number="creator.number"
      ></Creator>
    </div>
  </div>
</template>

<script>
import Heading from "./UI/Heading.vue";
import SubHeading from "./UI/SubHeading.vue";
import MyButton from "./UI/MyButton.vue";
import Creator from "./UI/Creator.vue";

export default {
  components: {Creator, MyButton, Heading, SubHeading},
  data() {
    return {
      creators: [
        {
          id: 1,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-3@2x.png",
          dish_studio: "Keepitreal",
          price: "34.53 ETH",
          number: "1"
        },
        {
          id: 2,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-4@2x.png",
          dish_studio: "Digilab",
          price: "34.53 ETH",
          number: "2"
        },
        {
          id: 3,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-5@2x.png",
          dish_studio: "Gravityone",
          price: "34.53 ETH",
          number: "3"
        },
        {
          id: 4,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-6@2x.png",
          dish_studio: "Gravityone",
          price: "34.53 ETH",
          number: "4"
        },
      ],
      creators2: [
        {
          id: 5,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-7@2x.png",
          dish_studio: "Bluewhale",
          price: "34.53 ETH",
          number: "5"
        },
        {
          id: 6,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-8@2x.png",
          dish_studio: "Mr Fox",
          price: "34.53 ETH",
          number: "6"
        },
        {
          id: 7,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-9@2x.png",
          dish_studio: "Shroomie",
          price: "34.53 ETH",
          number: "7"
        },
        {
          id: 8,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-10@2x.png",
          dish_studio: "Robotica",
          price: "34.53 ETH",
          number: "8"
        },
      ],
      creators3: [
        {
          id: 9,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-11@2x.png",
          dish_studio: "Rustyrobot",
          price: "34.53 ETH",
          number: "9"
        },
        {
          id: 10,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-12@2x.png",
          dish_studio: "Animakid",
          price: "34.53 ETH",
          number: "10"
        },
        {
          id: 11,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-13@2x.png",
          dish_studio: "Dotgu",
          price: "34.53 ETH",
          number: "11"
        },
        {
          id: 12,
          avatar: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-14@2x.png",
          dish_studio: "Ghibler",
          price: "34.53 ETH",
          number: "12"
        },
      ],
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.top-creators {
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
  align-items: center;
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