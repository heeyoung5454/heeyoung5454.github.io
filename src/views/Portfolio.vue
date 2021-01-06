<template>
<div class="container-md ">
    <div class="mt-5 mr-5 ml-5">
        <h1 class="mb-4 text-center ">PORTFOLIO</h1>

        <b-tabs content-class="mt-3" fill>
            <b-tab title="개발" active>

                <b-card-group deck class="m-4">
                    <b-card title="IPRV" img-src="https://picsum.photos/300/300/?image=6" img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            지식재산권 침해 예측 시스템 개발
                        </b-card-text>
                        <b-link variant="info" href="http://www.iprv.kr" target="_blank"> 바로가기 </b-link>
                    </b-card>

                    <b-card title="SDU" :img-src=value img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            서울디지털대학교 홈페이지 유지보수
                        </b-card-text>
                        <b-link variant="info" href="http://www.sdu.ac.kr" target="_blank"> 바로가기 </b-link>
                    </b-card>

                </b-card-group>

                <b-card-group deck class="m-4">

                    <b-card title="강동구 노동권익센터" img-src="https://picsum.photos/300/300/?image=864" img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            강동구 노동권익센터 홈페이지 유지보수
                        </b-card-text>
                        <b-link variant="info" href="http://www.gangdong.go.kr/nodong" target="_blank"> 바로가기 </b-link>
                    </b-card>

                    <b-card title="카페24" img-src="https://picsum.photos/300/300/?image=564" img-alt="Image" img-top tag="article" class="m-3">
                        <b-card-text>
                            카페24 커스터마이징을 통한 전통시장 쇼핑몰 제작
                        </b-card-text>
                        <b-link variant="info" href="http://hogye.kr" target="_blank"> 바로가기 </b-link>
                    </b-card>

                </b-card-group>

            </b-tab>

            <b-tab title="기획">                         
                     <b-card title="내맘대로Z9별" img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top class="m-5">
                     
                    <b-card-body>
                        - 게임 내 서비스 기획 및 운영                        
                    </b-card-body>
                </b-card>

            </b-tab>
        </b-tabs>

    </div>

</div>
</template>

<script>
import myImg1 from "../assets/portfolio/SDU_1.png";
export default {
    data() {
        return {
            value: myImg1
        }
    }

}
</script>
