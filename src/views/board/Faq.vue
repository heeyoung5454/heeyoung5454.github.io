<template>
<div class="container-md mt-5 mb-5" role="tablist">

    <div id="faq">
        <h1 class="mb-5">FAQ</h1>
        <p class="text-right text-success"><a href="/contact" v-b-popover.hover.top="'언제든지 연락하실 수 있습니다'">더 궁금하신것이 있다면?</a></p>
        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-1 variant="dark" class="text-left">Q1. 정희영은 어떤 사람인가요?</b-button>
            <b-collapse id="collapse-1" visible role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text1 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-2 variant="dark" class="text-left color-faq">Q2. 웹개발을 선택하게 된 이유는 무엇인가요?</b-button>
            <b-collapse id="collapse-2" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text2 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-3 variant="dark" class="text-left color-faq">Q3. 관심있는 것은 무엇인가요?</b-button>
            <b-collapse id="collapse-3" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text3 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-4 variant="dark" class="text-left color-faq">Q4. 가장 자신있는 기술은 무엇인가요?</b-button>
            <b-collapse id="collapse-4" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text4 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-5 variant="dark" class="text-left color-faq">Q5. 하고 싶은 말은?</b-button>
            <b-collapse id="collapse-5" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text5 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            text1: '중요한 일에 있어서 정확하고 체계적으로 기억하며 신중하고 책임감이 있는 성격입니다.  정확성과 조직력을 발휘하는 분야의 일을 좋아합니다. '
                    +'과거의 경험을 바탕으로 의사결정을 하며, 반복되는 일상적인 일에 대한 인내심이 강합니다. '                     
                    +' 다소 내향적인 경향이 있지만 조직적인 사회에서 주어진 임무를 철저하게 완수하려 노력하며 규칙을 잘 준수하는 유형입니다. 겉으로 튀는 것을 좋아하지 않으며 용의단정하며 정돈된 스타일입니다.',
            text2: '우선적으로 웹은 앱이나 타 시스템보다 사용하는 툴이 가볍고 편리하게 조작가능하여 접근하기가 용이했습니다. 실시간으로 내가 변동한 코드가 빠르게 적용되어 보여질 수 있다는 것에 큰 매력을 느꼈습니다. 눈에 보이지 않는 백엔드 로직을 짜는것도 재미있었지만 화면UI를 제작하는 프론트엔드 개발이 참 재미있습니다.',
            text3: '프론트앤드 개발자로서의 스킬 업에 대한 것입니다. 외부 플러그인을 사용하면 보다 쉽고 빠르게 개발을 할 수 있으나, 자신의 개발능력 향상에는 마이너스적 요소가 될 수 있다고 생각합니다. jquery를 능숙하게 사용하는 것보다 javascript를 완벽하게 마스터하는 것이 더 중요하고 생각합니다. 프론트엔드 개발자로서 최근 트렌드에 발맞춰 가기 위해 여러가지 프레임워크를 알아보고 있습니다. 요즘은 vuejs을 독학으로 공부하고 있습니다.',
            text4: 'html, css, javascript, jquery, vue 등 퍼블리싱 및 프론트엔드에 관심이 많습니다. 특별히 커스터마이징에 자신있습니다. 서브개발로 백엔드도 가능합니다.',
            text5: '오랫동안 함께 하고 싶은 조직을 찾고 있습니다. 개인이 성장하고 그로 인해 기업의 규모도 커질 수 있는, 서로 좋은 관계가 되는 회사를 찾고 있습니다. 사이트를 보고 저에 대해 관심이 생기신 분들은 heeyoung5454@gmail.com 으로 연락주시기 바랍니다.'
        }
    }
}
</script>

<style>
#faq{
    min-height: 545px;
}

</style>