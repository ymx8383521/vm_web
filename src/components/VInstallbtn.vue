<template>
    <div>
        <el-button type="primary" size='-' @click="vminstall">立即创建</el-button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'VINSTALL',
    data(){
        return {

        }  
    },
    props:{
    },
    methods: {
        vminstall() {
            const _this=this
            axios.get(`http://172.20.100.172:8000/api/v1/vmhost/vcreate/`)
            .then(function(response){
                const h = _this.$createElement;
                _this.$notify({
                    title: '虚拟机创建',
                    message: h('i','虚拟机正在创建中...，预计15分钟左右，可查看/var/log/vmcreate.log日志')
                });
                console.log(response.data);
            })
            .catch(function(error){
                    console.log(error);
            });       
        }
    }
}
</script>
<style scoped>

</style>