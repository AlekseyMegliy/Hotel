<template>
<h2 class="offset-md-1 col-11 gallery-header">Gallery</h2>
    <div class="container gallery">
        <div class="offset-md-1 col-md-10 row">
            <Photo @zoom="zoomer"
                    v-for="item of photos"
                    v-bind:data="item"
                    v-bind:key="item.id"
                    />
            
           

        </div>
    </div>
    <PhotoZoomer @zoom="zoomer"
                v-for="item of photos"
                v-bind:data="item"
                v-bind:key="item.id"
                v-bind:zooms="zoom"
                />

    <div v-bind:class="{backdrop: zoom}" v-on:click="zoom=0"></div>

</template>

<script>
    import Photo from '@/components/PhotoComponent.vue'
    import Jsoninfo from '../../json-info.json' 
    import PhotoZoomer from './PhotoZoomer.vue'
    export default{
        data() {
            return {
                photos: Jsoninfo.photos,
                zoom: 0
            }
        },
        components:{Photo, PhotoZoomer},
        methods: {
            zoomer(num){
                if(num.zoom == 13){
                    num.zoom = 1
                    this.zoom = num.zoom 
                }else{
                    this.zoom = num.zoom 
                }
                
                
            
            }
        },
    }
</script>

<style>
.gallery-header{
    font-size: 2em;
    color: #73726C;
    padding: 1em 25px 0em 25px;
    font-family: 'Old Standard TT', serif;
}
.gallery{
    min-width: 100%;
}
.gallery .row{
    text-align: center;
}
.backdrop {
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    opacity: 1;
    transition: opacity 0.3s ease;
}

</style>