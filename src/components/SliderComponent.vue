<template>
    <div class="slider" @mousemove="move" v-touch:swipe.left="right"  v-touch:swipe.right="left">
        <span v-on:click="left()" class="slider-button-left"><img width="35" height="35" src="@/assets/social/arrow.png"></span>
        <img v-bind:style="{left: arrow +'%'}" class="img" :src="require(`@/assets/images/photos/${imgSrc[0]}.jpg`)">
        <img v-bind:style="{left: arrow +'%'}" class="img" :src="require(`@/assets/images/photos/${imgSrc[1]}.jpg`)">
        <img v-bind:style="{left: arrow +'%'}" class="img" :src="require(`@/assets/images/photos/${imgSrc[2]}.jpg`)">
        <span v-on:click="right()" class="slider-button-right"><img width="35" height="35" src="@/assets/social/arrow.png"></span>
    </div>
</template>

<script>
    export default{
        props:['imgSrc'],
        data() {
            return {
                arrow:0,
                inter: null
            }
        },
        methods: {
            
            left(){
                if(this.arrow < 0){
                   this.arrow +=100 
                }else if(this.arrow ===0){
                    this.arrow =-200 
                }
                
            },
            right(){
                if(this.arrow > -200){
                   this.arrow -=100 
                }else if(this.arrow ===-200){
                    this.arrow =0 
                }
            },
            interval(){
               this.inter = setInterval(this.right, 5000);
              
            },
            move(){
                clearInterval(this.inter)
                this.inter = setInterval(this.right, 5000)
            }
            
        }, 
        mounted: function(){
            this.interval()     
        }, 
        
        
    }
</script>

<style>
.slider{
    display: flex;
    position: relative;
    white-space:nowrap;
    overflow: hidden;
   
}
.slider .img{
    position: relative;
    box-sizing: content-box;
    width: 100%;
    transition: all ease-in-out 0.8s;
}

.slider span{
    box-sizing: content-box;
    
}
.slider span img{
    width: 35px;
    box-sizing: border-box;
    filter: invert(180);
    background-color: rgba(255, 255, 255, 0.459);
    padding: 5px;
    border-radius:50% ;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
}
.slider span img:hover{
    background-color: rgba(123, 123, 123, 0.459);
}
.slider .slider-button-left img{
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: rotate(-90deg);
}
.slider .slider-button-right img{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: rotate(90deg);
}

</style>