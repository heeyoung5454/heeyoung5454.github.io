<template>
<div id="project">
    <h1 class="mb-5 text-center ">PUBLISHING</h1>
    <div class="mySlides slide1">
        <a href="http://heeyoung54.dothome.co.kr/Project1" target="_blank" title="바로가기">
        <img :src=project1 style="width:70%"></a>
    </div>

    <div class="mySlides slide2">
        <a href="http://heeyoung54.dothome.co.kr/Project2" target="_blank" title="바로가기">
        <img :src=project2 style="width:70%"></a>

    </div>

    <div class="mySlides slide3">
        <a href="http://heeyoung54.dothome.co.kr/Project3" target="_blank" title="바로가기">
        <img :src=project3 style="width:70%"></a>
    </div>

    <!--화살표버튼 -->
    <a class="prev" onclick="plusSlides(-1)">
        &#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- 제목 -->
    <div class="caption-container">
        <p id="caption">BOOSTCAMP</p>
    </div>

    <!--슬라이드 리스트-->
    <div class="row">
        <div class="column slide1">
            <img :src=project1 class="demo cursor" style="width:100%" onclick="currentSlide(1)" alt="BOOSTCAMP">
        </div>
        <div class="column slide2">
            <img :src=project2 class="demo cursor" style="width:100%" onclick="currentSlide(2)" alt="AIHACKATHON">
        </div>
        <div class="column slide3">
            <img :src=project3 class="demo cursor" style="width:100%" onclick="currentSlide(3)" alt="SANGHANGA">
        </div>
    </div>
</div>
</template>

<script>
import project_1 from "../assets/project/boostcamp.png"
import project_2 from "../assets/project/aihackAthon2018.png"
import project_3 from "../assets/project/sanghanga.png"

export default {
    data() {
        return {
            project1: project_1,
            project2: project_2,
            project3: project_3
        }
    }

}
</script>

<style>
#project {
    position: relative;
}


.mySlides {
    text-align: center;
    display: none;
    padding : 40px 0;
}

.slide1 {
    display:block;
    background-color: #e5f1ff;
}

.slide2 {
    background-color: #63c5a4;
}

.slide3 {
    background-color: #45A0DE;
}

.cursor {
    cursor: pointer;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: #222;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {        
    color:white;
    text-decoration: none;
}

/* 슬라이드제목 */
.caption-container {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 28%;    
    color: #222;
    font-size: 30px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.column {
    float: left;
    width: 33.333%;
}

.demo {
    opacity: 0.6;
}

.active,
.demo:hover {
    opacity: 1;
}
</style>
