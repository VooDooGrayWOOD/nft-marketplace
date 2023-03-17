<template>
    <div class="trending-section">
        <div class="head-template">
            <div class="heading">
                <Heading>
                    Trending Collection
                </Heading>
                <SubHeading
                >
                    Checkout Our Weekly Updated Trending Collection.
                </SubHeading>
            </div>
            <div class="template">
                <div class="collection-slider" v-for="img in image">
                    <div class="collection-card">
                        <div class="photos-number">
                            <a href="nft-page-desktop">
                                <img
                                    class="primary-photo-placeholder"
                                    :src="img.primary_photo"
                                    alt="Primary Photo Placeholder"
                                />
                            </a>
                            <div class="frame">
                                <a href="nft-page-desktop">
                                    <img
                                        class="secondary-photo-placeholder"
                                        :src="img.secondary_photo1"
                                        alt="Secondary Photo Placeholder"
                                    />
                                </a>
                                <a href="nft-page-desktop">
                                    <img
                                        class="secondary-photo-placeholder"
                                        :src="img.secondary_photo2"
                                        alt="Secondary Photo Placeholder"
                                    />
                                </a>
                                <a href="nft-page-desktop">
                                    <div class="number-of-additional">
                                        <div class="x1025">1025+</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="collection-info" key="img.id">
                            <Heading style="font-size: 20px">
                                {{ img.collection }}
                            </Heading>
                            <div class="artist-card_trending">
                                <a href="artist-page-tablet">
                                    <div class="avatar">
                                        <div class="asset">
                                            <img
                                                class="avatar-placeholder"
                                                :src="img.avatar"
                                                alt="Avatar Placeholder"
                                            />
                                        </div>
                                    </div>
                                </a>
                                <SubHeading style="font-size: 15px">
                                    {{ img.artist }}
                                </SubHeading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Heading from './UI/Heading.vue'
import SubHeading from './UI/SubHeading.vue'

export default {
    components: { Heading, SubHeading },
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
.trending-section {
    display: grid;
    grid-column: 1 / 12 span;
    margin: 0 auto;
}

.heading {
    display: grid;
    place-items: center start;
    gap: 20px;
    height: auto;
    margin: 0 15px;
}

.template {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    // text-align: center;
    place-items: center;
}

.collection-slider {
    display: grid;
    place-items: center;
    gap: 10px;
    height: auto;
    padding-top: 40px;
    // width: 350px;
}

.collection-card {
    background-color: var(--background);
    display: grid;
    gap: 15px;
    height: auto;
    padding-top: 20px;
    max-width: 330px;
}

img:hover {
    transform: scale(0.95);
}

.photos-number {
    display: grid;
    gap: 15px;
}

.frame {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.primary-photo-placeholder {
    align-self: stretch;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.secondary-photo-placeholder {
    cursor: pointer;
    height: 100px;
    min-width: 100px;
    transition: all 0.3s ease;
}

.number-of-additional {
    align-items: center;
    background-color: var(--call-to-action);
    border-radius: 20px;
    cursor: pointer;
    height: 100px;
    min-width: 100px;
    padding: 32px 15px;
    transition: all 0.3s ease;
}

.number-of-additional:hover {
    transform: scale(0.95);
}

.x1025 {
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-l);
}

.collection-info {
    display: grid;
    gap: 10px;
}

.artist-card_trending {
    border-radius: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 12px;
}

@media screen and (max-width: 1020px) {
    .template {
        grid-template-columns: repeat(2, 1fr);
    }
    .collection-slider:last-child {
        display: none;
    }
}

@media screen and (max-width: 790px) {
    .template {
        grid-template-columns: repeat(1, 1fr);
    }
    .head-template {
        place-items: center;
        margin: 0 15px;
    }
    .collection-slider:nth-child(2) {
        display: none;
    }
    .collection-card {
        width: 315px;
    }

    .primary-photo-placeholder {
        width: 315px;
    }

    .frame {
        gap: 8px;
    }
}
</style>
