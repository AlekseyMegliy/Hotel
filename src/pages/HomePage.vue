<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <HomeForm></HomeForm>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/HeaderComponent.vue';
    import Banner from '@/components/BannerComponent.vue'; 
    import HomeForm from '@/components/HomeFormComponent.vue';
    import Footer from '@/components/FooterComponent.vue';
    
    export default{
        components:{Header, Banner, HomeForm, Footer}
    }
</script>