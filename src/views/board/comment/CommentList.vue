<template>
    <div>
        <div :key="item.comment_id" v-for="item in comments">
            <CommentListItem :commentObj="item"/>
        </div>
        <CommentCreate :contentId="contentId" :reloadComment="reloadComment"/>
    </div>
</template>
<script>
import data from '@/data';
import CommentListItem from './CommentListItem';
import CommentCreate from './CommentCreate';

export default {
    name:'CommentList',
    components: {
        CommentListItem,
        CommentCreate
    },

    //부모컴포넌트가 자식 컴포넌트에게 필요한 정보를 전달할때 사용(CommentList > ContentDetail))
    props:{
        contentId : Number,
    },
    data(){
        return{
            comments: data.Comment.filter(item => item.content_id == this.contentId)
        }

    },
    methods:{
        reloadComment(){
            this.comments = data.Comment.filter(item => item.content_id == this.contentId)
        }
    }
    
}
</script>