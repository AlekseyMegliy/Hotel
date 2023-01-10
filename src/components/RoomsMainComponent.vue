<template>
    <h2 class="offset-md-1 rooms-header">Rooms & Tariff {{ filtered_lenght }}</h2>
    <h2 class="offset-md-1 rooms-header filter-header" v-on:click="filters=!filters">Filters</h2>
    <span v-on:click="filters=!filters" class="filter-drop"><img width="35"  :class="{'filter-arrow-up':filters}" height="35" src="@/assets/social/arrow.png"></span> 
    
    <div class="conteiner rooms">
        <Transition name="filter">
            <div class="row filters" v-if="filters">
                <div class="sq offset-md-1 col-9 col-sm-5 col-md-4">
                    <label for="min-sq" class="min-sq col-12">Min sq: <input type="text" class="col-2" v-model="min_sq">
                        <input type="range" min="20" max="100"  class="col-10" id="min-sq" v-model="min_sq"> 
                        
                    </label>
                    <label for="max-sq" class="max-sq col-12">Max sq: <input type="text" class="col-2" v-model="max_sq">
                        <input type="range" min="40" max="150"  class="col-12" id="max-sq" v-model="max_sq">
                    </label>
                </div>
                <div class="price offset-md-1 col-9 col-sm-5 col-md-4">
                    <label for="min-price" class="min-sq col-12">Min price: <input type="text" class="col-2" v-model="min_price">
                        <input type="range" min="100" max="800"  class="col-12" id="min-price" v-model="min_price"> 
                    </label>
                    <label for="max-price" class="max-sq  col-12">Max price: <input type="text" class="col-2" v-model="max_price">
                        <input type="range" min="300" max="1000"  class="col-12" id="max-price" v-model="max_price">
                    </label>
                </div>
            </div>
        </Transition>
        <div class="row ">
                
            <RoomOne v-for="item of rooms"
                    v-bind:data="item"
                    v-bind:key="item.id" 
                    v-bind:min_limit="min_limit"
                    v-bind:max_limit="max_limit"
                
                    />
            <div class="rooms-nav col-12">
                <button v-bind:disabled="min_limit===1" v-bind:class="{'limit-for-arrow': min_limit===1}" v-on:click="min_limit = 1, max_limit =12"><a href="#">&lt;&lt;</a></button>
                <button v-bind:disabled="min_limit===1" v-bind:class="{'limit-for-arrow': min_limit===1}" v-on:click="min_limit -= 12, max_limit -=12"><a href="#">&lt;</a></button>
                <button v-for="item of filtered_lenght" 
                        :key="item" 
                        v-bind:class="{current: min_limit=== 1+item*12-12, inviz: item< min_but(min_limit) ||  item>max_but(min_limit) }" 
                        v-on:click="min_limit=1+item*12-12, max_limit=item*12" 
                        >
                        <a href="#" >{{ item }}</a>
                </button>
                <button v-bind:disabled="min_limit===1+filtered_lenght*12-12" v-bind:class="{'limit-for-arrow': min_limit===1+filtered_lenght*12-12}" v-on:click="min_limit += 12, max_limit +=12"><a href="#">></a></button>
                <button v-bind:disabled="min_limit===1+filtered_lenght*12-12" v-bind:class="{'limit-for-arrow': min_limit===1+filtered_lenght*12-12}" v-on:click="min_limit = 1+filtered_lenght*12-12, max_limit =filtered_lenght*12"><a href="#">>></a></button>
            </div>
        </div>
    </div>
</template>

<script>
import RoomOne from '@/components/RoomOneComponent.vue'
import Jsoninfo from '../../json-info.json' 
    export default{
      
        data() {
            return {
                rooms: Jsoninfo.rooms,
                min_limit:1,
                max_limit: 12,
                length: null,
                filtered_lenght: null,
                filters: false,
                min_sq:20,
                max_sq:150,
                min_price:100,
                max_price:1000,

            }
        },
        components:{RoomOne},
        methods:{
             min_but(cur){
                if((cur-1)/12 >this.filtered_lenght -3){
                    return this.filtered_lenght-4
                }
                return (cur-1)/12-1
            },
            max_but(cur){
                if((cur-1)/12 <3){
                    return 5
                }
                return (cur-1)/12+3
            }
        },
        mounted(){
            this.length = Object.keys(Jsoninfo.rooms)
            this.filtered_lenght = Math.ceil(this.length.length/12)
        },

        watch:{
            min_sq: function(min){
                let filter_id =null;
                for(let i=1; i<=this.length.length; i++){
                    if(Jsoninfo.rooms[i].size > min && Jsoninfo.rooms[i].size < this.max_sq){
                        filter_id++
                        this.rooms[i].filtered_id= filter_id
                    } else{
                        this.rooms[i].filtered_id=0
                    }
                    
                }
                this.filtered_lenght = Math.ceil(filter_id/12)
               
            },
            max_sq: function(max){
                let filter_id =null;
                for(let i=1; i<=this.length.length; i++){
                    if(Jsoninfo.rooms[i].size < max && Jsoninfo.rooms[i].size > this.min_sq){
                        filter_id++
                        this.rooms[i].filtered_id= filter_id
                    } else{
                        this.rooms[i].filtered_id=0
                    }
                    
                }
                this.filtered_lenght = Math.ceil(filter_id/12)
               
            },
            min_price: function(min){
                let filter_id =null;
                for(let i=1; i<=this.length.length; i++){
                    if(Jsoninfo.rooms[i].price > min && Jsoninfo.rooms[i].price < this.max_price){
                        filter_id++
                        this.rooms[i].filtered_id= filter_id
                    } else{
                        this.rooms[i].filtered_id=0
                    }
                    
                }
                this.filtered_lenght = Math.ceil(filter_id/12)
               
            },
            max_price: function(max){
                let filter_id =null;
                for(let i=1; i<=this.length.length; i++){
                    if(Jsoninfo.rooms[i].price < max && Jsoninfo.rooms[i].price > this.min_price){
                        filter_id++
                        this.rooms[i].filtered_id= filter_id
                    } else{
                        this.rooms[i].filtered_id=0
                    }
                    
                }
                this.filtered_lenght = Math.ceil(filter_id/12)
               
            }

        }
    }
</script>

<style>
.rooms-header{
    font-size: 2em;
    color: #73726C;
    padding: 1em 25px 0em 25px;
    font-family: 'Old Standard TT', serif;
}
.filter-header{
    font-size: 1.6em;
    cursor: pointer;
    display: inline-block;
    box-sizing: content-box;
    transition: all 0.2s ease-in-out;
}
.filter-drop{
    cursor: pointer;
}
.filter-drop img{
    width: 35px;
    box-sizing: border-box;
    filter: invert(180);
    background-color: rgba(255, 255, 255, 0.459);
    padding: 5px;
    border-radius:50% ;
    cursor: pointer;
    transform: rotate(180deg);
    transition: all ease-in-out 0.5s;
}
.filter-header:hover{
    color: #4b4b48;
}
.filter-drop img:hover{
    background-color: rgba(123, 123, 123, 0.459);
}
.filter-drop .filter-arrow-up{
    transform: rotate(0deg);
}
.rooms .row{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
}
.rooms .filters{
    padding:0 1em;
    background-color: #73726c1c;
    justify-content: left;
}
.rooms .filters label{
    margin-top: 10px;
    margin-bottom: 10px;
}
.rooms .rooms-nav{
    text-align: center;
    margin: 20px 0;
}
.rooms .rooms-nav button{
    font-family: 'Raleway', sans-serif;
    color: #bfa145;
    text-decoration: none;
    padding: 5px 0;
    border: 0.1px solid rgba(0, 0, 0, 0.162);
    transition: all ease-in-out 0.3s;
    cursor: pointer;

}
.rooms .rooms-nav button:hover{
    background-color: rgba(0, 0, 0, 0.181);
    color: black;
}
.rooms .rooms-nav .current{
    background-color: #bfa145;
    color: rgb(255, 255, 255);
    cursor:default;
}
.rooms .rooms-nav .current:hover{
    background-color: #bfa145;
    color: rgb(255, 255, 255);
}
.rooms .rooms-nav .limit-for-arrow{
    background-color: rgba(0, 0, 0, 0.181);
    color: black;
    opacity: 0.3;
    cursor: default;
}
.rooms .rooms-nav button a{
    padding: 20px 15px;
    text-decoration: none;
    color: inherit;
    cursor: inherit;
}
@media all and (max-width:767px ){
    .rooms-header{
    padding: 1em 25px 0em 50px;
    }
    .rooms .filters{
    padding: 0 2em;
}
}
@media all and (max-width:450px ){
    .rooms-header{
    padding: 1em 25px 0em 10%;
    }
}
.rooms .rooms-nav .inviz{
    display: none;
}



.filter-enter-active, .filter-leave-active {
    opacity: 1;
    position: relative;
    top:0;
    overflow: hidden;
    height:148px;
    transition: all ease-in-out 0.7s;
}
.filter-enter-from, .filter-leave-to  {
    position: relative;
    top:-100px;
    opacity: 0;
    height: 0px;
    overflow: hidden;
  
        
}

</style>