<script>
export default {

    data() {
        name: 'AppHeader'
        return {
            isHeaderFixed: false,
            navBarLinks: ['Home', 'Games', 'Shop', 'Pages', 'Blog', 'Contact'],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
        beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        const scroll = window.scrollY;
        this.isHeaderFixed = scroll >= 60;
    },
  },
}
</script>

<template lang="">
    <header :class="{ 'fixed': isHeaderFixed }">
        <div class="container">
            <div class="row">
                <div class="col">
                    

                    <div class="navbar">
                        <div class="navbar-brand">
                            <a href="">
                                <img src="../../public/img/logo.png" alt="">
                            </a>
                        </div>
                        <div class="d-flex justify-content-between w-75">

                            <div class="d-flex align-items-center">
                                <ul class="d-flex list-unstyled">
                                    
                                    <li  class="ms-3" v-for="link in navBarLinks">
                                        <a href="#">{{link}}</a>
                                    </li>
                               </ul>
                            </div>
                            <div>
                                <a href="">
                                    <i class="fa-solid fa-cart-shopping me-4 text-white"></i>
                                </a>
                                <button class="text-uppercase">Live Streaming</button>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss">
@use '../assets/styles/partials/variables' as*;

header {
    background-color: transparent;
    z-index: 999;
    width: 100%;
    padding: 20px;
    position: absolute;

    &.fixed {
        background-color: rgb(28,34,45);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 100%;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
        transition: all 0.5s;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeInDown;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    button {
        font-family: $font_style;
        background-color: $colorgreen;
        color: $colorblack;
        border-radius: 25px;
        font-weight: 600;
        padding: 10px 20px;
        font-size: 18px;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        transition: 0.3s all;

        &:hover {
            background-color: $colorlime;
        }
    }
}
</style>