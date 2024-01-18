
<script>
import Title from './Title.vue';
import BlogCard from './BlogCard.vue';
import AppBattleCard from './AppBattleCard.vue';
import AppJumbo from './AppJumbo.vue';
export default {
    data() {
        return {
            titlesSections: [
                {
                    section: 'Game With Live Stearming',
                    title: 'Future Of Esports',
                    subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'
                },
                {
                    section: 'The Ultimate Competitive Gaming Platfrom',
                    title: 'Make Your Mark On The Battle Field',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.'
                },
                {
                    section: 'Trending Battle',
                    title: 'Keep Eyes & Manage Upcoming Battle',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.'
                },
                {
                    section: '',
                    title: 'Futio Quick Facts',
                    subtitle: ''
                },
                {
                    section: 'Live Streaming',
                    title: 'Watch The Streams',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.'
                },
                {
                    section: 'Futio Feedback',
                    title: 'What Our Gamers Say',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.'
                },
                {
                    section: 'Make Offer',
                    title: 'Get 70% Offer Discount',
                    subtitle: ''
                },
                {
                    section: 'Latest News',
                    title: 'Stay Updated With Our Latest News Articles',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.'
                },
            ],
            blogCards: [

                {
                    image: '/img/blog-item-1.png',
                    time: '10 min',
                    views: '240',
                    date: 'Apr 11, 2022',
                    title: 'Secrets To An Amazing Role Playing Game'
                },
                {
                    image: '/img/blog-item-2.png',
                    time: '10 min',
                    views: '240',
                    date: 'Apr 11, 2022',
                    title: 'Top 5 Most Important Aspects Of Your Game'
                },
                {
                    image: '/img/blog-item-3.png',
                    time: '10 min',
                    views: '240',
                    date: 'Apr 11, 2022',
                    title: 'The Rise Of Fantasy Sports And Online Games'
                },
                {
                    image: '/img/blog-item-4.png',
                    time: '10 min',
                    views: '240',
                    date: 'Apr 11, 2022',
                    title: 'Benefits Of Gaming - PC And Video Games'
                },
            ],
            battleCards: [
                {
                    player1: '../public/img/game-img-1.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-2.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png'
                },
                {
                    player1: '../public/img/game-img-3.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-4.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png'
                },
                {
                    player1: '../public/img/game-img-5.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-6.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png'
                },
                {
                    player1: '../public/img/game-img-7.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-8.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png'
                }
            ]
        }
    },
    components: {
        Title,
        BlogCard,
        AppBattleCard,
        AppJumbo
    }
}
</script>
<template lang="">
    <main>
        <section>

            <AppJumbo :titles= "titlesSections[0]"/>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section class="banner-discount pb-120 bg-black">
            <!-- Section 6 Banner Discount start -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-10 position-relative overflow-hidden ">
                            <div class="object">
                                <img class="obj-1" src="/public/img/banner-item-obj1.png" alt="Banner item">
                                <img class="obj-2" src="/public/img/banner-item-obj2.png" alt="Banner item" >
                            </div>
                            <div class="banner">
                                <div class="banner-title text-center ">
                                    <Title :titles="titlesSections[6]" />
                                </div>
                                <div class="btn-area text-center ">
                                    <a href="#" class="btn rounded-5">Get Offers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section 6 Banner Discount end -->
        </section>
        <section class="latest-news pb-120 bg-black ">
            <!-- Section 7 Latest News start -->
            <div class="content">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-7">
                            <div class="title text-center ">
                                <Title :titles="titlesSections[7]" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-6 ">
                            <BlogCard :news="blogCards[0]"/>
                        </div>
                        <div class="col-6">
                            <BlogCard v-for="news, index in blogCards":news="news" v-show="index !== 0" :class="{ 'd-flex': index !== 0 }"/>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section 7 Latest News end -->
        </section>
    </main>
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/generals.scss' as *;

.pb-120 {
    padding-bottom: 120px;
}

.object {
    background-image: url('/public/img/banner-item-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 430px;

    img {
        width: 250px;
        position: absolute;
    }

    .obj-1 {
        top: 200px;
    }

    .obj-2 {
        bottom: 200px;
        right: 30px
    }
}

.banner-title {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn-area {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, -50%);

    .btn {
        background-color: #1a8f3d;
        padding: 15px 70px;
        color: $colorwhite;
    }
}

.latest-news {
    background-color: black;
    position: relative;
}
</style>