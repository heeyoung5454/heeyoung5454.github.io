<template>
<div >     
    <Slide/>    
    <div id="About" class="container-md">
        <About />
    </div>
    <Jumbotron />

    <hr>
    <div id="Portfolio" class="container-md">
        <Portfolio />
    </div>

    <FixImg/>
    
    <div id="Faq" class="container-md">
        <Faq />
    </div>

</div>
</template>

<script>
import About from "./About.vue";
import Portfolio from "./Portfolio.vue";
import Faq from "./board/Faq.vue";

import Slide from "./main/slide.vue";
import Jumbotron from "./main/jumbotron.vue";
import FixImg from "./main/FixImg.vue";


export default {
    name: "Home",
    components: {
        Slide,
        Jumbotron,
        About,
        Portfolio,
        Faq,
        FixImg
    }
    
};
</script>

<style>
#slide {
    margin: 30px 0;
}
</style>
