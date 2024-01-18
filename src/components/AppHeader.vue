<script>
export default {

    data() {
        name: 'AppHeader'
        return {
            navBarLinks: ['Home', 'Games', 'Shop', 'Pages', 'Blog', 'Contact'],
        }
    },

}
</script>

<template lang="">
    <header>
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
    position: fixed;




    a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    button {
        background-color: $colorgreen;
        color: $colorblue;
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