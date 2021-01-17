<template>
<div id="project">
    <h1 class="mb-5 text-center">PUBLISHING</h1>
    <p class="text-right">개인 제작물입니다 (클릭시 이동)</p>
    <div class="mySlides slide1">
        <a href="http://heeyoung54.dothome.co.kr/Project1" target="_blank" title="바로가기">
        <img :src=project1 style="width:70%"></a>
        <p id="caption">Project1</p>
        <p class="mt-3">Boostcamp 웹사이트 리디자인 및 수정˙보완</p>
    </div>

    <div class="mySlides slide2">
        <a href="http://heeyoung54.dothome.co.kr/Project2" target="_blank" title="바로가기">
        <img :src=project2 style="width:70%"></a>
        <p id="caption">Project2</p>
        <p>AiHackathon2018 웹사이트 리디자인 및 수정˙보완</p>
    </div>

    <div class="mySlides slide3">
        <a href="http://heeyoung54.dothome.co.kr/Project3" target="_blank" title="바로가기">
        <img :src=project3 style="width:70%"></a>
        <p id="caption">Project3</p>
        <p>한국방송통신대학교 스터디 홍보 사이트 '상한가' 기획 및 제작</p>
    </div>

    <!--화살표버튼 -->
    <a class="prev" onclick="plusSlides(-1)">
        &#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

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

@media screen and (max-width: 991px){
    .mySlides {
        padding:20px 0;
    }
}

@media screen and (max-width: 500px){
    #project p{
        font-size: 13px;
    }
}


</style>
