<template>
  <div>
    <HeroSection></HeroSection>
    <TrendingCollections></TrendingCollections>
    <TopCreators></TopCreators>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import TrendingCollections from '../components/TrendingCollections.vue'
import TopCreators from "../components/TopCreators.vue";


export default {
  components: {TopCreators, HeroSection, TrendingCollections}
}
</script>

<style lang="scss" scoped>

</style>
