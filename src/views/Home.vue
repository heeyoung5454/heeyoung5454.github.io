<template>
<div>    
    <div id="About" class="container-md">
        <About />
    </div>
    <hr>
    <FixImg />

    <div id="Portfolio" class="container-md">
        <Portfolio />
    </div>

    <Project/>

    <div id="Faq" class="container-md">
        <Faq />
    </div>

    <div class="text-center">
        <b-button variant="outline-dark" @click="contact">제작자 연락하기</b-button>
    </div>
</div>
</template>

<script>
import About from "./About.vue";
import FixImg from "./main/FixImg.vue";
import Portfolio from "./Portfolio.vue";
import Project from "./Project.vue";
import Faq from "./board/Faq.vue";

export default {
    name: "Home",
    components: {
        About,
        FixImg,
        Portfolio,
        Project,
        Faq
    },
    methods: {
        contact() {
            this.$router.push({
                path: '/contact'
            })
        }
    }

};
</script>
