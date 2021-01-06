<template>
<div class="text-left">

    <b-card no-body class="overflow-hidden card_top" style="max-width: 580px;">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body title="IPRV">
                    <b-card-text>                        
                        지식재산권 침해예측시스템 개발<br>
                        기간 : 2020.02.03 ~ 현재<br>
                        <b-link href="https://www.iprv.kr">바로가기</b-link>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>

    <b-card no-body class="overflow-hidden ml-auto card_top" style="max-width: 580px;">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=411" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body title="SDU">
                    <b-card-text>
                        서울디지털대학교 유지보수<br>
                        기간 : 2020.03.05 ~ 현재<br>
                        
                        <b-link href="https://www.sdu.ac.kr">바로가기</b-link>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>


    <hr>

    <b-card-group columns>
        <b-card title="Card title that wraps to a new line" img-src="https://placekitten.com/g/400/450" img-alt="Image" img-top>
            <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
            </b-card-text>
        </b-card>

        <b-card header="ME">
            <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
        </b-card>

        <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
            <b-card-text>
                This card has supporting text below as a natural lead-in to additional content.
            </b-card-text>
            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>

        <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>
                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </footer>
            </blockquote>
        </b-card>

        <b-card>
            <b-card-title>Title</b-card-title>
            <b-card-text>
                This card has supporting text below as a natural lead-in to additional content.
            </b-card-text>
            <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
        </b-card>

        <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

        <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
            <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This card has even longer content than the first.
            </b-card-text>
            <template #footer>
                <small class="text-muted">Footer Text</small>
            </template>
        </b-card>
    </b-card-group>


</div>
</template>

<script>
export default {};
</script>

<style>
  .card_top{
    border:none !important;
  }
</style>
