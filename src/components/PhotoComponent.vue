<template>
    <img v-on:click=" this.$emit('zoom', {zoom:  data.id})"  class="col-md-4" :src="require(`@/assets/images/photos/${data.imgSrc}.jpg`)">
</template>

<script>
    export default{
        props:['data']
    }
</script>

<style scoped>
    img{
        margin: 10px 0;
        cursor: pointer;
    }
</style>