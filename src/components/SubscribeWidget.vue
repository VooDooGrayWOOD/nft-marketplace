<template>
    <div class="subscribe-widget">
        <div class="subscribe-widget-item">
            <img
                class="photo"
                src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/637e564ca17e9f3ed8e13520/img/photo@2x.png"
                alt="Photo"
            />
            <div class="frame-subscribe">
                <div class="headline-subhead">
                    <div class="join-our-weekly-digest">
                        Join Our Weekly Digest
                    </div>
                    <p class="get-exclusive-promot">
                        Get Exclusive Promotions &amp; Updates Straight To Your
                        Inbox.
                    </p>
                </div>
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
                            <img
                                class="icon-mail"
                                src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/releases/6357ceb6d40a1d649668f069/img/envelopesimple-1@2x.svg"
                                alt="icon-mail"
                            />
                            <div class="button">Subscribe</div>
                        </my-button>
                    </a>
                </div>
            </div>
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
.subscribe-widget {
    width: 100%;
    height: auto;
    align-items: center;
    align-self: stretch;
    background-color: var(--background);
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: auto;
    mix-blend-mode: normal;
    padding: 40px 195px 80px;
    position: relative;
}

.subscribe-widget-item {
    align-items: center;
    background-color: var(--background---secondary);
    border: 1px none;
    border-radius: 20px;
    display: flex;
    gap: 80px;
    height: auto;
    margin-left: -80px;
    margin-right: -80px;
    mix-blend-mode: normal;
    padding: 60px;
    position: relative;
    width: 1050px;
}

.photo {
    background-color: transparent;
    flex: 1;
    height: 310px;
    min-width: 425px;
    mix-blend-mode: normal;
    object-fit: cover;
    position: relative;
}

.frame-subscribe {
    align-items: flex-start;
    background-color: transparent;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: auto;
    position: relative;
    width: 425px;
}

.headline-subhead {
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

.join-our-weekly-digest {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 45.6px;
    margin-top: -1px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    color: var(--text);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-xxl);
    font-style: normal;
    font-weight: 600;
}

.get-exclusive-promot {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 35.2px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    color: var(--text);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
}

.subscribe-form {
    align-items: center;
    align-self: stretch;
    background-color: var(--text);
    border: 2px none;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    height: 60px;
    mix-blend-mode: normal;
    padding: 16px 0 16px 20px;
    position: relative;
}

.enter-your-email-here {
    background-color: transparent;
    border: 0;
    flex: 1;
    height: 22px;
    letter-spacing: 0px;
    line-height: 22.4px;
    min-width: 182px;
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
</style>
