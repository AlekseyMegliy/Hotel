<template>
    <div class="col-md-4 col-11 slider-dem">
        <Slider v-bind:imgSrc="data.imgSrc" />
        <div class="slider-dem-details">
            <p>{{ data.header }}</p> 
            <RouterLink to="/gallery"><img width="25" height="25" src="@/assets/social/det.png"></RouterLink>
        </div>
    </div>
</template>

<script>
    import Slider from '@/components/SliderComponent.vue';
    export default{
        props:['data'],
        components: {Slider}
    }
</script>

<style>

.slider-dem .slider-dem-details{
    padding: 15px 15px 0px 15px;
    margin-bottom: 20px;
    background-color: #b9b2a0;
    font-weight: 500;
    color: #46433b;
    display: flex;
    justify-content: space-between;
}
.slider-dem .slider-dem-details img{
    opacity: 0.5;
    transition: all ease-in-out 0.4s;
}
.slider-dem .slider-dem-details img:hover{
    opacity: 1;
    filter: invert(180);
}
</style>