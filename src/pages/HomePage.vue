<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/HeaderComponent.vue';
    import Banner from '@/components/BannerComponent.vue'; 
    import Footer from '@/components/FooterComponent.vue';
    export default{
        components:{Header, Banner, Footer}
    }
</script>