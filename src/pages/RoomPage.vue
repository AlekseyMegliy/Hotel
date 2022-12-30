<template>

    <Header />
    <Room v-for="item of rooms"
        v-bind:data="item"
        v-bind:key="item.id"
        v-bind:room_num="this.$route.query.room"
    />
  <!-- {{room_number  }} -->
    <Footer />
</template>

<script>
    import Header from '@/components/HeaderComponent.vue';
    import Room from '@/components/RoomDetailsComponent.vue'
    import Footer from '@/components/FooterComponent.vue';
    import Jsoninfo from '../../json-info.json';

    export default{
        components:{Header, Room, Footer},
        data() {
            return {
                // room_number: this.$route.query.room,
                rooms: Jsoninfo.rooms, 
                
            }
        },
       
        
    }
</script>