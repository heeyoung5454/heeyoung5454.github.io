<template>
    <div>
        <b-container class="bv-example-row text-left">
        <b-input-group :prepend="name" class="mt-3 mb-3">
            <b-form-textarea id="textarea" v-model="context" :placeholder="isSubComment ? '대댓글을 달아주세요.' : '댓글을 달아주세요.'" rows="3" max-rows="6">
            </b-form-textarea>

            <b-input-group-append>
                <b-button variant="info" @click="isSubComment ? createSubComment() : createComment()">{{isSubComment ? '대댓글달기' : '댓글달기'}}</b-button>
            </b-input-group-append>
        </b-input-group>
        </b-container>
    </div>
</template>

<script>
import data from "@/data";

export default {
    name: 'CommentCreate',
    props:{
        contentId:Number,
        commentId:Number,
        isSubComment: Boolean,
        reloadComment:Function,        
        subCommentToggle:Function,
        reloadSubComments:Function
    },
    data(){
        return{
            name: '익명',
            context:''
        };        
    },
    methods: {
        createComment(){ 
            data.Comment.push({
            comment_id : data.Comment[data.Comment.length -1].comment_id + 1,
            user_id: 1,     //고정값
            content_id : this.contentId,
            context:this.context,
            created_at: this.$moment(new Date()).format('YYYY-MM-DD hh:mm'),
            update_at:null
            });

            //객체를 푸시 후 댓글 리로드 함수 호출 > 반영을 바로바로 인식하기위해
            this.reloadComment();

            //푸시되면 다시 context는 빈공간으로
            this.context="";
        },
        createSubComment(){ 
            data.SubComment.push({
            subcomment_id : data.SubComment[data.SubComment.length -1].subcomment_id + 1,
            user_id: 1,     //고정값
            comment_id : this.commentId,
            context:this.context,
            created_at:this.$moment(new Date()).format('YYYY-MM-DD hh:mm'),
            update_at:null
            });

            this.subCommentToggle();
            this.reloadSubComments();
            //푸시되면 다시 context는 빈공간으로
            this.context="";
        }
    }
}
</script>