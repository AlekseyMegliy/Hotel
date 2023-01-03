<template>
    <Header />
    <ContactMain />
    <Footer />
</template>

<script>
    import Header from '@/components/HeaderComponent.vue';
    import ContactMain from '@/components/ContactMainComponent.vue';
    import Footer from '@/components/FooterComponent.vue';


    export default{
        components:{Header, ContactMain, Footer},
      
        
    }
</script>