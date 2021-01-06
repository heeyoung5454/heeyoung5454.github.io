<template>
    <div class="text-left">
        <b-table-simple>
             <!-- 양방향 통신을 위해 쓰이는 v-modle-->
            <tr>
                <th>글쓴이</th>
                <td><input v-model="writer" placeholder="글쓴이"/></td>
                <th>제목</th>
                <td><input v-model="title" placeholder="제목"/></td>
            </tr>
            <tr>
                <th colspan="1">내용</th>
                <td colspan="3"> <textarea v-model="content" placeholder="내용"/></td>
            </tr>            

            
        </b-table-simple>
        <b-button variant="outline-primary" @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</b-button>
    </div>
</template>

<script>
import data from '@/data';

export default {
    name:'Create',
    data(){
        const index = this.$route.params.contentId;
        return{
            data: data,
            index: index,
            writer: index !== undefined ? data.Read[index].writer : "",  //인덱스가 있으면 데이터 가져오고 없으면 빈칸
            title: index !== undefined ? data.Read[index].title : "",
            content: index !== undefined ? data.Read[index].content : ""
        }
    },
    methods: {
        write(){
            //입력값을 받아 객체 생성해준다.
            this.data.Read.push({
                writer:this.writer,
                title:this.title,
                content:this.content
            }),

            this.$router.push({
                path:'/read'
            })
        },

        update(){
            data.Read[this.index].writer = this.writer,
            data.Read[this.index].title = this.title,
            data.Read[this.index].content = this.content,
            this.$router.push({
                path:'/read'
            })

        }

    }
    
}
</script>