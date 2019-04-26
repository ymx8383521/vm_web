<template>
    <div class="container">
        <div class="row">
            <div class="panel panel-primary">
                <!-- Default panel contents -->
                <h3 class="panel-heading">主机列表</h3>

                <!-- 循环生成列表 -->
                <table class="table table-striped table-hover">
                    <!-- 生成表头 -->
                    <thead>
                        <HostHeader :headers='getHeaders'></HostHeader>
                    </thead>
                    
                    <!-- 生成表数据 -->
                    <tbody>
                        <HostForm v-for='(item,index) in getForms' :forms='item' :key='index'></HostForm>
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import HostHeader from './HostHeader.vue'
import HostForm from './HostForm.vue'

export default {
    name:'Host',
    data(){
        return {

        }
    },
    computed:{
        getHeaders(){
            return this.$store.state.hostHeader.data;
        },
        getForms(){
            // console.log('physicaldisk',this.$store.state.diskList.data.results[0].physicaldisk)
            return this.$store.state.hostList.data.results;
        }
    },
    components:{
        HostHeader,
        HostForm
    }
}
</script>
<style scoped>

</style>