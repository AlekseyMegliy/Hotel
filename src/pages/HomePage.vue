<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <HomeForm></HomeForm>
        <Demonstration></Demonstration>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/HeaderComponent.vue';
    import Banner from '@/components/BannerComponent.vue'; 
    import HomeForm from '@/components/HomeFormComponent.vue';
    import Demonstration from '@/components/DemonstrationComponent.vue'
    import Footer from '@/components/FooterComponent.vue';
    
    export default{
        components:{Header, Banner, HomeForm, Demonstration, Footer}
    }
</script>