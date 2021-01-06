
<template>
<div id="app">
    <Header />
    <div id="content" class="content">
        <router-view> </router-view>
    </div>
    
    <Sidebar />
    <Footer />
</div>
</template>

<script>

 // eslint-disable-next-line
 /* eslint-disable */ 
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Sidebar
        }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    color: #2c3e50;    
}
</style>
