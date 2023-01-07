<template>
    <h2 class="offset-md-1 rooms-header">Rooms & Tariff</h2>
    <div class="conteiner rooms">
        <div class="row ">
                
            <RoomOne v-for="item of rooms"
                    v-bind:data="item"
                    v-bind:key="item.id" 
                    v-bind:min_limit="min_limit"
                    v-bind:max_limit="max_limit"
                    />
            <div class="rooms-nav col-md-5 col-12">
                <button v-bind:disabled="min_limit===1" v-bind:class="{'limit-for-arrow': min_limit===1}" v-on:click="min_limit = 1, max_limit =12"><a href="#">&lt;&lt;</a></button>
                <button v-bind:disabled="min_limit===1" v-bind:class="{'limit-for-arrow': min_limit===1}" v-on:click="min_limit -= 12, max_limit -=12"><a href="#">&lt;</a></button>
                <button v-for="item of buttonNum" 
                        :key="item" 
                        v-bind:class="{current: min_limit=== 1+item*12-12, inviz: item< min_but(min_limit) ||  item>max_but(min_limit) }" 
                        v-on:click="min_limit=1+item*12-12, max_limit=item*12" 
                        >
                        <a href="#" >{{ item }}</a>
                </button>
                <button v-bind:disabled="min_limit===1+buttonNum*12-12" v-bind:class="{'limit-for-arrow': min_limit===1+buttonNum*12-12}" v-on:click="min_limit += 12, max_limit +=12"><a href="#">></a></button>
                <button v-bind:disabled="min_limit===1+buttonNum*12-12" v-bind:class="{'limit-for-arrow': min_limit===1+buttonNum*12-12}" v-on:click="min_limit = 1+buttonNum*12-12, max_limit =buttonNum*12"><a href="#">>></a></button>
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
                length: null

            }
        },
        components:{RoomOne},
        methods:{
             min_but(cur){
                if((cur-1)/12 >this.buttonNum -3){
                    return this.buttonNum-4
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
        computed:{
            buttonNum(){
                this.length = Object.keys(Jsoninfo.rooms)
                return Math.ceil(this.length.length/12)
            },
           
            
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
.rooms .row{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
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
}
@media all and (max-width:450px ){
    .rooms-header{
    padding: 1em 25px 0em 10%;
    }
}
.rooms .rooms-nav .inviz{
    display: none;
}

</style>