<template>
    <div class="conteiner header" v-bind:class="{buttonClick: open}">
        <div class="row">
            <RouterLink to="/" class="offset-0 offset-md-1 col-4 col-sm-3 col-lg-3 col-xl-2 logo">
                <img class="col-10 col-sm-10 col-md-8" alt="Holiday Crown" width="165px"  src="@/assets/images/logo.png">
            </RouterLink>
            <button class=" col-1 header-button" v-on:click="open = !open">
                <svg>
                    <rect x="10" y="6" width="15" height="2" fill="white"/>
                    <rect x="10" y="11" width="15" height="2" fill="white"/>
                    <rect x="10" y="16" width="15" height="2" fill="white"/>
                </svg>
            </button>
            <div class="offset-1 offset-lg-3 offset-xl-4 col-sm-11 col-md-6 col-lg-5 col-xl-4 nav">
                <RouterLink to="/">
                    Home
                </RouterLink>
                <RouterLink to="/">
                    Rooms & Tariff
                </RouterLink>
                <RouterLink to="/">
                    Introduction
                </RouterLink>
                <RouterLink to="/">
                    Gallery
                </RouterLink>
                <RouterLink to="/">
                    Contact
                </RouterLink>


            </div>
        </div>
    </div>
</template>

<script>
   export default{
    data() {
        return {
            open: false
        }
    },
   }
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
.header{

    height: 80px;
    display: flex;
    background: #eeeeee;
}
.header .row{
    width: 100%;
    display: flex;
}
.header .logo{
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
    padding-bottom: 10px;
}
.header-button{
    padding: 0;
    margin-right: 0;
    margin-top: auto;
    margin-bottom: auto;
    display: none;
    width: 35px;
    height: 25px;
    background-color: #bfa145;
    border: none;
    border-radius: 2px;
    
}
.header-button svg{
    margin: 0;
    width: 35px;
    height: 25px;
  
}
.nav{
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
 
}
.nav a{
    text-decoration: none;
    color:#706d64;
    transition: color linear 0.2s;
    margin-top: auto;
    margin-bottom: auto;
}

.nav a:hover{
    color:#000000;
}
@media all and (max-width:768px ){
    .header{
        padding:10px ;
        height: 60px;
        overflow:hidden;
        transition: height 0.3s linear;
    }
    .header .row{
        justify-content: space-between;
    }
    .header .logo{
    padding-bottom: 0px;
    }   
    .header-button{
        display: inline-block;
    }
    .nav{
        flex-direction: column;
    }
    .nav a{
        padding: 2% 0;
        display: flex;
    }
    .buttonClick{
        height: 300px;
} 
   
} 
@media all and (max-width:450px ){
    .header{
        height: 50px;  
    }
    
} 
@media all and (max-width:350px ){
    .header{
        height: 40px;  
    }

    
} 


</style>