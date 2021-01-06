<template>
    <div class="mx-auto text-center">
        <b-table-simple>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            
            <tr :key="index" v-for="(value,index) in data" @click="detail(index)">
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
            </tr>
        </b-table-simple>
   
        <b-button variant="outline-primary" @click="write">글쓰기</b-button>
    </div>
</template>

<script>
import data from '@/data';

export default {
    name : 'Read',
    data(){
        return{
            data: data.Read
        }
        
    },
    methods:{
        write(){
            this.$router.push({
                path:'create'
            })
        },
        detail(index){
            this.$router.push({
                name:'Detail',
                params:{
                    contentId: index
                }
            })
        }
    }
    
}
</script>