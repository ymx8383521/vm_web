<template>
    <tr>
        <th>{{forms.id}}</th>
        <td>{{forms.machine_name}}</td>
        <td>{{forms.host_mode}}</td>
        <td>{{forms.cpu}}</td>
        <td>{{forms.memory}}</td>
        <td>{{forms.host_ip}}</td>
        <td>{{forms.idrac_ip}}</td>
        <td>{{forms.host_active}}</td>
    </tr>
</template>
<script>
export default {
    name:'HostForm',
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