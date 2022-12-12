<template >
    <Heading>
        Trending Collection
    </Heading>
    <SubHeading>
        Checkout Our Weekly Updated Trending Collection.
    </SubHeading>
    <div class="collection-slider">
            <div class="collection-card">
                <div class="photos-number">
                    <a href="nft-page-desktop">
                        <img class="primary-photo-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/primary-photo-placeholder-11@2x.png" alt="Primary Photo Placeholder" />
                    </a>
                    <div class="frame">
                        <a href="nft-page-desktop">
                            <img class="secondary-photo-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-22@2x.png" alt="Secondary Photo Placeholder" />
                        </a>
                        <a href="nft-page-desktop">
                            <img class="secondary-photo-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-23@2x.png" alt="Secondary Photo Placeholder" />
                        </a>
                        <a href="nft-page-desktop">
                            <div class="number-of-additional">
                                <div class="x1025" >
                                    1025+
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="collection-info">
                <SubHeading>
                    Dsgn Animals
                </SubHeading>
                <div class="artist-card">
                    <a href="artist-page-tablet">
                        <div class="avatar">
                            <div class="asset">
                                <img class="avatar-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-82@2x.png" alt="Avatar Placeholder" />
                            </div>
                        </div>
                    </a>
                    <SubHeading>
                        MrFox
                    </SubHeading>
                </div>
            </div>
        </div>
        <div class="collection-card">
                <div class="photos-number">
                    <a href="nft-page-desktop">
                        <img class="primary-photo-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/primary-photo-placeholder-12@2x.png" alt="Primary Photo Placeholder" />
                    </a>
                    <div class="frame">
                        <a href="nft-page-desktop">
                            <img class="secondary-photo-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-24@2x.png" alt="Secondary Photo Placeholder" />
                        </a>
                        <a href="nft-page-desktop">
                            <img class="secondary-photo-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/secondary-photo-placeholder-25@2x.png" alt="Secondary Photo Placeholder" />
                        </a>
                        <a href="nft-page-desktop">
                            <div class="number-of-additional">
                                <div class="x1025" >
                                    6+
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="collection-info">
                <SubHeading>
                    Magic Mushrooms
                </SubHeading>
                <div class="artist-card">
                    <a href="artist-page-tablet">
                        <div class="avatar">
                            <div class="asset">
                                <img class="avatar-placeholder" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/avatar-placeholder-83@2x.png" alt="Avatar Placeholder" />
                            </div>
                        </div>
                    </a>
                    <SubHeading>
                        Shroomie
                    </SubHeading>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Heading from './Heading.vue';
import SubHeading from './SubHeading.vue';

export default {
    components: { Heading, SubHeading }
}
</script>
<style lang="scss">
.collection-slider{
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 30px;
    height: auto;
    position: relative;
    width: 690px;
}
.collection-card {
    align-items: flex-start;
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
.x1025 {
    background-color: transparent;
    letter-spacing: 0.00px;
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
    letter-spacing: 0.00px;
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
    letter-spacing: 0.00px;
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
    letter-spacing: 0.00px;
    line-height: 22.4px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
}
</style>