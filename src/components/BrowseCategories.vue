<template>
  <div class="browse-categories">
    <div class="head">
      <Heading style="font-size: var(--font-size-xxl);">
        Browse Categories
      </Heading>
    </div>
    <div class="category-cards-grid">
      <div class="category-cards-row">
        <div class="grid">
          <CategoryCard
              v-for="(category, index) in categories"
              :key="index"
              :image="category.categories_image"
              :icon="category.categories_icon"
              :name="category.categories_name"
          ></CategoryCard>
          <CategoryCard
              v-for="(category, index) in categories2"
              :key="index"
              :image="category.categories_image"
              :icon="category.categories_icon"
              :name="category.categories_name"
          ></CategoryCard>
        </div>
      </div>
      <div class="category-cards-row"></div>
    </div>
  </div>
</template>

<script>
import Heading from "./UI/Heading.vue";
import CategoryCard from "./UI/CategoryCard.vue";

export default {
  components: {CategoryCard, Heading},
  data() {
    return {
      categories: [
        {
          id: 1,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/paintbrush@2x.svg",
          categories_name: "Art"
        },
        {
          id: 2,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-1@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/swatches@2x.svg",
          categories_name: "Collectibles"
        },
        {
          id: 3,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-2@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/musicnotes@2x.svg",
          categories_name: "Music"
        },
        {
          id: 4,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-3@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/camera@2x.svg",
          categories_name: "Photography"
        },
      ],
      categories2: [
        {
          id: 5,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-4@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/videocamera@2x.svg",
          categories_name: "Video"
        },
        {
          id: 6,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-5@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/magicwand@2x.svg",
          categories_name: "Utility"
        },
        {
          id: 7,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-6@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/basketball@2x.svg",
          categories_name: "Sport"
        },
        {
          id: 8,
          categories_image: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-7@2x.png",
          categories_icon: "https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/planet@2x.svg",
          categories_name: "Virtual Worlds"
        },
      ]
    }
  }
}
</script>

<style scoped>
.browse-categories {
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

.head {
  align-items: flex-start;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  position: relative;
  width: 1050px;
}

.category-cards-grid {
  align-items: center;
  background-color: transparent;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: auto;
  margin-left: -80px;
  margin-right: -80px;
  position: relative;
  width: 1025px;
}

.category-cards-row {
  align-items: center;
  align-self: stretch;
  background-color: transparent;
  border: 1px none;
  display: flex;
  gap: 30px;
  height: auto;
  position: relative;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
</style>