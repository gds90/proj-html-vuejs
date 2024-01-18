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
    <div class="jumbotrone">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <div class="content">

                        <div class="top">
    
                            <Title :titles="titles"/>
                        </div>
                        <div class="bottom mt-3">
                            <button class="rounded-pill p-3">
                                explore games
                                <i class="fa-solid fa-chevron-right"></i>
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
                        <img src="../../public/img/index-banner-illus.png" alt="" class="w-100">
                        
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
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .row {
        padding-top: 100px;
    }


    .col-7 {

        display: flex;
        flex-direction: column;
        justify-content: center;
    }



    button {
        background-color: $colorgreen;
        color: $colorblue;
        text-transform: uppercase;

    }



}
</style>