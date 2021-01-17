<template>
<div>
<div class="mt-5 container-md">
    <div class="mt-4 mb-5">
        <h1 class="mb-5 text-center">ABOUT</h1>
        <b-card-group columns>
            <b-card title="PROFILE" :img-src=profile1 img-alt="Image" img-top>
                <b-card-text>
                    * 정희영<br>
                    * 1994.09.08<br>                    
                    * 서울여자대학교 컴퓨터학 졸업                    
                </b-card-text>
            </b-card>

            <b-card title="CAREER" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top style="maxaa-width: 20rem;" class="mb-2 text-left">
                <b-card-text>
                    * (주) 웹플래너<br>
                    * 코스모스엔터테인먼트
                </b-card-text>                
            </b-card>

            <b-card bg-variant="primary" text-variant="white">
                <blockquote class="card-blockquote">
                    <p>It ain't over till it's over</p>
                    <footer>
                        <small>Lawrence Peter <cite title="Source Title">Yogi Berra</cite></small>
                    </footer>
                </blockquote>
            </b-card>

            <b-card header="HOBBY">
                <b-card-title>exciting</b-card-title>
                <b-card-text>
                    스포츠 보는 것을 좋아합니다.
                </b-card-text>
            </b-card>

            <b-card img-src="https://picsum.photos/600/600/?image=585" img-alt="Image" overlay></b-card>

        </b-card-group>

    </div>
    <hr>

    <div class="mt-5 mb-5">
        <h2 class="mb-5">Skill</h2>
        <div v-for="bar in bars" class="row m-3" v-bind:key="bar">
            <div class="col-sm-2">{{ bar.bTitle }}</div>
            <div class="col-sm-10 pt-1">
                <b-progress :value="bar.value" variant="primary"></b-progress>
            </div>
        </div>
    </div>

    <hr>
    <div class="mt-5 mb-5">
        <h2 class="mb-5">Career</h2>
        <b-card-group deck>
            <b-card header="(주)웹플래너" header-tag="header" title="WEBPLANNER">

                <b-card-text class="m-2">                    
                    <div class="mb-2">웹 개발<br>
                        <span class="ml-2">- 전자정부프레임워크, 이클립스, 비주얼스튜디오코드, 카페24</span>
                    </div>
                    <div class="mb-2">
                        프론트엔드<br>
                        <span class="ml-2">- html, css, javascript, jquery</span>
                    </div>
                    <div class="mb-2">
                        백엔드<br>
                        <span class="ml-2">- java, jsp, oracle, mysql</span>
                    </div>
                </b-card-text>
            </b-card>

            <b-card header="코스모스엔터테인먼트" header-tag="header" title="COSMOSENTER">                
                <b-card-text class="m-2">                                        
                    <div class="mb-2">게임 내 서비스 기획<br>
                        <span class="ml-2">- 인게임 이벤트, 시나리오, 퀘스트 제작 </span>
                    </div>
                    <div class="mb-2">홈페이지 이벤트 기획 <br>
                        <span class="ml-2">- 웹 이벤트 기획, UI/UX 디자인</span>
                    </div>                    
                </b-card-text>

            </b-card>

        </b-card-group>
    </div>
</div>
</div>
</template>

<script>
import profile1 from "../assets/profile1.png";

export default {
    data() {
        return {
            profile1: profile1,
            
            bars: [{
                    bTitle: 'html / css',
                    value: 85
                },
                {
                    bTitle: 'javascript / jquery',
                    value: 70
                },
                {
                    bTitle: 'vue',
                    value: 50
                },
                {
                    bTitle: 'oracle',
                    value: 70
                },
                {
                    bTitle: 'java',
                    value: 60
                },
                {
                    bTitle: 'jsp',
                    value: 65
                }

            ]
        }
    }
}
</script>
