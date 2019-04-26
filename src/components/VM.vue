<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-1 create pull-right">
                <VCreate></VCreate>
            </div>
        </div>
        <div class="row installed">
            <div class="panel panel-primary">
                <div class="panel-heading">已安装</div>
                <table class="table table-hover table-striped">
                    <thead>
                        <VHostHeader :headers='getVHeaders'></VHostHeader>
                    </thead>
                    
                    <!-- 生成表数据 -->
                    <tbody>
                        <VHostForm v-for='(item,index) in getInForms' :forms='item' :key='index'></VHostForm>
                    </tbody>
                </table>
            </div>
        </div>    
        <div class="row">    
            <div class="panel panel-info">
                <div class="panel-heading">未安装</div>
                <table class="table table-hover table-striped">
                    <thead>
                        <VHostHeader :headers='getVHeaders'>
                            <th>操 作</th>
                        </VHostHeader>
                    </thead>
                    
                    <!-- 生成表数据 -->
                    <tbody>
                        <VHostForm v-for='(item,index) in getUnForms' :forms='item' :key='index'>
                            <td class='col-md-1'>
                                    <VPUt :pk='item.id'></VPUt>
                                    <VDEL :pk='item.id'></VDEL>
                            </td>
                        </VHostForm>
                    </tbody>
                </table>
            </div>
        </div>
    </div>        
</template>
<script>
import VHostHeader from './VHostHeader.vue'
import VHostForm from './VHostForm.vue'
import VCreate from './VCbtn.vue'
import VPUt from './VPbtn.vue'
import VDEL from './VDbtn.vue'

export default {
    name:'VM',
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{
        getVHeaders(){
            return this.$store.state.vmhostHeader.data;
        },
        getInForms(){
            return this.$store.state.installvmhosts.data.results;
        },
        getUnForms(){
            return this.$store.state.uninstallvmhosts.data.results;
        },
    },
    components:{
        VHostHeader,
        VHostForm,
        VCreate,
        VPUt,
        VDEL
    }
}
</script>
<style scoped>
    .create{
        margin-bottom: 5px;
        margin-right: 5px;
    }
    .installed{
        margin-bottom:20px;
    }
</style>