<template>
<div>
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="512" img-height="240">
        <b-carousel-slide caption="환영합니다" :img-src=slideImg1>            
        </b-carousel-slide>
        <b-carousel-slide caption="정희영의 포트폴리오입니다" :img-src=slideImg2>            
        </b-carousel-slide>
        <b-carousel-slide caption="Hello" img-src="https://picsum.photos/1024/480/?image=314">            
        </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import welcome from "../../assets/welcome.jpg";
import hello from "../../assets/hello.jpg";

export default {
    data() {
        return {
            slideImg1: welcome,
            slideImg2: hello,
            slideImg3: welcome
        }
    }

}
</script>

<style scoped>
#slide img{
    height: 300px;
}
</style>