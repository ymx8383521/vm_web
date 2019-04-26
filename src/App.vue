<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Vheader from './components/Vheader.vue'

export default {
  name: 'App',
  components:{
    Vheader
  },
  created(){

  },
  mounted(){
    // 获取主机相关
    this.$store.dispatch('getHostHeader');
    this.$store.dispatch('getHostList','');
    // 获取机房相关
    this.$store.dispatch('getRoomList');
    this.$store.dispatch('getRoomhosts',1);
    // 获取虚拟机相关
    this.$store.dispatch('getVHostHeader');
    this.$store.dispatch('getInstallVmHosts');
    this.$store.dispatch('getUnstallVmHosts');
  }
}
</script>

<style>

</style>
