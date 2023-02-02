<template>
    <div class="head">
        <Heading style="font-size: var(--font-size-xxl)">
            Trending Collection
        </Heading>
        <SubHeading
            style="
                font-family: var(--font-family-work_sans);
                font-size: var(--font-size-l);
            "
        >
            Checkout Our Weekly Updated Trending Collection.
        </SubHeading>
    </div>
    <div class="trending-section">
        <div class="template">
            <TrendingImage :image="image"></TrendingImage>
        </div>
    </div>
</template>
<script>
import Heading from './UI/Heading.vue'
import SubHeading from './UI/SubHeading.vue'
import TrendingImage from './UI/TrendingImage.vue'

export default {
    components: { Heading, SubHeading, TrendingImage },
    data() {
        return {
            image: [
                {
                    id: 1,
                    primary_photo:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/primary-photo-placeholder-12@2x.png',
                    secondary_photo1:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-24@2x.png',
                    secondary_photo2:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-25@2x.png',
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-83@2x.png',
                    collection: 'Magic Mushrooms',
                    artist: 'Shroomie'
                },
                {
                    id: 2,
                    primary_photo:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/primary-photo-placeholder-11@2x.png',
                    secondary_photo1:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-22@2x.png',
                    secondary_photo2:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-23@2x.png',
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-82@2x.png',
                    collection: 'Dsgn Animals',
                    artist: 'MrFox'
                },
                {
                    id: 3,
                    primary_photo:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/primary-photo-placeholder-2@2x.png',
                    secondary_photo1:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-4@2x.png',
                    secondary_photo2:
                        'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-5@2x.png',
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-2@2x.png',
                    collection: 'Disco Machines',
                    artist: 'BeKind2Robots'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.head {
    grid-column: 1 / 4 span;
    margin: 0 auto;
    padding: 70px 0;
    place-content: start;
    gap: 10px;
}

.trending-section {
    display: grid;
    grid-column: 1 / 12 span;
    margin: 0 auto;
    padding: 70px 0;
    place-content: start;
    gap: 10px;
}
</style>
