<template>
    <div>
        <b-container class="commentBox bv-example-row text-left">
              
            <b-row cols="2">   
                <b-col><span class="h2 mb-0"><b-icon icon="person-fill"></b-icon></span> <span>{{name}}</span>
                <b-button variant="link" @click="subCommentToggle()">덧글달기 </b-button>
                </b-col>
                <b-col class="text-right">{{commentObj.created_at}}</b-col>
            </b-row>

            <b-row cols="2">
                <b-col>{{commentObj.context}}
                     
                </b-col>            

                <b-col class="text-right">
                    
                <b-button variant="info">수정</b-button>
                <b-button variant="danger">삭제</b-button>   

                </b-col>

            </b-row>

        </b-container>

        <template v-if="subCommentCreateToggle">
            <CommentCreate :isSubComment="true" :commentId="commentObj.comment_id" :reloadSubComments="reloadSubComments" :subCommentToggle="subCommentToggle"/>
        </template>


        <template v-if="subCommentList.length > 0">
            <b-container class="subCommentBox bv-example-row text-left"
            :key="item.subcomment_id"
            v-for="item in subCommentList">

            <b-row cols="2">
                <b-col><b-icon icon="chevron-double-down"></b-icon> <b-icon icon="person-fill"></b-icon> {{item.user_name}}</b-col>                
                <b-col class="text-right">{{item.created_at}}</b-col>
            </b-row>

            
            <b-row cols="2">
                <b-col>{{item.context}}</b-col>            
                <b-col class="text-right">
                    <b-button variant="info">수정</b-button>
                    <b-button variant="danger ">삭제</b-button>    
                </b-col>
            </b-row>

        </b-container>
            
        </template>

    </div>
</template>

<script>

import data from '@/data';
import CommentCreate from './CommentCreate';

export default {
    name:'CommentListItem',
    props: {
        commentObj: Object
    },
    components:{
        CommentCreate
    },
    data(){
        return{
            name:data.User.filter(item => item.user_id === this.commentObj.user_id)[0].name,
            subCommentList: data.SubComment.filter(item => item.comment_id === this.commentObj.comment_id)
          .map(subCommentItem => ({...subCommentItem, 
          user_name:data.User.filter(
              item => item.user_id === subCommentItem.user_id)[0].name
        })),
        subCommentCreateToggle:false,
        };
    },
    methods: {
        subCommentToggle(){
            this.subCommentCreateToggle =  !this.subCommentCreateToggle;
        },        
        //위에 대댓글다는 로직을 다시한번 실행
        reloadSubComments(){
            this.subCommentList = data.SubComment.filter(
                item => item.comment_id === this.commentObj.comment_id)
          .map(subCommentItem => ({...subCommentItem, 
          user_name:data.User.filter(
              item => item.user_id === subCommentItem.user_id)[0].name}));
        }
    }
}
</script>

<style>
    .commentBox{
        padding: 10px;
        border-top: 1px solid #ced4da;
    }

    .commentBox .btn, .subCommentBox .btn{
        font-size: 12px;
        margin-left:3px;
    }


    .commentBox .col span:nth-child(2), .commentBox .col .btn-link{
        vertical-align: super;
    }

    /* 댓글의 내용*/
    .commentBox .row:last-child .col:first-child {
        padding-left:30px;
        padding-top:5px;
        font-size: 12px;
        
    }

    .subCommentBox.container{
        padding: 10px 15px 10px 30px;
        border-top: 1px solid #ced4da;
    }

    /* 대댓글의 내용*/
    .subCommentBox .row:last-child .col:first-child {
        padding-left:40px;
        padding-top:5px;
        font-size: 12px;
        
    }

</style>