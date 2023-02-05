<template>
  <div>
    <HeroSection></HeroSection>
    <TrendingCollections></TrendingCollections>
    <TopCreators></TopCreators>
    <BrowseCategories></BrowseCategories>
    <DiscoverMoreNFTS></DiscoverMoreNFTS>
    <NftHighlight></NftHighlight>
    <HowItWorks></HowItWorks>
    <SubscribeWidget></SubscribeWidget>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import TrendingCollections from '../components/TrendingCollections.vue'
import TopCreators from "../components/TopCreators.vue";
import BrowseCategories from "../components/BrowseCategories.vue";
import DiscoverMoreNFTS from "../components/DiscoverMoreNFTS.vue";
import NftHighlight from "../components/NftHighlight.vue";
import HowItWorks from "../components/HowItWorks.vue";
import SubscribeWidget from "../components/SubscribeWidget.vue";


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

</style>
