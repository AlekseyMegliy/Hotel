<template>
    <div class="conteiner demonstration">
        <div class="row">
            <div class=" col-12 col-md-11 col-lg-10 row">
                <SliderDem v-for="item of demData"
                        v-bind:data="item"
                        v-bind:key="item.id"
                />
                
            </div>
        </div>
    </div>
</template>

<script>
    import Jsoninfo from '../../json-info.json' 
    import SliderDem from '@/components/DemonstrationSliderComponent.vue'
    export default{
        data() {
            return {
                demData: Jsoninfo.demonstration
            }
        },
        components: {SliderDem}
    }
</script>

<style>
.demonstration{
    background-color: #dedbd3;
    padding: 80px 0;
    
}
.demonstration .row{
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
}
.demonstration + .row{
    width: 100%;
    
}


</style>