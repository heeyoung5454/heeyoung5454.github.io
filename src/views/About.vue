<template>
<div>
<div class="container-md">
    <div class="mt-4 mb-5">
        <h1 class="mb-4 text-center">ABOUT</h1>
        <b-card-group columns>
            <b-card title="PROFILE" img-src="https://placekitten.com/300/300" img-alt="Image" img-top>
                <b-card-text>
                    정희영<br>
                    1994.09.08<br>
                    서울시 은평구<br>
                    서울여자대학교 컴퓨터학 졸업                    
                </b-card-text>
            </b-card>

            <b-card title="CAREER" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top style="maxaa-width: 20rem;" class="mb-2 text-left">
                <b-card-text>
                    (주) 웹플래너<br>
                    코스모스엔터테인먼트
                </b-card-text>

                <b-button href="#" variant="outline-primary">자세히보기</b-button>
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
                <b-card-title>watch</b-card-title>
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
                <b-progress :value="bar.value" variant="primary" animated></b-progress>
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

                <b-button v-b-modal.webplanner variant="outline-primary" class="mt-2 float-right">더보기</b-button>

                <b-modal id="webplanner" centered title="(주)웹플래너" ok-only>
                    <p>
                        2020.02 ~ 현재
                        <br> 홈페이지 유지보수 2건, 자체 홈페이지 1건 개발 업무를 하고 있습니다. 전자정부프레임워크를 사용하며 언어는 java입니다.
                        주로 프론트앤드 업무를 담당하며 백엔드도 함께 하고 있습니다. <br>또한 카페24를 통해 쇼핑몰을 제작하였습니다.
                    </p>
                    <p>
                        자세한 내용이 궁금하시다면 <a href="/portfolio">이곳</a> 을 클릭하세요.
                    </p>
                </b-modal>
            </b-card>

            <b-card header="코스모스엔터테인먼트" header-tag="header" title="COSMOSENTER">
                <b-card-text class="m-2">
                    <div class="mb-2">게임 내 서비스 기획<br>
                        <span class="ml-2">- 전자정부프레임워크, 이클립스, 비주얼스튜디오코드, 카페24</span>
                    </div>
                    <div class="mb-2">홈페이지 이벤트 기획 <br>
                        <span class="ml-2">- html, css, javascript, jquery</span>
                    </div>                    
                </b-card-text>

                <b-button v-b-modal.cosmos variant="outline-primary" class="mt-2 float-right">더보기</b-button>

                <b-modal id="cosmos" centered title="코스모스엔터테인먼트" ok-only>
                    <p>
                        2018.02 ~ 2019.01 <br>게임 시스템 및 서비스 기획업무를 하였습니다.
                        유저들의 성향을 분석하여 게임 컨텐츠를 추가하였으며, 신규유저 유입을 위한 이벤트를 진행하였습니다.
                        또한 게임 내 시스템 개선을 위한 UI/UX 디자인과 웹 미니게임 기획을 하였습니다.
                    </p>
                    <p>
                        자세한 내용이 궁금하시다면 <a href="/portfolio">이곳</a> 을 클릭하세요.
                    </p>
                </b-modal>

            </b-card>

        </b-card-group>
    </div>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
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
                    value: 55
                },
                {
                    bTitle: 'oracle',
                    value: 80
                },
                {
                    bTitle: 'java',
                    value: 65
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
