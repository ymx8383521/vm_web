<template>
    <div class='col-md-6'>
         <el-button type="primary" size='small' @click="Vget()">修改</el-button>

        <el-dialog title="更新虚拟机" :visible.sync="dialogFormVisible" center>
            <el-form :model="form" :rules="rules" :label-width="formLabelWidth">
                <el-form-item label="虚拟机名称" prop="vm_name">
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
                <el-button size='—' type="primary" @click="Vput()">确 定</el-button>
            </div>
        </el-dialog>  
    </div>
    
</template>
<script>
import axios from 'axios'

export default {
    name:'VPUT',
    data(){
        return {
            dialogFormVisible:false,
            formLabelWidth: '120px',
            form: {
                "vm_name": '',
                "vm_cpu": '',
                "vm_memory": '',
                "vm_os": '',
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
        pk:Number
    },
    created(){
        // console.log(this.pk)
    },
    methods:{
        Vget(){
            const _this=this
            axios.get(`http://172.20.100.172:8000/api/v1/vmhost/${_this.pk}/`)
            .then(function(response){
                    // console.log(response);
                    _this.form.vm_name=response.data.vm_name
                    _this.form.vm_cpu=response.data.vm_cpu
                    _this.form.vm_memory=response.data.vm_memory
                    _this.form.vm_os=response.data.vm_os
                    _this.form.vm_disk=response.data.vm_disk
                    _this.form.vm_ip=response.data.vm_ip
                    _this.form.vm_gateway=response.data.vm_gateway
                    _this.form.vm_proposer=response.data.vm_proposer
                    _this.form.host_ip=response.data.host_ip
                    _this.form.datastore=response.data.datastore
                    _this.dialogFormVisible = true;
            })
            .catch(function(error){
                    console.log(error);
            })
        },
        Vput(){
            const _this=this
            axios.put(`http://172.20.100.172:8000/api/v1/vmhost/${_this.pk}/`,{
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
            this.form.datastore=''
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
    },
    components:{
    }
}
</script>
<style scoped>
    .el-button--small {
        padding:9px 11px;
    }
</style>