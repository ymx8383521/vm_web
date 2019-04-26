<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="panel panel-primary">
                    <div class="panel-heading">机房列表</div>
                    <div class="panel-body">
                        <el-row class="tac">
                            <el-col :span="12">
                                <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                                    <SideColumn v-for="(item,index) in getRoomList" :rooms='item' :key='index'></SideColumn>
                                </el-menu>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-primary">
                    <div class="panel-heading">机房主机列表</div>
                    <div class="panel-body">
                        <table class="table table-striped table-hover">
                            <!-- 表头 -->
                            <thead>
                                <tr>
                                    <th>主机ID</th>
                                    <th>主机名</th>
                                    <th>主机IP</th>
                                    <th>IDRAC_IP</th>
                                </tr>
                            </thead>
                            
                            <!-- 生成表数据 -->
                            <tbody>
                                <MainColumn v-for="(hosts,index) in getRoomHosts" :hosts='hosts' :key='index'></MainColumn>
                            </tbody>
                            
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SideColumn from './SideColumn.vue'
import MainColumn from './MainColumn.vue'

export default {
    name:'VROOM',
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{
        getRoomList(){
            return this.$store.state.roomList.data.results;
        },
        getRoomHosts(){
            return this.$store.state.roomhosts.data.host;
        }
    },
    components:{
        SideColumn,
        MainColumn
    }
}
</script>
<style scoped>
    .el-menu{
        min-width: 320px;
    }
</style>