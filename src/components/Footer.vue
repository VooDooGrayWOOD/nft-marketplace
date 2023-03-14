<template>
    <div class="footer">
        <div class="footer-info">
            <div class="nft-marketplace-info">
                <div class="logo">
                    <img
                        class="storefront"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/storefront-7@2x.svg"
                        alt="Storefront"
                    />
                    <img
                        class="nft-marketplace"
                        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/nft-marketplace-3@2x.svg"
                        alt="NFT Marketplace"
                    />
                </div>
                <div class="additional-info">
                    <p class="nft-marketplace-ui">
                        NFT marketplace UI created with Anima for Figma.
                    </p>
                    <div class="community-info">
                        <div class="join-our-community">Join our community</div>
                        <div class="icons">
                            <a href="https://discord.com/" target="_blank">
                                <img
                                    class="discord-logo"
                                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/discordlogo-3@2x.svg"
                                    alt="DiscordLogo"
                                />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank">
                                <img
                                    class="youtube-logo"
                                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/youtubelogo-3@2x.svg"
                                    alt="YoutubeLogo"
                                />
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <img
                                    class="icon-twitter/"
                                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/twitterlogo-3@2x.svg"
                                    alt="icon-twitter"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <img
                                    class="icon-instagram"
                                    src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/instagramlogo-1@2x.svg"
                                    alt="icon-instagram"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="explore-item">
                <div class="explore">Explore</div>
                <div class="pages">
                    <a href="marketplace-desktop">
                        <div class="marketplace">Marketplace</div>
                    </a>
                    <a href="rankings-desktop">
                        <div class="rankings">Rankings</div>
                    </a>
                    <a href="connect-wallet-desktop">
                        <div class="connect-a-wallet">Connect a wallet</div>
                    </a>
                </div>
            </div>
            <div class="subscribe">
                <div class="join-our-weekly-digest">Join Our Weekly Digest</div>
                <div class="subscribe-form-info">
                    <p class="get-exclusive-promot">
                        Get exclusive promotions &amp; updates straight to your
                        inbox.
                    </p>
                    <div class="subscribe-form">
                        <input
                            class="enter-your-email-here"
                            name="enteryouremailhere"
                            placeholder="Enter your email here"
                            type="email"
                            required=""
                        />
                        <a href="#" target="_blank">
                            <my-button class="button-div">
                                <div class="button">Subscribe</div>
                            </my-button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="frame-subscribe">
            <img
                class="divider"
                src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/divider-1@1x.svg"
                alt="Divider"
            />
            <p class="nft-market-use-this-template">
                Ⓒ NFT Market. Use this template freely.
            </p>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
    components: { MyButton }
}
</script>

<style scoped>
.footer {
    width: 100%;
    height: auto;
    align-items: center;
    align-self: stretch;
    background-color: var(--background---secondary);
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;
    mix-blend-mode: normal;
    padding: 40px 195px;
    position: relative;
}

.footer-info {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    height: auto;
    justify-content: space-between;
    margin-left: -79.71px;
    margin-right: -79.71px;
    position: relative;
    width: fit-content;
}

.nft-marketplace-info {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;
    padding: 0 84px 0 0;
    position: relative;
    width: 327.4138488769531px;
}

.logo {
    background-color: transparent;
    height: 32px;
    min-width: 243.41384887695312px;
    position: relative;
}

.storefront {
    background-color: transparent;
    height: 32px;
    left: 0;
    position: absolute;
    top: 0;
    width: 32px;
}

.nft-marketplace {
    background-color: transparent;
    height: 20px;
    left: 44px;
    mix-blend-mode: normal;
    position: absolute;
    top: 9px;
    width: 199px;
}

.additional-info {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    position: relative;
    width: fit-content;
}

.nft-marketplace-ui {
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 22.4px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    width: 238px;
    color: var(--celeste);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}

.community-info {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: auto;
    position: relative;
    width: fit-content;
}

.join-our-community {
    background-color: transparent;
    height: 18px;
    letter-spacing: 0px;
    line-height: 22.4px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
    width: 238px;
    color: var(--celeste);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}

.icons {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    gap: 10px;
    height: auto;
    position: relative;
    width: fit-content;
}

.explore-item {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: auto;
    position: relative;
    width: 240px;
}

.explore,
.join-our-weekly-digest {
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 35.2px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
    width: fit-content;
    color: var(--text);
    font-family: var(--font-family-space_mono);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
}

.pages,
.subscribe-form-info {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    position: relative;
    width: fit-content;
}

.subscribe {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: auto;
    position: relative;
    width: fit-content;
}

.get-exclusive-promot {
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 22.4px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    width: 330px;
    color: var(--celeste);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}

.subscribe-form {
    align-items: center;
    background-color: var(--text);
    border: 2px none;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    height: 60px;
    mix-blend-mode: normal;
    padding: 16px 0px 16px 20px;
    position: relative;
    width: 420px;
}

.enter-your-email-here {
    background-color: transparent;
    border: 0;
    flex: 1;
    height: 22px;
    letter-spacing: 0px;
    line-height: 22.4px;
    min-width: 209px;
    mix-blend-mode: normal;
    padding: 0;
    position: relative;
    resize: none;
    text-align: left;
    white-space: nowrap;
    color: var(--background);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
}

.button {
    padding: 0 10px;
}

.frame-subscribe {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: auto;
    margin-left: -79.71px;
    margin-right: -79.71px;
    position: relative;
    width: 1050px;
}

.divider {
    align-self: stretch;
    background-color: transparent;
    height: 1px;
    margin-top: -1px;
    min-width: 1050px;
    object-fit: cover;
    position: relative;
}

.nft-market-use-this-template {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 13.2px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
    color: var(--celeste);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-s);
    font-style: normal;
    font-weight: 400;
}
</style>
