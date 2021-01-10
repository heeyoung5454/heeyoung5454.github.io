<template>
<div class="container-md ">
    <div class="mt-5 mr-5 ml-5">
        <h1 class="mb-4 text-center ">PORTFOLIO</h1>

        <b-tabs content-class="mt-3" fill>
            <b-tab title="개발" active>

                <b-card-group deck class="m-4">
                    <b-card title="IPRV" img-src="https://picsum.photos/300/300/?image=6" img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>                            
                            2020.02 ~ 2021.01<br>                            
                            지식재산권 침해 예측 시스템 개발                            
                        </b-card-text>
                        <b-link variant="info" href="http://www.iprv.kr" target="_blank"> 바로가기 </b-link>
                    </b-card>

                    <b-card title="SDU" :img-src=portfolio2 img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>                        
                            2020.03 ~ 2021.01<br>                            
                            서울디지털대학교 홈페이지 유지보수
                        </b-card-text>
                        <b-link variant="info" href="http://www.sdu.ac.kr" target="_blank"> 바로가기 </b-link>
                    </b-card>

                </b-card-group>

                <b-card-group deck class="m-4">

                    <b-card title="강동구 노동권익센터" :img-src=portfolio3 img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            2020.04 ~ 2021.01<br>
                            강동구 노동권익센터 홈페이지 유지보수
                        </b-card-text>
                        <b-link variant="info" href="http://www.gangdong.go.kr/nodong" target="_blank"> 바로가기 </b-link>
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
                            게임 내 서비스 기획 및 운영
                            </b-card-text>
                            <b-link variant="info" href="https://www.z9star.co.kr/main.html" target="_blank"> 바로가기 </b-link>
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
import myImg1_2 from "../assets/portfolio/SDU_1.png";
import myImg1_3 from "../assets/portfolio/gangdong.png";
import myImg1_4 from "../assets/portfolio/hogye.jpg";
import myImg2_1 from "../assets/portfolio/z9star.png";
import myImg2_2 from "../assets/portfolio/korea_sale.png";

export default {
    data() {
        return {            
            portfolio2: myImg1_2,
            portfolio3: myImg1_3,
            portfolio4: myImg1_4,
            portfolio5: myImg2_1,
            portfolio6: myImg2_2
        }
    }

}
</script>
