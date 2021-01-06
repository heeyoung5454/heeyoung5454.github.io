<template>
    <div>
        <h1>기능테스트 페이지입니다</h1>
        <input type="text" v-model="input1" />      <!-- vue에서 데이터 바인딩 하는법 v-model-->
        <button type="button" @click="getData">get</button>    <!-- js의 onclick = vue의 @click-->
        <button type="button" @click="setData">set</button>

    <select class="form-control" v-model="region" @change="chageRegion">            <!-- 이벤트 걸때 @ 사용 -->
        <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>        <!-- 배열을 갖고 올때는 v-for를 사용 (for 문을 돌려 index를 가져온다)  -->
    </select>

    <!-- v-if/v-show 해당조건이 만족할때만 화면에 보여준다. 
        but v-if는 렌더링을 안하고(코드자체가 없음) v-show는 랜더링을 한다(display:none처리) -->
    <table class="table table-bordered" v-show="tableShow">       
        <tr :key="i" v-for="(d,i) in options">
            <td>{{d.v}}</td>
            <td>{{d.t}}</td>
        </tr>
    </table>
     </div>
</template>

<script>
export default {
    data() {
        return{
            title2: "Seoul",
            input1:"abcd",
            options: [
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeju"},
                {v:"B", t:"Busan"},
            ],
            region:"J",
            tableShow:false,
        };
    },
    //정의한 데이터를 동일한 이름으로 watch 내에서 함수형식으로 만든다. >> 해당 데이터가 변경될때 캐치해서 알 수 있다.(모니터링 역할)
    watch: {
        input1(){
            console.log("변경"+this.input1);
        },
        options(){
            console.log("변경"+this.options);
        }
    },
    methods:{
        getData() {
            alert(this.input1);

        },
        setData(){
            this.input1="12345";
        },
        chageRegion(){
            alert(this.region);
        }
    },

    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    //데이터가 change 될때 일어남. 초기화면에서는 X (화면이 리렌더링될때). 데이터가 변경될때 같이 사용하는 메소드
    beforeUpdate(){
         console.log("beforeUpdate")
    },
    //데이터가 change 될때 일어남. 초기화면에서는 X (화면이 리렌더링될때). 데이터가 변경될때 같이 사용하는 메소드
    updated(){
         console.log("updated")
    },
    beforeDestroy(){
        console.log("beforeDestory")
    },
    destroyed(){
        console.log("destoryed")
    }

};
</script>
