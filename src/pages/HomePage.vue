<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <HomeForm></HomeForm>
        <Demonstration></Demonstration>
        <Footer></Footer>
        <a href="#" title="Top" class="topbutton"><img width="20" src="@/assets/social/drop.png"></a>
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

<style>
.topbutton {
    text-decoration: none;
    line-height: 2em;
    transform: rotate(180deg);
    position:fixed;
    bottom:30px;
    right:30px;
    width:45px;
    background:#00000074;
    text-align:center;
    padding:10px;
    cursor:pointer;
    font-size:12px;
    border-radius: 5px;
    
}
</style>