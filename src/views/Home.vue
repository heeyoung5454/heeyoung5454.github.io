<template>
<div>
    <!-- <h1>welcome to {{title}}!</h1>         -->
    <div id="slide">
        <Slide />
    </div>
    <div class="container-md">
        <Card />
    </div>
    <Jumbotron />
    <div class="container-md">
        <Calendar />
    </div>
</div>
</template>

<script>
 // eslint-disable-next-line
 /* eslint-disable */ 
import Card from "./main/card.vue";
import Calendar from "./main/calendar.vue";
import Slide from "./main/slide.vue";
import Jumbotron from "./main/jumbotron.vue";

export default {
    name: "Home",
    components: {
        Card,
        Calendar,
        Slide,
        Jumbotron
    },
    data() {
        return {
            title: 'heeyoung'
        }
    },
};
</script>

<style>
#slide {
    margin: 30px 0;
}
</style>
