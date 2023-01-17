<template>
  <div class="artist-card-grid" v-for="(creator, index) in creators" :key="index">
    <div class="artist-card-row">
      <a href="artist-page">
        <div class="artist-card">
          <div class="artist-avatar">
            <div class="avatar">
              <div class="asset">
                <img class="avatar-placeholder"
                     :src="creator.avatar"
                     alt="Avatar Placeholder">
              </div>
            </div>
          </div>
          <div class="artist-info">
            <div class="dish-studio">
              {{ creator.dish_studio }}
            </div>
            <div class="additional-info">
              <div class="total-sales">Total Sales:</div>
              <div class="price">{{ creator.price }}</div>
            </div>
          </div>
          <div class="ranking-number">
            <div class="number">{{ creator.number }}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
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
      ]
    }
  }
}

</script>

<style scoped>
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
  font-size: var(--font-size-l);
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