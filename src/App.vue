<template>
  <div>
    <RouterView></RouterView>
    <a href="#" title="Top" class="topbutton"><img width="20" src="@/assets/social/drop.png"></a>
  </div>
</template>


<script>

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap');

*::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(199, 199, 199, 0.595);
  
}
*::-webkit-scrollbar-thumb{
  background-color: #bfa145;
}
.topbutton {
    text-decoration: none;
    line-height: 2em;
    transform: rotate(180deg);
    position:fixed;
    bottom:30px;
    right:30px;
    width:45px;
    background:#00000074;
    text-align:center;
    padding:10px;
    cursor:pointer;
    font-size:12px;
    border-radius: 5px;
    
}
</style>

