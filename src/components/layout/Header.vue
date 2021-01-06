<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/about">about</b-nav-item>
                <b-nav-item to="/portfolio">portfolio</b-nav-item>
                <b-nav-item to="/contact">contact</b-nav-item>
                <b-nav-item-dropdown text="커뮤니티" left>
                    <b-dropdown-item to="/board/free">익명게시판</b-dropdown-item>
                    <b-dropdown-item to="/faq">FAQ</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="/test">기능테스트</b-nav-item>
                
                <b-nav-item-dropdown text="미니게임" left>
                    <b-dropdown-item href="#">one</b-dropdown-item>
                    <b-dropdown-item href="#">two</b-dropdown-item>
                    <b-dropdown-item href="#">three</b-dropdown-item>
                    <b-dropdown-item href="#">For</b-dropdown-item>
                </b-nav-item-dropdown>

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
