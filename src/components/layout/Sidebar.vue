<template>
  <div id="sidebar" class="text-left">

    <b-button v-b-toggle.sidebar-backdrop v-b-tooltip.hover.right="'click'" >
          <b-icon icon="three-dots" font-scale="2" variant="light" ></b-icon>
      </b-button>

    <b-sidebar id="sidebar-backdrop" title="제작자 정보" :backdrop-variant="variant" backdrop shadow>
     <div class="px-3 py-2">
        <!-- <b-img src="https://picsum.photos/500/500/?image=44" fluid thumbnail></b-img>         -->
        <div>
          <h4>정희영</h4>
          <p style="margin-bottom:200px;">서울여자대학교 컴퓨터학과를 졸업하고 코스모스엔터테인먼트에 입사해 '내맘대로Z9별' 프로젝트의 기획자로 IT업무를 시작했다.
            현재는 (주)웹플래너의 웹개발자로 근무하고 있으며 프론트엔드 프레임워크에 관심을 두고 있다.
          </p>
          <ul>
            <li>서울여자대학교 컴퓨터학 졸업</li>
            <li>javascript, Vuejs, Reactjs</li>
            <li>html, css</li>
            <li></li>
          </ul>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name: "sidebar",
    data(){
      return{
      variant:'dark'
      }
      
    }
};
</script>

<style>
#sidebar{
  position: fixed;
  bottom:50px;
  right:50px;
  z-index: 999;
}

#sidebar button{
  /* background-color: #FFFF24;   */
  border:none;
  height:60px;
  width:60px;
  border-radius: 30px;
}

</style>