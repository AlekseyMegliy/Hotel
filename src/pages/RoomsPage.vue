<template>
    <Header />
    <RoomsMain />
    <Footer />
</template>

<script>
    import Header from '@/components/HeaderComponent.vue';
    import RoomsMain from '@/components/RoomsMainComponent.vue'
    import Footer from '@/components/FooterComponent.vue';
    
    export default{
        components:{Header, RoomsMain, Footer}
        
    }
</script>

<style>

</style>