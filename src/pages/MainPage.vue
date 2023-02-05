<template>
    <div class="container">
        <HeroSection></HeroSection>
        <TrendingCollections></TrendingCollections>
        <!-- <TopCreators></TopCreators> -->
        <!-- <BrowseCategories></BrowseCategories> -->
        <!-- <DiscoverMoreNFTS></DiscoverMoreNFTS> -->
        <!-- <NftHighlight></NftHighlight> -->
        <!-- <HowItWorks></HowItWorks> -->
        <!-- <SubscribeWidget></SubscribeWidget> -->
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import TrendingCollections from '../components/TrendingCollections.vue'
import TopCreators from '../components/TopCreators.vue'
import BrowseCategories from '../components/BrowseCategories.vue'
import DiscoverMoreNFTS from '../components/DiscoverMoreNFTS.vue'
import NftHighlight from '../components/NftHighlight.vue'
import HowItWorks from '../components/HowItWorks.vue'
import SubscribeWidget from '../components/SubscribeWidget.vue'

export default {
    components: {
        SubscribeWidget,
        HowItWorks,
        NftHighlight,
        DiscoverMoreNFTS,
        BrowseCategories,
        TopCreators,
        HeroSection,
        TrendingCollections
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    margin: 0 auto;
    padding: 80px 115px;
    max-width: 1050px;
    min-width: 320px;
    height: 0;
}

@media screen and (max-width: 1000px) {
    .container {
        padding: 80px 70px;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding: 40px 20px;
    }
}
</style>
