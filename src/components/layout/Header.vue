<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/portfolio">Portfolio</b-nav-item>
                <b-nav-item to="/project">Publish</b-nav-item>
                <b-nav-item to="/faq">FAQ</b-nav-item>
                <b-nav-item to="/contact">Contact</b-nav-item>                
                <!--
                <b-nav-item to="/board/free">board</b-nav-item>
                <b-nav-item to="/test">기능테스트</b-nav-item>                
                -->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: "head"
};
</script>
