<template>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header" @click="activeHander(0)">
            <router-link class="navbar-brand" to="/">首页</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li v-for='(item,index) in routes' :class="{active:index==currentIndex}" @click="activeHander(index)">
                <router-link :to="item.url">{{item.title}}</router-link>
            </li>
            
        </ul>
        <form class="navbar-form navbar-right">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
            <li><router-link to="#">登陆</router-link></li>
            <li style="color:#9d9d9d;line-height: 3.429">|</li>
            <li><router-link to="#">注册</router-link></li>

        </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>    
</template>
<script>
export default {
    name:'Vheader',
    data(){
        return {
            routes:[
                {url:'/',title:'主机'},
                {url:'/room',title:'机房'},
                {url:'/vmhost',title:'虚拟机'}
            ],
            currentIndex:0
        }
    },
    methods:{
        // 点击哪个哪个亮
        activeHander(index){
            this.currentIndex=index
            // console.log(this.currentIndex)
        }
    },
    // 防止active显示不正确
    created(){
        for(var i=0;i <this.routes.length;i++){
            if(this.$route.path == this.routes[i].url){
                this.currentIndex=i;
                return;
            }
        }
    }
}
</script>
<style scoped>
    .navbar-right a{
        padding: 15px 5px;
    }
</style>
