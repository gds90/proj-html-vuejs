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
                <div class="col-7">
                    <div class="content">

                        <div class="top">
    
                            <Title :titles="titles"/>
                        </div>
                        <div class="bottom mt-3">
                            <button class="text-uppercase">
                                explore games
                                <i class="ps-2 fa-solid fa-chevron-right"></i>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <a href="" class="p-3 ms-3 bg-light rounded-5">
                                <img src="../../public/img/icon/play-icon.png" alt="">
                            </a>
                        </div>
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

.jumbotrone {
    background-image: url('../../public/img/index-banner-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-size: cover;

    .row {
        padding-top: 100px;
    }


    .col-7 {

        display: flex;
        flex-direction: column;
        justify-content: center;
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


    .soldier {
        position: relative;
        top: 0;
        right: 0;
    }
}
</style>