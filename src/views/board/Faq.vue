<template>
<div class="container-md mt-5 mb-5" role="tablist">

    <div id="faq">
        <h1 class="mb-5">FAQ</h1>
        <p class="text-right text-success"><a href="/contact" v-b-popover.hover.top="'언제든지 연락하실 수 있습니다'">더 궁금하신것이 있다면?</a></p>
        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-1 class="text-left color-faq">Q1. 학창시절은 어땠나요?</b-button>
            <b-collapse id="collapse-1" visible role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text1 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-2 class="text-left color-faq">Q2. 전공을 선택한 이유는 무엇인가요?</b-button>
            <b-collapse id="collapse-2" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text2 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-3 class="text-left color-faq">Q3. 관심있는 것은 무엇인가요?</b-button>
            <b-collapse id="collapse-3" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text3 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-4 class="text-left color-faq">Q4. 가장 자신있는 기술은?</b-button>
            <b-collapse id="collapse-4" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text4 }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-button block v-b-toggle.collapse-5 class="text-left color-faq">Q5. 마지막으로 한마디 하자면?</b-button>
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
            text1: '저의 학창시절은...',
            text2: '전공은...',
            text3: '요즘 관심사는... 프론트앤드 개발자로서의 스킬에 대한 것.',
            text4: 'html, css, javascript, jquery, vue 등 프론트엔드',
            text5: '마지막으로...'
        }
    }
}
</script>

<style>
#faq{
    min-height: 545px;
}

.color-faq{
    background-color: yellow;
}
</style>