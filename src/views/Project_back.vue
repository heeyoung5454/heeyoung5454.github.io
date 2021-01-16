<template>
<div id="project">
    <div class="mt-5">

        <h1 class="mb-5 text-center ">RESPONSIVE WEB PROJECT</h1>

        <section id="Boostcamp">
            <div class="inner">
                <div>
                    <h2>PROJECT. <br><span class="light">BOOSTCAMP</span></h2>

                    <p>Boostcamp 웹사이트 <br class="m_414">리디자인 및 수정˙보완</p>
                    <span class="btn"><a href="http://heeyoung54.dothome.co.kr/Project1" target="_blank" title="새창 열기">Boostcamp 바로가기</a></span>
                </div>
                <img :src=project1 alt="부스트캠프 목업 이미지">
            </div>

        </section>

        <section id="AIHackathon">
            <div class="inner">
                <div>
                    <h2>PROJECT. <br><span class="light">AiHackathon2018</span></h2>

                    <p>AiHackathon2018 웹사이트 <br class="m_414">리디자인 및 수정˙보완</p>
                    <span class="btn"> <a href="http://heeyoung54.dothome.co.kr/Project2" target="_blank" title="새창 열기">AIHackathon2018 바로가기</a></span>
                </div>

                <img :src=project2 alt="ai해커톤 목업 이미지">
            </div>
        </section>

        <section id="Sanghanga">
            <div class="inner">
                <div>
                    <h2>PROJECT. <br><span class="light">Sanghanga</span></h2>

                    <p>한국방송통신대학교 스터디 홍보 사이트 <br class="m_414">'상한가' 기획 및 제작</p>

                    <span class="btn"> <a href="http://heeyoung54.dothome.co.kr/Project3" target="_blank" title="새창 열기">Sanghanga 바로가기</a></span>
                </div>

                <img :src=project3 alt="상한가 목업 이미지">
            </div>

        </section>

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
body,
ul,
li,
section,
header,
p,
img,
h1,
h2 {
    padding: 0;
    margin: 0;

}

#project a {
    text-decoration: none;
    color: #333 !important;
}

.light {
    font-weight: 300;
}

.float_left {
    float: left;
}

.float_right {
    float: right;
}

.m_414 {
    display: none;
}

header h1 {
    color: #333;
    margin: 10px 0 30px 0;
    font-family: 'Noto Sans KR', sans-serif;

}

a {
    text-decoration: none;
    color: #333;
}

header a:hover {
    text-shadow: 2px 2px 2px #333;
}

.inner {
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
}

header .inner {
    padding: 20px 0;
    height: 100px;
}

section .inner {
    height: 300px;
    padding: 25px 0;
    position: relative;
}

section h2 {
    margin-bottom: 20px;
    font-family: 'Noto Sans KR', sans-serif;

}

section img {
    position: absolute;
    top: 25px;
    right: 0;
    height: 250px;
    width: 400px;
}

section .btn {
    border: 1px solid #333;
    padding: 10px 15px;
    position: absolute;
    bottom: 50px;
    left: 0;
}

.close {
    opacity: 0.5;
    text-decoration: line-through;

}

section .btn:hover {
    background-color: white;
    border: none;
}

#Boostcamp {
    background-color: #e5f1ff;
}

#AIHackathon {
    background-color: #63c5a4;

}

#Sanghanga {
    background-color: #45A0DE;
}

@media screen and (max-width: 1200px) {

    header .inner {

        padding-left: 30px;
        padding-right: 30px;
    }

    section .inner {
        padding-left: 30px;
        padding-right: 30px;
    }

    section .btn {
        left: 30px;
    }

    section img {
        right: 50px;
    }

}

@media screen and (max-width: 768px) {

    body {
        text-align: center;
    }

    section img {
        top: 130px;
        left: 50%;
        margin-left: -200px;
    }

    section .inner {
        height: 480px;
    }

    section .btn {
        bottom: 25px;
        left: 50%;
    }

    #Boostcamp .btn {
        margin-left: -91.08px;
    }

    #AIHackathon .btn {
        margin-left: -114.615px;

    }

    #Sanghanga .btn {

        margin-left: -91.15px;
    }

}

@media screen and (max-width: 414px) {

    section img {
        height: 200px;
        width: 300px;
        margin-left: -150px;
        top: 170px;

    }

    .m_414 {
        display: block;
    }

}
</style>