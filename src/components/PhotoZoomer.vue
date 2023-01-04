<template>
    <transition name="photozoom">
        <div class="photozoom" v-if="zooms == data.id">
            <div class="zoomback" v-on:click="this.$emit('zoom', {zoom:  0})"></div>
            <h2>{{ data.name }}</h2>
            <span class=" col-1 remove-zoom" v-on:click="this.$emit('zoom', {zoom:  0})">
                <svg>
                    <rect x="10" y="6" width="17" height="3"/>
                    <rect x="10" y="6" width="17" height="3"/>
                </svg>
            </span>
            <img  :src="require(`@/assets/images/photos/${data.imgSrc}.jpg`)">
            <span v-bind:class="{ disabled: zooms==1 }" class="zoom-button zoom-left-button"  v-on:click="this.$emit('zoom', {zoom:  zooms-1})"><img  src="@/assets/social/drop.png"></span>
            <span class="zoom-button zoom-right-button"  v-on:click="this.$emit('zoom', {zoom:  zooms+1})"><img src="@/assets/social/drop.png"></span>
        </div>
    </transition>
</template>

<script>
    export default{
        props:['data', 'zooms'],
        data() {
            return {
                zoom:0,
                
            }
        },
    }
</script>

<style>
    .photozoom{
        position: fixed;
        width: 100%;
        height: 90%;
        z-index: 5;
        text-align: center;
        top: 0;

    }
    .zoomback{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .photozoom .zoom-button{
        border: 1px solid rgb(255, 255, 255);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 10px;
        position: absolute;
        top: 50%; 
        margin: 10px;
        opacity: 0.8;
        cursor: pointer;
    }
    .photozoom .zoom-button img{
        margin: 15px 0;
        transition: all ease-in-out 0.3s;
        
    }
    .photozoom  .zoom-left-button{
        left: 3%;
        transform: rotate(90deg);
    }
    .photozoom  .zoom-right-button{
        position: absolute;
        right: 3%;
        transform: rotate(-90deg);
    }
    .photozoom .zoom-button:hover{
        opacity: 1;
    }
    .photozoom h2{
        position: absolute;
        margin: 0 10px ;
        font-size: 20px;
        line-height: 30px;
        color: #fff;
        text-shadow: 0 0 2px #000;
        opacity: 0.8;
        font-family: 'Old Standard TT', serif;
        transition: all ease-in-out 0.3s;
    }
    .photozoom h2:hover{
        opacity: 1;
    }
    .remove-zoom{
        position: absolute;
        right:-3% ;
        margin: 0 10px ;
    }
    .remove-zoom svg{
        padding: 0;
        margin: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-shadow: rgb(255, 255, 255) 0px 0px 1px 0px;
        fill: #ffffff;
        opacity: 0.8;
        cursor: pointer;
        transition: all ease-in-out 0.3s;
    }
    .remove-zoom rect:first-of-type{
        transform: rotate(45deg) translate(-20%,-36%);
    
    }
    .remove-zoom rect:last-of-type{
        transform:translate(140%, 14%) rotate(135deg) ;
    }
    .remove-zoom svg:hover{
        opacity: 1;
    }
    .photozoom img{
        position: absolute;
        left: 15%;
        width: 70%;
        top: 3.5%;
        box-sizing: content-box;
        opacity: 1;
    }
    @media all and (max-width:767px ){
        .photozoom img{
        position: absolute;
        left: 2.5%;
        width: 95%;
        top: 10%;
        box-sizing: content-box;
        opacity: 1;
        }
    }
    @media all and (max-width:450px ) and (max-height: 850px){
        .photozoom img{
        position: absolute;
        left: 2.5%;
        width: 95%;
        top: 40%;
        box-sizing: content-box;
        opacity: 1;
        }
    }
    .photozoom .disabled{
        cursor: default;
        opacity: 0.1;
    }
    .photozoom .disabled:hover{
        opacity: 0.1;
    }
    .photozoom-enter-active, .photozoom-leave-active {
        opacity: 1;
        transition: width ease-in-out 0.7s, opacity ease-in-out 0.7s;
    }
    .photozoom-enter-from, .photozoom-leave-to  {
        opacity: 0;
        width: 20%;
    }
</style>