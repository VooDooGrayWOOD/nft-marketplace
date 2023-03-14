<template>
    <div class="trending-section">
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
                        <div class="artist-card">
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
    margin: 80px auto;
}

.head {
    display: grid;
    place-items: center start;
    gap: 20px;
    width: 1200px;
}

.template {
    display: flex;
    justify-content: center;
}

.collection-slider {
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    position: relative;
    padding-top: 40px;
    width: 350px;
}

.collection-card {
    background-color: var(--background);
    border: 1px none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: auto;
    padding-top: 20px;
    mix-blend-mode: normal;
    position: relative;
    width: 330px;
}

img:hover {
    transform: scale(0.95);
}

.photos-number {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: auto;
    position: relative;
}

.frame {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 15px;
    height: auto;
    position: relative;
}

.primary-photo-placeholder {
    align-self: stretch;
    background-color: transparent;
    cursor: pointer;
    height: 330px;
    min-width: 330px;
    mix-blend-mode: normal;
    object-fit: cover;
    pointer-events: auto;
    position: relative;
    transition: all 0.3s ease;
}

.secondary-photo-placeholder {
    background-color: transparent;
    cursor: pointer;
    flex: 1;
    height: 100px;
    min-width: 100px;
    mix-blend-mode: normal;
    object-fit: cover;
    pointer-events: auto;
    position: relative;
    transition: all 0.3s ease;
}

.number-of-additional {
    align-items: center;
    background-color: var(--call-to-action);
    border: 1px none;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    height: 100px;
    min-width: 100px;
    justify-content: center;
    mix-blend-mode: normal;
    padding: 32px 15px;
    pointer-events: auto;
    position: relative;
    transition: all 0.3s ease;
}

.number-of-additional:hover {
    transform: scale(0.95);
}

.x1025 {
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 35.2px;
    margin-top: -0.5px;
    mix-blend-mode: normal;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
    color: var(--text);
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
}

.collection-info {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: auto;
    position: relative;
}

.collection-name {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 30.8px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
}

.artist-card {
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    height: auto;
    position: relative;
}

.artist-name {
    background-color: transparent;
    flex: 1;
    letter-spacing: 0px;
    line-height: 22.4px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
}

.avatar {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    cursor: pointer;
    display: flex;
    gap: 10px;
    height: auto;
    mix-blend-mode: normal;
    pointer-events: auto;
    position: relative;
    transition: all 0.3s ease;
    width: fit-content;
}

.artist-name {
    background-color: transparent;
    flex: 1;
    letter-spacing: 0px;
    line-height: 22.4px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
}
</style>
