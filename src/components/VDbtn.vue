<template>
    <div class='col-md-6'>
        <el-button type="danger" size='small' @click="delvmcreate">删除</el-button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'VDEL',
    data(){
        return {

        }  
    },
    props:{
        pk:Number
    },
    methods: {
        delvmcreate() {
            const _this=this
            this.$confirm('此操作将删除该条记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            })
            .then(() => {
                // 发axios
                // console.log(this.pk)
                axios.delete(_this.BaseUrl.baseURL+`/api/v1/vmhost/${this.pk}/`)
                .then(function(response){
                    _this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    _this.$store.dispatch('getUnstallVmHosts');      
                })
                .catch(function(error){
                        console.log(error);
                });
                
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            })
      }
    }
}
</script>
<style scoped>
    .el-button--small {
        padding:9px 11px;
    }
</style>