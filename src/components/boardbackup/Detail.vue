<template>
    <div class="text-left">   
    <b-table-simple>
            <tr>
                <th>글쓴이</th>
                <td>{{data.writer}}</td>
                <th>제목</th>
                <td>{{data.title}}</td>
            </tr>
            

            <tr>
                <th colspan="1">내용</th>
                <td colspan="3">{{data.content}}</td>
            </tr>

    </b-table-simple>
    
        <div class="text-center"> 
            <b-button variant="outline-success " @click="updateData" >수정</b-button>
            <b-button variant="outline-danger" @click="deleteData">삭제</b-button>
        </div>

    </div>
</template>

<script>
import data from '@/data';

export default {
    name:'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data:data.Read[index],
            index:index,
        }
    },
    methods:{
        deleteData(){
           data.Read.splice(this.index, 1), // 배열중 특정 순서의 배열값을 제거

            this.$router.push({
               path:'/read'

           })

        },
        updateData(){
            this.$router.push({
                name:'Create',
                params:{
                    contentId: this.index
                }
            })
        }
    }
}
</script>