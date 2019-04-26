// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuex的使用
Vue.config.productionTip = false
import Vuex from 'vuex'
Vue.use(Vuex)
// element-ui的使用
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'small', zIndex: 3000 });
// axios的使用
import axios from 'axios'
// Vue.prototype.$axios = axios
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)

// 使用vuex存储数据并异步发送axios
const store=new Vuex.Store({
  state:{
    hostHeader:{
      data:{
        
      }
    },
    hostList:{
      data:{

      }
    },
    diskList:{
      data:{
        results:[{
          physicaldisk:[{

          }]
        }]
      }
    },
    roomList:{
      data:{
        
      }
    },
    roomhosts:{
      data:{
        
      }
    },
    vmhostHeader:{
      data:{
        
      }
    },
    installvmhosts:{
      data:{

      }
    },
    uninstallvmhosts:{
      data:{

      }
    }
  },
  mutations:{
    GETHOSTHEADER(state,value){
      state.hostHeader=value;
    },
    GETHOSTLIST(state,value){
      state.hostList=value;
    },
    GETDISKLIST(state,value){
      state.diskList=value;
    },
    GETROOMLIST(state,value){
      state.roomList=value;
    },
    GETROOMHOSTS(state,value){
      state.roomhosts=value;
    },
    GETVHOSTHEADER(state,value){
      state.vmhostHeader=value;
    },
    GETINSTALLVMHOSTS(state,value){
      state.installvmhosts=value;
    },
    GETUNSTALLVMHOSTS(state,value){
      state.uninstallvmhosts=value;
    }
  },
  actions:{
    // 通过axios获取数据 在Host异步dispatch
    getHostHeader(context){
      axios.get('http://172.20.100.172:8000/api/v1/host/headers/')
      .then(function(response){
        // console.log('获取表头信息',response);
        context.commit('GETHOSTHEADER',response)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getHostList(context,host_ip){
      axios.get('http://172.20.100.172:8000/api/v1/host/',{
        params:{
          host_ip:`${host_ip}`
        }
      })
      .then(function(response){
        // console.log('获取主机列表',host_ip);
        if(host_ip == ''){
          context.commit('GETHOSTLIST',response)
        }
        else{
          context.commit('GETDISKLIST',response)
        }
        
      })
      .catch(function(error){
        console.log(error);
      })
    },
    // 获取机房相关
    getRoomList(context){
      axios.get('http://172.20.100.172:8000/api/v1/room/')
      .then(function(response){
        // console.log('机房信息',response);
        context.commit('GETROOMLIST',response)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getRoomhosts(context,pk){
      axios.get(`http://172.20.100.172:8000/api/v1/room/${pk}/`)
      .then(function(response){
        // console.log('机房主机列表',response);
        context.commit('GETROOMHOSTS',response)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    // 获取虚拟机相关
    getVHostHeader(context){
      axios.get('http://172.20.100.172:8000/api/v1/vmhost/headers/')
      .then(function(response){
        // console.log('获取表头信息',response);
        context.commit('GETVHOSTHEADER',response)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getInstallVmHosts(context){
      axios.get('http://172.20.100.172:8000/api/v1/vmhost/',{
        params:{
          vm_installed:1
        }
      })
      .then(function(response){
        // console.log('已安装虚拟机信息',response);
        context.commit('GETINSTALLVMHOSTS',response)
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getUnstallVmHosts(context){
      axios.get('http://172.20.100.172:8000/api/v1/vmhost/',{
        params:{
          vm_installed:0
        }
      })
      .then(function(response){
        // console.log('未安装虚拟机信息',response);
        context.commit('GETUNSTALLVMHOSTS',response)
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }

})
// 全局过滤器number转字符串
Vue.filter('tostring', function (value) {
  if (!value) return ''
  return value.toString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
