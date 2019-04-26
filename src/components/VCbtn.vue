<template>
    <div>
        <el-button type="success" size='—' @click="dialogFormVisible = true">新建虚拟机</el-button>

        <el-dialog title="创建虚拟机" :visible.sync="dialogFormVisible" center>
            <el-form :model="form" :rules="rules" :label-width="formLabelWidth">
                <el-form-item label="虚拟机名称" prop="vm_name">
                    <!-- v-model 输入啥 form.name就是啥 -->
                    <el-input v-model="form.vm_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="CPU核数" prop="vm_cpu">
                    <el-input v-model.number="form.vm_cpu" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="内存大小" prop="vm_memory">
                    <el-input v-model.number="form.vm_memory" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="磁盘大小" prop="vm_disk">
                    <el-input v-model.number="form.vm_disk" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="虚拟机IP" prop="vm_ip">
                    <el-input v-model="form.vm_ip" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="虚拟机网关" prop="vm_gateway">
                    <el-input v-model="form.vm_gateway" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="宿主机IP" prop="host_ip">
                    <el-input v-model="form.host_ip" autocomplete="off" @blur="dispatchDisk(form.host_ip)"></el-input>
                </el-form-item>
                <el-form-item label="存储磁盘名称" prop="datastore">
                    <!-- 优化磁盘的选择 -->
                    <!-- <el-input v-model="form.datastore" autocomplete="off"></el-input> -->
                    <el-select v-model="form.datastore" placeholder="请选择磁盘">
                        <el-option v-for='(item,index) in getDiskList' :key="index" :label="item.disk_name+' '+item.disk_space" :value="item.disk_name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="操作系统">
                    <el-select v-model="form.vm_os" placeholder="请选择操作系统">
                        <el-option label="Centos" value="centos7"></el-option>
                        <el-option label="Windows" value="windows"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="申请人" prop="vm_proposer">
                    <el-input v-model="form.vm_proposer" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size='—' @click="dialogFormVisible = false">取 消</el-button>
                <el-button size='—' type="primary" @click="Vcreate()">创 建</el-button>
            </div>
        </el-dialog>
    </div>
    
</template>
<script>
import axios from 'axios'

export default {
    name:'VCREATE',
    data(){
        return {
            dialogFormVisible:false,
            formLabelWidth: '120px',
            form: {
                "vm_name": '',
                "vm_cpu": '',
                "vm_memory": '',
                "vm_os": 'centos7',
                "vm_disk": '',
                "vm_ip": '',
                "vm_gateway": '',
                "vm_proposer": '',
                "host_ip": '',
                "datastore": ''
            },
            rules:{
                vm_name:[
                    { required: true, message: '请输入虚拟机名称'}
                ],
                vm_cpu:[
                    { required: true, message: '请输入虚拟机Cpu核数'},
                    { type: 'number', message: '输入的不是数字类型'},
                ],
                vm_memory:[
                    { required: true, message: '请输入虚拟机内存大小'},
                    { type: 'number', message: '输入的不是数字类型'}
                ],
                vm_disk:[
                    { required: true, message: '请输入虚拟机磁盘大小'},
                    { type: 'number',  message: '输入的不是数字类型'}
                ],
                vm_ip:[
                    { required: true, message: '请输入虚拟机的IP'}
                ],
                vm_gateway:[
                    { required: true, message: '请输入虚拟机的网关'}
                ],
                host_ip:[
                    { required: true, message: '请输入宿主机IP'}
                ],
                datastore:[
                    { required: true, message: '请输入存储磁盘的名称'}
                ],
                vm_proposer:[
                    { required: true, message: '请输入申请人姓名'}
                ]
            }
        }
    },
    props:{
        
    },
    created(){
        
    },
    methods:{
        Vcreate(){
            const _this=this
            axios.post('http://172.20.100.172:8000/api/v1/vmhost/',{
                "vm_name": this.form.vm_name,
                "vm_cpu": this.form.vm_cpu,
                "vm_memory": this.form.vm_memory,
                "vm_os": this.form.vm_os,
                "vm_disk": this.form.vm_disk,
                "vm_ip": this.form.vm_ip,
                "vm_gateway": this.form.vm_gateway,
                "vm_proposer": this.form.vm_proposer,
                "host_ip": this.form.host_ip,
                "datastore": this.form.datastore
            })
            .then(function(response){
                // console.log(response);
                _this.dialogFormVisible = false;
                _this.$store.dispatch('getUnstallVmHosts');
            })
            .catch(function(error){
                console.log(error);
            })
        },
        dispatchDisk(host_ip){
            this.$store.dispatch('getHostList',host_ip);
        }
    },
    computed:{
        getDiskList(){
            try{
                return this.$store.state.diskList.data.results[0].physicaldisk;
            }
            catch(error){
                console.log(error)
            }
            
        }
    }
}
</script>
<style scoped>

</style>