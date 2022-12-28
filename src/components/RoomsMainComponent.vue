<template>
    <h2 class="offset-sm-1 rooms-header">Rooms & Tariff</h2>
    <div class="conteiner rooms">
        <div class="row ">
            
            <RoomOne v-for="item of rooms"
                    v-bind:data="item"
                    v-bind:key="item.id" />
      
        </div>
    </div>
</template>

<script>
import RoomOne from '@/components/RoomOneComponent.vue'
import Jsoninfo from '../../json-info.json' 
    export default{
        data() {
            return {
                rooms: Jsoninfo.rooms
            }
        },
        components:{RoomOne}
    }
</script>

<style>
.rooms-header{
    font-size: 2em;
    color: #73726C;
    padding: 1em 35px 0em 35px;
    font-family: 'Old Standard TT', serif;
}
.rooms .row{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
}


</style>