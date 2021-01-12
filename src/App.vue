<template>
    <div id="app" >
        <div id="header">
            <Header/>
        </div>
        <div class="content" >
            <router-view></router-view>   
        </div>
        <Sidebar/>
        <Footer/>
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Sidebar from "./components/layout/Sidebar.vue";


export default {
    name : "App",
    components:{
        Header,
        Footer,
        Sidebar
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

#app{
    font-family: "Noto Sans", "Helvetica Nene"; 
    position: relative;
}

#header{
    position: fixed;
    width:100%;
    top:0;
    z-index: 999;
    
}

.content{
    margin-top: 100px;
    margin-bottom: 100px;
}


</style>