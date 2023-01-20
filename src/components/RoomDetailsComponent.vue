<template>
    <div v-if="data.id == room_num" class="container room-details">
        <div class="row room-photos">
            <h1 class="offset-md-1 col-11" >{{ data.id }} {{ data.header }}</h1>
            <div class=" room-slider">
                <Slider class="offset-md-1  col-xl-11" v-bind:imgSrc="data.imgSrc" />   
            </div>
        </div>
        <div class="row details">
            <div class="offset-md-1 col-md-10 col-lg-4 detail">
                <p>{{ data.Description }}</p>
            </div>
            <div class="offset-md-1 offset-lg-0 col-md-5 col-lg-3 detail ">
                <h2>Amenities</h2>
                <ul>
                <Amenities v-for="item of data.amenities"
                    v-bind:amenit="item"
                    v-bind:key="key"
                     />
                </ul>
            </div>
            <div class="size-price col-md-6 col-lg-4 detail">
                <div class=" row">
                   <span class="col-11 size-price-block col-md-5"><p class="col-12">Size</p><p class="col-12 size-price-num">{{ data.size }} sq</p></span>
                   <span class="col-11 size-price-block col-md-5"><p class="col-12">Price</p><p class="col-12 size-price-num">${{ data.price }}</p></span> 
                </div>
                <star-rating class="rating" :increment="0.5" v-model:rating="rating" :read-only="read_only"  v-on:click="test()"></star-rating>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from '@/components/SliderComponent.vue'
    import Amenities from '@/components/AmenitiesComponent.vue';
    import StarRating from 'vue-star-rating';
    import { useToast } from "vue-toastification"
    export default{
        props:['room_num', 'data'], 
        components:{ Slider, Amenities, StarRating },
        data() {
            return {
                rating:this.data.rating,
                read_only: false
                
            }
        },
      
        watch:{
            rating:function(){
                useToast().success("Thank you for your feedback!")
                this.read_only = true
            }
        }
      
    }
</script>

<style>
    .room-details{
        min-width: 100%;
    }
    .room-details .row{
        width: 100%;
    }
    .room-photos{
        padding: 0 7% 0 2em;
    }
    .room-details .room-photos h1{
        font-size: 2em;
        color: #73726C;
        padding: 1em 0;
        font-family: 'Old Standard TT', serif;
    }
    .room-details .room-photos .room-slider{
        padding: 0;
    }
    .details{
        padding: 6em 0;
        margin: 0;
    }
    .detail{
        margin-bottom: 1em;
        line-height: 1.5em;
        color: #73726C;
    }
    .detail h2{
        font-size: 1.5em;
        margin-bottom: 0.7em;
        font-family: 'Old Standard TT', serif;
    }
    .size-price{
        padding-right: 5.5%;
        text-align: center;
    }
    .size-price .row{
        display: flex;
        justify-content: space-evenly;
        
    }
    .size-price .size-price-block{
        background-color: #C7C5BB;
        padding: 2em 0;
        text-align: center;
        color: #fff;
        height: 10.97em;
        line-height: 3em;  
    }
    .size-price .size-price-block .size-price-num{
        font-size: 2em;
    }
    .size-price .rating{
        margin-left: auto;
        margin-right: auto;
        width: 265px;
        padding-right:20px ;
    }
    @media all and (max-width:767px ){
        .details{
        padding: 4em 0;
        }
        .room-photos{
        padding: 0 0 0 1.5em;
        }
        .size-price{
        padding-right: 0;
       }
       .size-price span{
        margin: 2% 0;
       }
    }


</style>