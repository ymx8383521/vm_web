<template>
    <tr>
        <th>{{hosts.host_id}}</th>
        <td>{{hosts.host_name}}</td>
        <td>{{hosts.host_ip}}</td>
        <td>{{hosts.idrac_ip}}</td>
    </tr>
</template>
<script>
export default {
    name:'MainCloumn',
    data(){
        return {

        }
    },
    props:{
        hosts:Object
    }
}
</script>
<style scoped>

</style>