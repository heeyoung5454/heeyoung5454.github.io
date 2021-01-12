<template>
<div id="FixImg">
    <div class="bg-image img1">
        <div class="bg-text">It ain't over till it's over</div>
    </div>

</div>
</template>

<script>
export default {};
</script>

<style>
.img1 {
    background-image: url("../../assets/fixImg.jpg");
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}

.bg-text {
    position: absolute;
    bottom:-8%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.4);    
    color: white;    
    width: 100%;
    padding: 20px;
}
</style>
