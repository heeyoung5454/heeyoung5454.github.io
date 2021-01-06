<template>
    <div>
       <b-container fluid="md" class="text-center">
           <div id="top">
                <b-row >
                    <b-col cols="auto" class="mr-auto" id="title"><span>자유게시판</span> <span>{{title}}</span></b-col>                
                </b-row>
        
                <b-row align-h="between">
                    <b-col cols="auto" class="mr-auto" id="writer">{{user}}</b-col>                
                    <b-col cols="auto" id="created">{{created}}</b-col>
                </b-row>
            </div>

            <div id="context">
                <b-row>               
                     <b-col cols="auto" class="mr-auto text-center" id="content"> {{context}}</b-col>
                </b-row>
            </div>
        
            <div class="text-center"> 
                <b-button variant="outline-success " @click="updateData" >수정</b-button>
                <b-button variant="outline-danger" @click="deleteData">삭제</b-button>
            </div>

            <div class="text-right"> 
                <b-button variant="outline-info" @click="list">목록</b-button>
            </div>

            <div id="comment" class="text-left">
                <p>덧글</p>
                <CommentList :contentId="contentId"/>
            </div>
        </b-container> 
    </div>
</template>

<script>
import data from '@/data';
import CommentList from './comment/CommentList';

export default {
    name: 'ContentDetail',
    components: {
        CommentList
    },
    data(){
        const contentId = Number(this.$route.params.contentId);
        const contentData = data.Content.filter(item => item.content_id === contentId)[0]
        return {
            contentId: contentId,
            title:contentData.title,
            context : contentData.context,
            user:data.User.filter(item => item.user_id === contentData.user_id)[0].name,
            created: contentData.created_at
            
        };
    },

    methods : {
        updateData(){
            this.$router.push({
                path:`/board/free/write/${this.contentId}` 
            })
        },

        deleteData(){
            //findIndex >> 조건을 검색하여 해당 인덱스를 받아옴
            const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
            data.Content.splice(content_index,1)
            this.$router.push({
                path:'/board/free'
            })
        },

        list(){
            this.$router.push({
                path:'/board/free'
            })
        }
    }

    
};
</script>

<style>

#top .row:first-child{
    border-top:1px solid #ccc;
    border-bottom:2px solid #ccc;
    padding: 10px 0;
    height: 48px;
}

#top{
    margin-top:20px;
}

#top .row:last-child{
    color:#9a9a9a;    
    padding: 6px 0;
    height: 33px;
}


#title{
    font-size: 14px;
}


#title span:first-child{
    font-size: 14px;
    color:#009E3F;
}

#title span:last-child{
    margin-left:10px;
    color:#000;
    font-weight: bold;
}

#writer{
    font-size: 12px;
    margin-left:10px;
}
#created{
    font-size: 12px;
    margin-right:10px;

}

#context{
    font-size: 15px;
    margin-top:20px;
    min-height: 400px;
}

#comment{
    margin:40px 0 20px 0;
}

#comment p:first-child{
    font-weight: bold;
}

</style>