<template>
<div>
    <b-container fluid="md">
        <b-form-group id="input-group-1" label="제목" label-for="input-1">
            <b-form-input id="input-1" v-model="subject" placeholder="제목을 입력해주세요"></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-2" label="닉네임" label-for="input-2">
            <b-form-input id="input-2" v-model="name" placeholder="닉네임을 입력해주세요"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="내용" label-for="input-3">
            <b-form-textarea id="input-3" v-model="context" placeholder="내용을 입력하세요" rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>

    </b-container>
    <!-- 저장버튼을 눌렀을때 updatemode에 따라 실행되는 함수가 다르게 구현 -->
    <b-button variant="outline-success" @click="updateMode ? updateContent() : writeContent()">{{updateMode ? '수정' : '글쓰기'}}</b-button>
    <b-button variant="outline-danger" @click="cancel()">취소</b-button>
</div>
</template>

<script>
import data from '@/data';

export default {
    name: 'Write',

    data() {
        return {
            subject: '',
            context: '',
            userId: '',
            name: '',
            createdAt: this.$moment(new Date()).format('YYYY-MM-DD hh:mm'),
            updatedAt: null,
            updateObject: null,
            updateMode: this.$route.params.contentId > 0 ? true : false
        }
    },

    //게시글을 수정할 경우 기존 데이터를 input에 넣어둔다. (Detail페이지)
    created() {
        if (this.$route.params.contentId > 0) {
            const contentId = Number(this.$route.params.contentId);
            this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
            this.subject = this.updateObject.title;                        
            this.name = data.User.filter(item => item.user_id === this.updateObject.user_id)[0].name;            
            this.context = this.updateObject.context;
        }

    },
    methods: {
        writeContent() {
            //내림차순 정렬해서 가장 최신의 content_id값을 가져온다 +1한다.
            let items = data.Content.sort((a, b) => {
                return b.content_id - a.content_id
            });
            const content_id = items[0].content_id + 1;

            let users = data.User.sort((c, d) => {
                return d.user_id - c.user_id
            });
            const user_id = users[0].user_id + 1;

            data.Content.push({
                    content_id: content_id,
                    user_id: user_id,
                    title: this.subject,
                    context: this.context,
                    created_at: this.createdAt,
                    update_at: this.updatedAt,
                }),

                data.User.push({
                    user_id: user_id,
                    name: this.name,
                    created_at: this.createdAt
                }),
                //글쓰기 후 게시판으로 다시 돌아감
                this.$router.push({
                    path: '/board/free'
                })
        },

        updateContent() {
            this.updateObject.title = this.subject;            
            this.updateObject.context = this.context;
                    
            let users = data.User.sort((c, d) => {
                return d.user_id - c.user_id
            });

            this.updateObject.user_id = users[0].user_id + 1;

            
             data.User.push({
                 user_id : this.updateObject.user_id,
                 name:this.name,
                 created_at : this.$moment(new Date()).format('YYYY-MM-DD hh:mm')
                 }),



            //글쓰기 후 게시판으로 다시 돌아감
            this.$router.push({
                path: '/board/free'
            })
        },

        cancel() {
            this.$router.push({
                path: '/board/free'
            })
        }
    }

}
</script>
