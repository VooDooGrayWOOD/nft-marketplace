<template>
    <div class="discover-more-nfts">
        <div class="headline-button">
            <div class="head">
                <Heading style="font-size: var(--font-size-xxl)">
                    Discover More NFTS
                </Heading>
                <SubHeading
                    style="
                        font-family: var(--font-family-work_sans);
                        font-size: var(--font-size-l);
                    "
                >
                    Explore New Trending Nfts
                </SubHeading>
            </div>
            <div>
                <my-button class="see-all">
                    <img
                        class="icon-eye"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/eye@2x.svg"
                        alt="icon-eye"
                    />
                    <div>See all</div>
                </my-button>
            </div>
        </div>
        <div class="grid">
            <DiscoverItems
                v-for="(content, index) in discover_content"
                :key="index"
                :image="content.image"
                :info="content.info"
                :avatar="content.avatar"
                :name="content.name"
                :eth="content.eth"
                :wETH="content.wETH"
            ></DiscoverItems>
        </div>
    </div>
</template>

<script>
import Heading from './UI/Heading.vue'
import SubHeading from './UI/SubHeading.vue'
import MyButton from './UI/MyButton.vue'
import DiscoverItems from './UI/DiscoverItems.vue'

export default {
    components: { DiscoverItems, Heading, SubHeading, MyButton },
    data() {
        return {
            discover_content: [
                {
                    id: 1,
                    image: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-8@2x.png',
                    info: 'Distant Galaxy',
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-90@2x.png',
                    name: 'MoonDancer',
                    eth: '1.63',
                    wETH: '0.33'
                },
                {
                    id: 2,
                    image: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-9@2x.png',
                    info: 'Life On Edena',
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-91@2x.png',
                    name: 'NebulaKId',
                    eth: '1.63',
                    wETH: '0.33'
                },
                {
                    id: 3,
                    image: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/image-placeholder-10@2x.png',
                    info: 'Astrofiction',
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-17@2x.png',
                    name: 'Spaceone',
                    eth: '1.63',
                    wETH: '0.33'
                }
            ]
        }
    }
}
</script>

<style scoped>
.discover-more-nfts {
    background-color: var(--background);
    display: grid;
    gap: 30px;
    margin: 80px 0 0;
}

.headline-button {
    background-color: transparent;
    grid-template-columns: repeat(12, 1fr);
    border: 1px none;
    display: grid;
    gap: 30px;
}

.head {
    background-color: transparent;
    border: 1px none;
    display: grid;
    grid-column: 1/11 span;
    gap: 10px;
    height: auto;
}

.see-all {
    background-color: transparent;
    border: 2px solid;
    border-color: var(--call-to-action);
    border-radius: 20px;
    cursor: pointer;
    gap: 15px;
    padding: 0 50px;
    transition: all 0.3s ease;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 20px;
}
</style>
