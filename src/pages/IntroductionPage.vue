<template>
    <Header />
    <IntroductionMain />
    <Footer />
</template>

<script>
    import Header from '@/components/HeaderComponent.vue';
    import IntroductionMain from '@/components/IntroductionMainComponent.vue'
    import Footer from '@/components/FooterComponent.vue';


    export default{
        components:{Header, IntroductionMain, Footer},
      
        
    }
</script>

<style>

</style>