<template>
    <div class="artist-card-grid">
        <div class="artist-card-row">
            <a href="artist-page">
                <div class="artist-card">
                    <div class="artist-avatar">
                        <div class="avatar">
                            <div class="asset">
                                <img
                                    class="avatar-placeholder"
                                    :src="avatar"
                                    alt="Avatar Placeholder"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="artist-info">
                        <div class="dish-studio">
                            {{ dish_studio }}
                        </div>
                        <div class="additional-info">
                            <div class="total-sales">Total Sales:</div>
                            <div class="price">{{ price }}</div>
                        </div>
                    </div>
                    <div class="ranking-number">
                        <div class="number">{{ number }}</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        avatar: String,
        dish_studio: String,
        price: String,
        number: String
    }
}
</script>

<style scoped>
.artist-card-grid {
    display: grid;
}

.artist-card {
    background-color: var(--background---secondary);
    border: 1px none;
    border-radius: 20px;
    cursor: pointer;
    display: grid;
    width: 240px;
    height: auto;
    position: relative;
    transition: all 0.3s ease;
}

.artist-avatar {
    width: 240px;
}

.avatar {
    margin: 20px 65px 0 65px;
}

.asset {
    background-color: transparent;
    border: 1px none;
    height: 120px;
    /* margin-right: -10px; */
    min-width: 120px;
    mix-blend-mode: normal;
    position: relative;
}

.avatar-placeholder {
    background-color: transparent;
    height: 120px;
    width: 120px;
    object-fit: cover;
    position: absolute;
    top: 0;
}

.artist-info {
    display: grid;
    grid-row: 2;
    place-items: center;
    gap: 5px;
    margin: 20px;
}

.dish-studio {
    letter-spacing: 0px;
    line-height: 30.8px;
    margin-top: -1px;
    font-size: var(--font-size-l);
    text-align: center;
    white-space: nowrap;
}

.additional-info {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
}

.total-sales {
    background-color: transparent;
    /* flex: 1; */
    letter-spacing: 0px;
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
    letter-spacing: 0px;
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
    display: grid;
    align-items: center;
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
    left: 11px;
    letter-spacing: 0px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: absolute;
    color: var(--caption--label-text);
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-m);
    text-align: center;
    top: 4px;
    white-space: nowrap;
    width: auto;
}
</style>
