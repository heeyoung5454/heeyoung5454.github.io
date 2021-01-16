<template>
<div id="FixImg">
    <div class="bg-image img1">
        <div class="bg-text">
            <b-jumbotron>
                <template #header>안녕하세요!</template>

                <template #lead>
                    홈페이지에 방문해주셔서 감사합니다. 즐거운 시간 되세요.
                </template>

                <hr class="my-4">

                <p>
                    이 곳은 Vue와 boostrap으로 만든 홈페이지입니다. database는 연동되어 있지 않는 점 알려드립니다.
                </p>

                <b-button class="mr-2" variant="outline-light" href="#" @click="portfolio">포트폴리오 보기</b-button>
                <b-button class="mr-2" variant="outline-light" href="#" @click="contact">제작자 연락하기</b-button>
            </b-jumbotron>

        </div>

    </div>

</div>
</template>

<script>
export default {
    methods: {
        portfolio() {
            this.$router.push({
                path: '/portfolio'
            })
        },

        contact() {
            this.$router.push({
                path: '/contact'
            })
        }

    }

};
</script>

<style>
.img1 {
    background-image: url("../../assets/fixImg.jpg");
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}

.bg-text {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    width: 100%;    
}

.jumbotron{
    background-color: transparent !important; 
}

@media screen and (max-width: 420px){
    .display-3{
        font-size: 50px !important;
    }
    .lead{
        font-size: 18px;
    }



}
</style>
