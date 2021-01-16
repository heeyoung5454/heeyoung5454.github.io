<template>
<div>
    <div class="mt-5 container-md">
        <h1 class="mb-5 text-center ">PORTFOLIO</h1>

        <b-tabs content-class="mt-3" fill>
            <b-tab title="개발" active>

                <b-card-group deck class="m-4">
                    <b-card title="IPRV" :img-src=portfolio1 img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            2020.02 ~ 2021.01<br>
                            지식재산권 침해 예측 시스템 개발(solution)<br>

                        </b-card-text>
                        <b-link variant="info" href="http://www.iprv.kr" target="_blank"> 바로가기 </b-link>
                        <b-button v-b-modal.IPRV variant="outline-danger" class="mt-2 float-right">자세히보기</b-button>

                        <b-modal id="IPRV" centered title="지식재산권 침해 예측 시스템 " ok-only>
                            <p>
                                - IDE : eclipse (전자정부프레임워크)<br>
                                - 사용언어 : java<br>
                                - DB : mysql<br>
                                - 버전관리 : SVN<br>
                                - PMS : Readmine<br>
                                - UI : bootstrap
                            </p>
                        </b-modal>

                    </b-card>

                    <b-card title="SDU" :img-src=portfolio2 img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            2020.03 ~ 2021.01<br>
                            서울디지털대학교 홈페이지 유지보수(SI)
                        </b-card-text>
                        <b-link variant="info" href="http://www.sdu.ac.kr" target="_blank"> 바로가기 </b-link>

                        <b-button v-b-modal.sdu variant="outline-danger" class="mt-2 float-right">자세히보기</b-button>

                        <b-modal id="sdu" centered title="서울디지털대학교 " ok-only>
                            <p>
                                - IDE : eclipse (전자정부프레임워크)<br>
                                - 사용언어 : java<br>
                                - DB : mssql<br>
                                - 버전관리 : SVN<br>
                                - PMS : Readmine
                            </p>
                        </b-modal>
                    </b-card>

                </b-card-group>

                <b-card-group deck class="m-4">

                    <b-card title="강동구 노동권익센터" :img-src=portfolio3 img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            2020.04 ~ 2021.01<br>
                            강동구 노동권익센터 홈페이지 유지보수(SI)
                        </b-card-text>
                        <b-link variant="info" href="http://www.gangdong.go.kr/nodong" target="_blank"> 바로가기 </b-link>

                        <b-button v-b-modal.nodong variant="outline-danger" class="mt-2 float-right">자세히보기</b-button>

                        <b-modal id="nodong" centered title="강동구 노동권익센터" ok-only>
                            <p>
                                - IDE : eclipse (전자정부프레임워크)<br>
                                - 사용언어 : java<br>
                                - DB : oracle<br>
                                - 버전관리 : SVN<br>
                                - PMS : Readmine<br>
                                - UI : bootstrap
                            </p>
                        </b-modal>

                    </b-card>

                    <b-card title="카페24" :img-src=portfolio4 img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            2020.09 ~ 2020.12<br>
                            카페24 커스터마이징을 통한 전통시장 쇼핑몰 제작
                        </b-card-text>
                        <b-link variant="info" href="http://hogye.kr" target="_blank"> 호계시장 </b-link>

                    </b-card>

                </b-card-group>

            </b-tab>

            <b-tab title="기획 & 마케팅 & 운영">

                <b-card-group deck class="m-4">
                    <b-card title="내맘대로Z9별" :img-src=portfolio5 img-alt="Image" img-top tag="article">

                        <b-card-body>
                            <b-card-text>
                                2018.02 ~ 2019.01<br>
                                게임 내 서비스 기획 및 운영<br>
                            </b-card-text>
                            <b-link variant="info" href="https://www.z9star.co.kr/main.html" target="_blank"> 바로가기 </b-link>

                            <b-button v-b-modal.z9star variant="outline-danger" class="mt-2 float-right">자세히보기</b-button>

                            <b-modal id="z9star" centered title="내맘대로Z9별" ok-only>
                                <p>
                                    - 유저 분석 및 게임 신규 컨텐츠 제작<br>
                                    - 신규유저 유입을 위한 이벤트 진행<br>
                                    - 홈페이지 UI/UX 디자인 & 웹 미니게임 기획
                                </p>
                            </b-modal>
                        </b-card-body>
                    </b-card>

                    <b-card title="대한민국 동행세일" :img-src=portfolio6 img-alt="Image" img-top tag="article">

                        <b-card-body>
                            <b-card-text>
                                2020.06 ~ 2020.08<br>
                                대한민국 동행세일 SNS 마케팅 및 행사 보조
                            </b-card-text>
                        </b-card-body>
                    </b-card>

                </b-card-group>

            </b-tab>
        </b-tabs>
    </div>

</div>
</template>

<script>
import myImg1_1 from "../assets/portfolio/IPRV_1.png";
import myImg1_2 from "../assets/portfolio/SDU_4.png";
import myImg1_3 from "../assets/portfolio/gangdong2.png";
import myImg1_4 from "../assets/portfolio/hogye.png";
import myImg2_1 from "../assets/portfolio/z9star.png";
import myImg2_2 from "../assets/portfolio/korea_sale.png";

export default {
    data() {
        return {
            portfolio1: myImg1_1,
            portfolio2: myImg1_2,
            portfolio3: myImg1_3,
            portfolio4: myImg1_4,
            portfolio5: myImg2_1,
            portfolio6: myImg2_2
        }
    }

}
</script>

<style>
@media screen and (max-width: 700px){
    .m-4 {
        margin:0 !important;
    }

}
</style>
