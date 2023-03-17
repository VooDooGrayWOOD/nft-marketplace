<template>
    <div>
        <a href="marketplace-desktop">
            <div class="category-card">
                <div class="photo-icon">
                    <div class="image-placeholder-div">
                        <img
                            class="image-placeholder"
                            :src="image"
                            alt="Image Placeholder"
                        />
                    </div>
                    <div class="category-icon">
                        <img class="paint-brush" :src="icon" alt="PaintBrush" />
                    </div>
                </div>
                <div class="collection-name">
                    <div class="category-name">{{ name }}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        icon: String,
        name: String
    }
}
</script>

<style scoped>
.category-card {
    /* align-items: center; */
    background-color: var(--background---secondary);
    /* border: 1px none; */
    border-radius: 20px;
    cursor: pointer;
    display: grid;
    /* grid: 1; */
    /* flex-direction: column; */
    /* height: auto; */
    /* mix-blend-mode: normal;
  pointer-events: auto; */
    /* position: relative; */
    transition: all 0.3s ease;
}

.photo-icon {
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    border-radius: 20px 20px 0 0;
    height: 240px;
    min-width: 240px;
    position: relative;
}

.image-placeholder-div {
    background-color: transparent;
    border: 1px none;
    height: 240px;
    left: 0;
    mix-blend-mode: normal;
    position: absolute;
    top: 0;
    width: 240px;
}

.image-placeholder {
    background-color: transparent;
    height: 240px;
    left: 0;
    mix-blend-mode: normal;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 240px;
}

.category-icon {
    -webkit-backdrop-filter: blur(15px) brightness(100%);
    align-items: center;
    backdrop-filter: blur(15px) brightness(100%);
    background-color: var(--white);
    border: 1px none;
    border-radius: 20px 20px 0 0;
    display: grid;
    gap: 10px;
    height: 240px;
    justify-content: center;
    left: 0;
    mix-blend-mode: normal;
    position: absolute;
    top: 0;
    width: 240px;
}

.paint-brush {
    background-color: transparent;
    cursor: pointer;
    height: 100px;
    min-width: 100px;
    pointer-events: auto;
    position: relative;
    transition: all 0.3s ease;
}

.collection-name {
    font-size: var(--font-size-l);
    align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    border: 1px none;
    display: grid;
    flex-direction: column;
    gap: 25px;
    height: auto;
    padding: 20px 30px 25px;
    position: relative;
}

.category-name {
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
</style>
