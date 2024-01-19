<script>
export default {

    data() {
        name: 'AppHeader'
        return {
            isHeaderFixed: false,
            navBarLinks: [
                {
                    flag_dropdown: false,
                    link_name: 'home',
                    link_section: []

                },
                {
                    flag_dropdown: false,
                    link_name: 'games',
                    link_section: [
                        {
                            link_name: 'games',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'games details',
                            flag_dropdown_li: false,
                            link_section: []

                        },
                        {
                            link_name: 'match details',
                            flag_dropdown_li: false,
                            link_section: []

                        },

                    ]

                },
                {
                    flag_dropdown: false,
                    link_name: 'shop',
                    link_section: [
                        {
                            link_name: 'shop',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'shop single ',
                            flag_dropdown_li: false,
                            link_section: []

                        },
                        {
                            link_name: 'shop single 2',
                            flag_dropdown_li: false,
                            link_section: []

                        },
                        {
                            link_name: 'shop single 3',
                            flag_dropdown_li: false,
                            link_section: []

                        },
                        {
                            link_name: 'shop single 4',
                            flag_dropdown_li: false,
                            link_section: []

                        },

                    ]

                },
                {
                    flag_dropdown: false,
                    link_name: 'pages',
                    link_section: [
                        {
                            link_name: 'about us',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'team',
                            flag_dropdown_li: false,
                            link_section: [
                                {
                                    link_name: 'all team',

                                },
                                {
                                    link_name: 'team details',

                                },

                            ]
                        },
                        {
                            link_name: 'player',
                            flag_dropdown_li: false,
                            link_section: [
                                {
                                    link_name: 'players',

                                },
                                {
                                    link_name: 'player single',

                                },

                            ]
                        },
                        {
                            link_name: 'upcoming matches',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'FAQs',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'privacy policy',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'terms',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'cooming soon',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'error',
                            flag_dropdown_li: false,
                            link_section: []
                        }

                    ]

                },
                {
                    flag_dropdown: false,
                    link_name: 'blog',
                    link_section: [
                        {
                            link_name: 'blog',
                            flag_dropdown_li: false,
                            link_section: []
                        },
                        {
                            link_name: 'blog single',
                            flag_dropdown_li: false,
                            link_section: []

                        },

                    ]

                },
                {
                    flag_dropdown: false,
                    link_name: 'contact',
                    link_section: []

                }
            ],

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
                    

                    <div class="navbar position-relative">
                        <div class="navbar-brand">
                            <a href="">
                                <img src="../../public/img/logo.png" alt="">
                            </a>
                        </div>
                        <div class="d-flex justify-content-between w-75">

                            <div class="d-flex align-items-center">
                                <ul class="d-flex list-unstyled">
                                    <li class="ms-3 d-flex justify-content-center" v-for="link in navBarLinks" @mouseover='link.flag_dropdown = true' @mouseleave='link.flag_dropdown = false'>
                                        <a href="#">{{link.link_name}}</a>
                                        <div v-show='link.flag_dropdown' class='list-cont'>
                                            <ul class="list-unstyled position-relative">
                                                <li v-for="link in link.link_section "  @mouseover='link.flag_dropdown_li = true' @mouseleave='link.flag_dropdown_li = false'>
                                                    <a href="">{{link.link_name}}</a>
                                                    <div class='list-cont-li'  v-show='link.flag_dropdown_li'>
                                                        <ul class="list-unstyled">
                                                            <li v-for="link in link.link_section " >
                                                                <a href="">{{link.link_name}}</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
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
        background-color: rgb(28, 34, 45);
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

.list-cont {
    background-color: rgb(28, 34, 45);
    position: absolute;
    top: 60%;
    transition: all 3s;
}

.list-cont-li {
    background-color: rgb(28, 34, 45);
    position: absolute;
    right: -65%;
    transition: all 3s;
}
</style>