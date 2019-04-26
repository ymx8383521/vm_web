<template>
    <tr>
        <th>{{headers.id}}</th>
        <th>{{headers.vm_name}}</th>
        <th>{{headers.vm_cpu}}</th>
        <th>{{headers.vm_memory}}</th>
        <th>{{headers.vm_os}}</th>
        <th>{{headers.vm_disk}}</th>
        <th>{{headers.vm_ip}}</th>
        <th>{{headers.vm_audit}}</th>
        <th>{{headers.vm_proposer}}</th>
        <slot></slot>
    </tr>
</template>
<script>
export default {
    name:'VHostHeader',
    data(){
        return {

        }
    },
    props:{
        headers:Object
    }
}
</script>
<style scoped>

</style>