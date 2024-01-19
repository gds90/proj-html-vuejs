<script>
import Title from './Title.vue';
export default {
    data() {
        name: "AppJumbo"
        return {

        }
    },
    props: {
        titles: Object,
    },
    components: {
        Title
    }
}
</script>

<template lang="">
    <div class="jumbotrone position-relative">
        <div class="container">
            <div class="row">
                <div class="col-6 position-relative">
                    <div class="content">

                        <div class="top">
    
                            <Title class="size-font" :titles="titles"/>
                        </div>
                        <div class="bottom mt-3 position-relative">
                            <button class="text-uppercase border-btn">
                                explore games
                                <i class="ps-2 fa-solid fa-chevron-right"></i>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <a href="" class="p-3 ms-3 bg-light rounded-5 icon-play">
                                <img src="../../public/img/icon/play-icon.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="game-controler pos">

                        <img src="../../public/img/game-controler.png" alt="" >
                    </div>
                </div>
                <div class="col-5">
                    <div class="img-container">
                        <img src="../../public/img/index-banner-illus.png" alt="" class="soldier position-absolute">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped >
@use '../assets/styles/partials/variables' as*;
@use '../assets/styles/partials/mixins' as *;

.jumbotrone {
    background-image: url('../../public/img/index-banner-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 950px;
    background-size: cover;

    .row {
        padding-top: 100px;

    }

    .col-6 {
        .content {
            position: relative;
            z-index: 2;
        }
    }

    button {
        font-family: $font_style;
        background-color: $colorgreen;
        color: $colorblack;
        @include btn-lime;

        &:hover {
            background-color: $colorlime;
        }
    }

    .border-btn {
        color: $colorblack;
        @include btn-border-lime;
        margin-right: 20px;

        &::after {
            position: absolute;
            content: "";
            width: 108%;
            height: 120%;
            border: 1px solid $colorgreen;
            padding: 5px;
            border-radius: 30px;
        }
    }

    .icon-play::before {
        position: absolute;
        content: "";
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: rgba(61, 87, 17, 0);
        border: 1px solid #07cc7c;
        animation: stretch 4s linear infinite;
        top: -5px;
        right: 331.5px;
    }


    .soldier {
        position: relative;
        top: 0;
        right: 0;
        max-width: unset;
    }

    .game-controler {
        position: absolute;
        left: -25%;
        bottom: -35%;
    }
}
</style>