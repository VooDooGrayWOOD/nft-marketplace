<template>
    <div class="trending-image">
        <div v-for="img in image" :key="img.id">
            <div class="collection-card">
                <div>
                    <a href="nft-page-desktop">
                        <img
                            class="primary-photo-placeholder"
                            :src="img.primary_photo"
                            alt="Primary Photo Placeholder"
                        />
                    </a>
                    <div class="secondary-image">
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
                <div>
                    <Heading style="font-size: 20px">
                        {{ img.collection }}
                    </Heading>
                    <div>
                        <a href="artist-page-tablet">
                            <img :src="img.avatar" alt="Avatar Placeholder" />
                        </a>
                    </div>
                    <SubHeading style="font-size: 15px">
                        {{ img.artist }}
                    </SubHeading>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.trending-image {
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 50px 30px;
    margin: 40px auto;
}
.collection-card {
    display: grid;
    gap: 30px;
}

img:hover {
    transform: scale(0.95);
    transition: all 0.3s ease-in;
}

.primary-photo-placeholder {
    height: 330px;
    min-width: 330px;
    object-fit: cover;
}

.secondary-photo-placeholder {
    height: 100px;
    min-width: 100px;
    object-fit: cover;
}

.secondary-image {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.number-of-additional {
    background-color: var(--call-to-action);
    border: 1px none;
    border-radius: 20px;
    display: grid;
    place-items: center;
    height: 100px;
    max-width: 100px;
}

.number-of-additional:hover {
    transition: all 0.3s ease;
    transform: scale(0.95);
}

.x1025 {
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-l);
}
</style>
