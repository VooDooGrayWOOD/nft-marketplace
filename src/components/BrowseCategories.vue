<template>
    <div class="browse-categories">
        <div class="head">
            <Heading style="font-size: var(--font-size-xxl)">
                Browse Categories
            </Heading>
        </div>
        <div class="category-cards_grid">
            <div class="category-cards_row">
                <div class="grid-categories">
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
        </div>
    </div>
</template>

<script>
import Heading from './UI/Heading.vue'
import CategoryCard from './UI/CategoryCard.vue'

export default {
    components: { CategoryCard, Heading },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/paintbrush@2x.svg',
                    categories_name: 'Art'
                },
                {
                    id: 2,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-1@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/swatches@2x.svg',
                    categories_name: 'Collectibles'
                },
                {
                    id: 3,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-2@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/musicnotes@2x.svg',
                    categories_name: 'Music'
                },
                {
                    id: 4,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-3@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/camera@2x.svg',
                    categories_name: 'Photography'
                }
            ],
            categories2: [
                {
                    id: 5,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-4@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/videocamera@2x.svg',
                    categories_name: 'Video'
                },
                {
                    id: 6,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-5@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/magicwand@2x.svg',
                    categories_name: 'Utility'
                },
                {
                    id: 7,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-6@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/basketball@2x.svg',
                    categories_name: 'Sport'
                },
                {
                    id: 8,
                    categories_image:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-7@2x.png',
                    categories_icon:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/planet@2x.svg',
                    categories_name: 'Virtual Worlds'
                }
            ]
        }
    }
}
</script>

<style scoped>
.browse-categories {
    background-color: var(--background);
    border: 1px none;
    display: grid;
    gap: 60px;
}

.category-cards_row {
    background-color: transparent;
    border: 1px none;
    display: grid;
    gap: 30px;
}

.grid-categories {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
}
</style>
