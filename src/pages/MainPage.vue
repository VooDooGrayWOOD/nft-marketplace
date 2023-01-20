<template>
  <div>
    <HeroSection></HeroSection>
    <TrendingCollections></TrendingCollections>
    <TopCreators></TopCreators>
    <BrowseCategories></BrowseCategories>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import TrendingCollections from '../components/TrendingCollections.vue'
import TopCreators from "../components/TopCreators.vue";
import BrowseCategories from "../components/BrowseCategories.vue";


export default {
  components: {BrowseCategories, TopCreators, HeroSection, TrendingCollections}
}
</script>

<style lang="scss" scoped>

</style>
