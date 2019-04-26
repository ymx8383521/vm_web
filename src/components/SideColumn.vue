<template>
    <el-menu-item :index="rooms.id|tostring" @click='listHost(rooms.id)'>
        <i class="el-icon-menu"></i>
        <span slot="title">{{rooms.room_name}}</span>
    </el-menu-item>
</template>
<script>
export default {
    name:'SideColumn',
    data(){
        return {

        }
    },
    props:{
        rooms:Object
    },
    methods: {
      listHost(pk) {
        // console.log(pk);
        this.$store.dispatch('getRoomhosts',pk);
      }
    }
}
</script>
<style scoped>

</style>