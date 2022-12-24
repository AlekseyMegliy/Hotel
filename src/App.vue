<template>
  <div>
    <p class="p" v-on:click="getpost()">qwertyuiop[]</p>
    <p>{{ info }}</p>
  </div>
</template>


<script>
import axios from 'axios'
  export default{
    data() {
      return {
        info: null
      }
    },
    methods: {
      getpost(){
        axios
      .get('/test')
      .then(response => (this.info = response));
      }
    },
  }
</script>
<style>
div{
  margin-top: 100px;
  text-align: center;
}
.p{
  font-size: large;
  cursor: pointer;
}
.p:hover{
  color: rgb(61, 61, 61);
}
</style>
