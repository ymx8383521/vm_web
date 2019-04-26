<template>
    <tr>
        <th>{{headers.id}}</th>
        <th>{{headers.machine_name}}</th>
        <th>{{headers.host_mode}}</th>
        <th>{{headers.cpu}}</th>
        <th>{{headers.memory}}</th>
        <th>{{headers.host_ip}}</th>
        <th>{{headers.idrac_ip}}</th>
        <th>{{headers.host_active}}</th>
    </tr>
</template>
<script>
export default {
    name:'HostHeader',
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