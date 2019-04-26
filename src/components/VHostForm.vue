<template>
    <tr>
        <th>{{forms.id}}</th>
        <td>{{forms.vm_name}}</td>
        <td>{{forms.vm_cpu}}</td>
        <td>{{forms.vm_memory}}</td>
        <td>{{forms.vm_os}}</td>
        <td>{{forms.vm_disk}}</td>
        <td>{{forms.vm_ip}}</td>
        <td>{{forms.vm_audit}}</td>
        <td>{{forms.vm_proposer}}</td>
        <slot></slot>
    </tr>
</template>
<script>
export default {
    name:'VHostForm',
    data(){
        return {

        }
    },
    props:{
        forms:Object
    }
}
</script>
<style scoped>

</style>