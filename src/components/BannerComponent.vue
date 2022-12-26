<template>
    <div class="container-fluid banner">
        <div class="row">
            <img src="@/assets/images/photos/banner.jpg">
            <div class="banner-text-outer">
                <div class="banner-text-iner">
                    <div class="banner-text">
                        <h1>Best hotel in Dubai</h1>
                        <p>Most luxurious hotel of asia with the royal treatments and excellent customer service.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style>
.banner{
    position: relative;
    text-align: center;
}
.banner img {
    position: relative;
    width: 100%;
    padding: 0;
}

.banner .banner-text-outer{
    position: absolute;
    left: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  
}
.banner .banner-text-iner{
    display: table;
    height: 100%;
    width: 100%;
}
.banner .banner-text{
    display: table-cell;
    vertical-align: middle;
    color: white;
    font-family: 'Old Standard TT', serif;
}
.banner .banner-text h1{
    font-size: 5em;
    line-height: 1em;
}
.banner .banner-text p{
    font-size: 1.35em;
    line-height: 4em;
}
@media all and (max-width:767px ){
    .banner .banner-text h1{
    font-size: 2em;
 
    }
    .banner .banner-text p{
    font-size: 1em;
    line-height: 1em;
    }
}
@media all and (max-width:300px ){
    .banner .banner-text h1{
    font-size: 1.7em;
 
    }
    .banner .banner-text p{
    font-size: 0.85em;
    line-height: 1em;
    }
}



</style>