<template>
<div class="container-md mt-4" role="tablist">

    <h1 class="mb-4">FAQ</h1>
    <p class="text-right text-success">자주 묻는 질문입니다</p>
    <b-card no-body class="mb-1">
        <b-button block v-b-toggle.collapse-1 variant="success" class="text-left">Q1. 학창시절은 어땠나요?</b-button>
        <b-collapse id="collapse-1" visible role="tabpanel">
            <b-card-body>
                <b-card-text>{{ text1 }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
        <b-button block v-b-toggle.collapse-2 variant="success" class="text-left">Q2. 전공을 선택한 이유는 무엇인가요?</b-button>
        <b-collapse id="collapse-2" role="tabpanel">
            <b-card-body>
                <b-card-text>{{ text2 }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
        <b-button block v-b-toggle.collapse-3 variant="success" class="text-left">Q3. 관심있는 것은 무엇인가요?</b-button>
        <b-collapse id="collapse-3" role="tabpanel">
            <b-card-body>
                <b-card-text>{{ text3 }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
        <b-button block v-b-toggle.collapse-4 variant="success" class="text-left">Q4. 가장 자신있는 기술은?</b-button>
        <b-collapse id="collapse-4" role="tabpanel">
            <b-card-body>
                <b-card-text>{{ text4 }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
        <b-button block v-b-toggle.collapse-5 variant="success" class="text-left">Q5. 마지막으로 한마디 하자면?</b-button>
        <b-collapse id="collapse-5" role="tabpanel">
            <b-card-body>
                <b-card-text>{{ text5 }}</b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            text1: '1번 답',
            text2: '못 먹어도 고',
            text3: '요즘 관심사는... 내년 계획입니다.',
            text4: 'html, css, javascript, jquery, vue 등 프론트엔드',
            text5: '....몰라'
        }
    }
}
</script>
