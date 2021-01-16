<template>
<div>
    <div id="footer" class="bg-dark">

        <b-container class="bv-example-row container-md">
            <b-row>
                <b-col cols="8" class="ml-3">
                  <div>
                    <h5 class="text-info">reference </h5>
                    <p>bootstrap-vue</p>
                  </div>

                  <div>
                    <h5 class="text-info">made by</h5>
                    <p>heeyoung</p>
                  </div>
                  
                  <div>
                    <h5 class="text-info">contact to</h5>
                    <p>heeyoung5454@gmail.com</p>
                  </div>                  
                </b-col>

                <b-col class="text-center">
                    <b-img :src=footImg></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>

</div>
</template>

<script>
import Img from "../../assets/bootstrap.png";
export default {
    name: "foot",
    data() {
        return {
            footImg: Img
        }
    }

};
</script>

<style>
#footer {    
    position: absolute;
    bottom:-330px;
    right:0;
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid #dee2e6;
    color: #9a9a9a;
    font-size: 12px;
}

#footer .container {
    margin: 20px auto;
}

@media screen and (max-width: 991px){
    #footer{
        bottom:-500px;
    }
}


</style>
