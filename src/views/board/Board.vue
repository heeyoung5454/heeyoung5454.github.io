<template>
<div class="container-md">
    <div class="mt-5 mb-5">
        <h1 class="mb-4 text-left">익명게시판</h1>
        <!-- fields 속성 >> 필요한 컬럼만 출력시킴 -->
        <b-table striped hover :items="items" :perPage="perPage" :currentPage="currentPage" :fields="fields" @row-clicked="rowClick"></b-table>

        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" align="center">
        </b-pagination>

        <b-button @click="writeContent">글쓰기</b-button>
    </div>
</div>
</template>

<script>
import data from '@/data';

export default {
    data() {
        //내림차순 정렬
        let items = data.Content.sort((a, b) => {
            return b.content_id - a.content_id
        })
        items = items.map(contentItem => {
            return {
                ...contentItem,
                user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name
            }
        })

        return {
            currentPage: 1,
            perPage: 10,
            fields: [{
                    key: 'content_id',
                    label: 'No'
                },
                {
                    key: 'title',
                    label: '제목'
                },
                {
                    key: 'user_name',
                    label: '글쓴이'
                },
                {
                    key: 'created_at',
                    label: '작성일'
                }
            ],
            items: items // 배열을 가져옴

        };
    },

    methods: {
        rowClick(item) {
            this.$router.push({
                path: `/board/free/detail/${item.content_id}`
            })
        },
        writeContent() {
            this.$router.push({
                path: '/board/free/write'
            })

        }
    },
    computed: {
        rows() {
            return this.items.length;
        }
    }
}
</script>
