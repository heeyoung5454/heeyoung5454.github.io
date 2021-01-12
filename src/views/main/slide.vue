<template>
<div id="slide">
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="512" img-height="240">
        <b-carousel-slide :img-src=slideImg4>
            <div class="centered">
                <h1 class="mt-4 mb-4">안녕하세요 정희영입니다</h1>
                <p class="mb-1">1년차 주니어 개발자입니다</p>                
                </div>
        </b-carousel-slide>
        <b-carousel-slide :img-src=slideImg2>
            <div class="centered">
                <h1 class="mt-4 mb-4">프론트앤드에 관심있습니다</h1>
                <p class="mb-1">백엔드도 가능합니다</p>         
            </div>
        </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>
import welcome from "../../assets/welcome.jpg";
import hello from "../../assets/hello.png";
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";

export default {
    data() {
        return {
            slideImg1: Slide1,
            slideImg2: hello,
            slideImg3: welcome,
            slideImg4: Slide2
        }
    }

}
</script>

<style>
#carousel-fade {
    position: relative;
}

#slide {
    position: relative;
}

#slide img {
    height: 500px;    
    
  filter: blur(5px);
  -webkit-filter: blur(5px);
}

.centered {
    position: absolute;
    width:80%;
    top: -500%;
    left: 50%;
    padding: 20px;    
    border: 8px solid #f1f1f1;


    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.5); /* Black w/opacity/see-through */

    transform: translate(-50%, -50%);    
    font-size:45px;
}
.centered p{
    font-size: 16px; 
}
</style>
