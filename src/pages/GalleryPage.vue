<template>
    <Header />
    <GalleryMain />
    <Footer />
</template>

<script>
    import Header from '@/components/HeaderComponent.vue';
    import GalleryMain from '@/components/GalleryMainComponent.vue';
    import Footer from '@/components/FooterComponent.vue';


    export default{
        components:{Header, GalleryMain, Footer},
      
        
    }
</script>
