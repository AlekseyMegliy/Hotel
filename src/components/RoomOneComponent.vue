<template>
    <div v-if="data.id >= min_limit && data.id <= max_limit" class="col-md-5 col-11 room-one">
        <img :src="require(`@/assets/images/photos/${data.imgSrc[0]}.jpg`)">
        <div class="about-room">
            <h2>{{ data.id }} {{ data.header }}</h2>
            <p>{{ data.shortDesc }}</p>
            <RouterLink :to="{ path: '/room', query: { room: data.id }}" class="detaisl-link">Check Details</RouterLink>
        </div>
    </div>
</template>

<script>
    export default{
        props:['data', 'min_limit', 'max_limit']
    }
</script>

<style>
.room-one{
    position: relative;
    padding: 0 25px;
    margin: 25px 0;
}
.room-one img{
    position: relative;
    box-sizing: content-box;
    width: 100%;
    transition: all ease-in-out 0.8s;
}
.about-room{
    text-align: left;
    padding: 1.5em;
    background-color: #E8E7E0;
}
.about-room h2{
    color: #73726C;
    font-size: 1.5em;
    margin-bottom: 0.7em;
    font-family: 'Old Standard TT', serif;
    line-height: 1em;
}
.about-room p{
    margin-bottom: 1em;
    line-height: 1.5em;
    color: #73726C;
}
.about-room .detaisl-link{
    color: #fff;
    border-radius: 0;
    padding: 5px 30px;
    background-color: #bfa145;
    text-decoration: none;
    transition: all ease-in-out 0.3s;
}
.about-room .detaisl-link:hover{
    background-color: #756534;
}
</style>