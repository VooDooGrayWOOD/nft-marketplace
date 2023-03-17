<template>
    <div class="top-creators">
        <div class="headline-button">
            <div class="head">
                <Heading> Top Creators </Heading>
                <SubHeading>
                    Checkout Top Rated Creators On The Nft Marketplace.
                </SubHeading>
            </div>
            <div class="button">
                <my-button class="view-rankings">
                    <img
                        class="rocket-launch"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/rocketlaunch-1@2x.svg"
                        alt="RocketLaunch"
                    />
                    <div>View Rankings</div>
                </my-button>
            </div>
        </div>
        <div class="grid-creators">
            <Creator
                v-for="(creator, index) in creators"
                :key="index"
                :avatar="creator.avatar"
                :dish_studio="creator.dish_studio"
                :price="creator.price"
                :number="creator.number"
            ></Creator>
            <Creator
                v-for="(creator, index) in creators2"
                :key="index"
                :avatar="creator.avatar"
                :dish_studio="creator.dish_studio"
                :price="creator.price"
                :number="creator.number"
            ></Creator>
            <Creator
                v-for="(creator, index) in creators3"
                :key="index"
                :avatar="creator.avatar"
                :dish_studio="creator.dish_studio"
                :price="creator.price"
                :number="creator.number"
            ></Creator>
        </div>
    </div>
</template>

<script>
import Heading from './UI/Heading.vue'
import SubHeading from './UI/SubHeading.vue'
import MyButton from './UI/MyButton.vue'
import Creator from './UI/Creator.vue'

export default {
    components: { Creator, MyButton, Heading, SubHeading },
    data() {
        return {
            creators: [
                {
                    id: 1,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-3@2x.png',
                    dish_studio: 'Keepitreal',
                    price: '34.53 ETH',
                    number: '1'
                },
                {
                    id: 2,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-4@2x.png',
                    dish_studio: 'Digilab',
                    price: '34.53 ETH',
                    number: '2'
                },
                {
                    id: 3,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-5@2x.png',
                    dish_studio: 'Gravityone',
                    price: '34.53 ETH',
                    number: '3'
                },
                {
                    id: 4,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-6@2x.png',
                    dish_studio: 'Juanie',
                    price: '34.53 ETH',
                    number: '4'
                }
            ],
            creators2: [
                {
                    id: 5,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-7@2x.png',
                    dish_studio: 'Bluewhale',
                    price: '34.53 ETH',
                    number: '5'
                },
                {
                    id: 6,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-8@2x.png',
                    dish_studio: 'Mr Fox',
                    price: '34.53 ETH',
                    number: '6'
                },
                {
                    id: 7,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-9@2x.png',
                    dish_studio: 'Shroomie',
                    price: '34.53 ETH',
                    number: '7'
                },
                {
                    id: 8,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-10@2x.png',
                    dish_studio: 'Robotica',
                    price: '34.53 ETH',
                    number: '8'
                }
            ],
            creators3: [
                {
                    id: 9,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-11@2x.png',
                    dish_studio: 'Rustyrobot',
                    price: '34.53 ETH',
                    number: '9'
                },
                {
                    id: 10,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-12@2x.png',
                    dish_studio: 'Animakid',
                    price: '34.53 ETH',
                    number: '10'
                },
                {
                    id: 11,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-13@2x.png',
                    dish_studio: 'Dotgu',
                    price: '34.53 ETH',
                    number: '11'
                },
                {
                    id: 12,
                    avatar: 'https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-14@2x.png',
                    dish_studio: 'Ghibler',
                    price: '34.53 ETH',
                    number: '12'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.top-creators {
    display: grid;
    grid-column: 1 / 12 span;
    margin: 0 auto;
    padding: 0;
}

.headline-button {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    place-items: center start;
    gap: 20px;
    height: auto;
    margin: 80px 15px 0;
}

.head {
    display: grid;
    grid-column: 1 / 11 span;
    gap: 10px;
    width: auto;
}

.button {
    place-items: center end;
}

.view-rankings {
    background-color: transparent;
    border: 2px solid;
    border-color: var(--call-to-action);
    cursor: pointer;
    padding: 0 50px;
    transition: all 0.3s ease;
}

.grid-creators {
    margin-top: 60px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    place-items: center;
}
</style>
