<template>
    <div id="app">
        <Header/>
        <div id="content" class="content">
            <router-view></router-view>   
        </div>
        <Sidebar/>
        <Footer/>
    </div>
</template>

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


</style>