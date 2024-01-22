
<script>
import Title from './Title.vue';
import BlogCard from './BlogCard.vue';
import AppBattleCard from './AppBattleCard.vue';
import AppJumbo from './AppJumbo.vue';
import FeedbackCard from './FeedbackCard.vue'
export default {
    data() {
        return {
            titlesSections: [
                {
                    section: 'Game With Live Stearming',
                    title: 'Future Of Esports',
                    subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
                    isWhite: false,
                    isBigger: true
                },
                {
                    section: 'The Ultimate Competitive Gaming Platfrom',
                    title: 'Make Your Mark On The Battle Field',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.',
                    isWhite: false,
                    isBigger: false
                },
                {
                    section: 'Trending Battle',
                    title: 'Keep Eyes & Manage Upcoming Battle',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.',
                    isWhite: false,
                    isBigger: false
                },
                {
                    section: '',
                    title: 'Futio Quick Facts',
                    subtitle: '',
                    isWhite: false,
                    isBigger: false
                },
                {
                    section: 'Live Streaming',
                    title: 'Watch The Streams',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.',
                    isWhite: false,
                    isBigger: false
                },
                {
                    section: 'Futio Feedback',
                    title: 'What Our Gamers Say',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.',
                    isWhite: false,
                    isBigger: false
                },
                {
                    section: 'Make Offer',
                    title: 'Get 70% Offer Discount',
                    subtitle: '',
                    isWhite: true,
                    isBigger: false
                },
                {
                    section: 'Latest News',
                    title: 'Stay Updated With Our Latest News Articles',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.',
                    isWhite: false,
                    isBigger: false
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
                    icon_twitch: '../public/img/icon/twitch-icon.png',
                    title: 'Call Of Deauty',
                    time: 'December 25, 2022 4:00 PM'
                },
                {
                    player1: '../public/img/game-img-3.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-4.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png',
                    title: 'Legendary Battles',
                    time: 'December 25, 2022 4:00 PM'
                },
                {
                    player1: '../public/img/game-img-5.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-6.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png',
                    title: 'Nay Corral Gundown',
                    time: 'December 25, 2022 4:00 PM'
                },
                {
                    player1: '../public/img/game-img-7.png',
                    vs: '../public/img/verus-icon.png',
                    player2: '../public/img/game-img-8.png',
                    text_1: 'Youtube',
                    text_2: 'Twitch',
                    icon_youtube: '../public/img/icon/youtube-icon.png',
                    icon_twitch: '../public/img/icon/twitch-icon.png',
                    title: 'League Of Legends',
                    time: 'December 25, 2022 4:00 PM'
                }
            ]
        }
    },
    components: {
        Title,
        BlogCard,
        AppBattleCard,
        AppJumbo,
        FeedbackCard
    },
    methods: {
        GenerateRandomMajorNumber() {
            let number = Math.floor(Math.random() * 3001) + 2000;
            return number
        },
        GenerateRandomMinorNumber() {
            let number = Math.floor(Math.random() * 250) + 100;
            return number
        }
    },
}
</script>
<template lang="">
    <main>
        <section>
            <AppJumbo :titles= "titlesSections[0]"/>
        </section>
        <!-- SECTION 1 -->
        <section class="background-section-1 pb-120">
            <div class="container">
                <div class="row">
                    <!-- IMG -->
                    <div class="col-6 direction d-flex justify-content-start">
                        <img class="img-max" src="/img/features-illus.png" alt="">
                    </div>
                    <!-- TEXT -->
                    <div class="col-6 ps-4 d-flex flex-column">
                        <div class="section-text">
                            <Title :titles="titlesSections[1]"/>
                        </div>
                        <div class="section-box">
                            <div class="img-box">
                                <img src="/img/icon/features-icon-1.png" alt="icon">
                            </div>
                            <div class="text-box">
                                <h3>Live Streaming</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.</p>
                            </div>
                        </div>
                        <div class="section-box">
                            <div class="img-box">
                                <img src="/img/icon/features-icon-2.png" alt="icon">
                            </div>
                            <div class="text-box">
                                <h3>Great Tournament</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.</p>
                            </div>
                        </div>
                        <div class="section-box">
                            <div class="img-box">
                                <img src="/img/icon/features-icon-3.png" alt="icon">
                            </div>
                            <div class="text-box">
                                <h3>Gaming News</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.</p>
                            </div>
                        </div>
                        <div class="btn-box pt-5">
                            <button class="text-uppercase position-relative border-btn">
                                Play Now
                                <i class="ps-2 fa-solid fa-chevron-right"></i>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION 2 -->
        <section class="background-section-2">
            <div class="container">
                <div class="row">
                    <div class="col-8 m-auto text-center py-5">
                        <Title :titles="titlesSections[2]"/>
                    </div>
                    <AppBattleCard v-for="battle, index in battleCards" :key="index" :battle="battle" />
                    <div class="btn-box pt-5">
                        <button class="text-uppercase border-btn">
                            view all match
                            <i class="ps-2 fa-solid fa-chevron-right"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section>
        </section>
        <!-- Section 3 -->
        <section class='bg-black pad-bottom'>
            <div class="text-center">
                <div class="container visibility">
                    <div class="row">
                        <div class="col-12 pb-5">
                            <Title :titles='titlesSections[3]'/>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='GenerateRandomMajorNumber()' :duration='2' separator=',' decimalSeparator='.' :autoinit='true'/>
                                <div class='text-green'>Twitch Streams</div>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='GenerateRandomMinorNumber()' :duration='2' separator=',' decimalSeparator='.' :autoinit='true'/>
                                <div class='text-green'>Total Games</div>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='GenerateRandomMajorNumber()' :duration='2' separator=',' decimalSeparator='.' :autoinit='true'/>
                                <div class='text-green'>Youtube Streams</div>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='GenerateRandomMinorNumber()' :duration='2' separator=',' decimalSeparator='.' :autoinit='true'/>
                                <div class='text-green'>Pro Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section 4 -->
        <section class='background-section-4'>
            <div class="container">
                <div class="row">
                    <div class="col-8 m-auto text-center py-5">
                        <Title :titles="titlesSections[4]"/>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <div class="img-container position-relative">
                            <img src="/public/img/video-bg.png" alt="">
                            <div>
                                <button type="button" class="btn btn-warning"><img src="/img/icon/live-icon.png" alt=""> live</button>
                            </div>
                            <div class='number-area'>
                                <span>234,567</span> Viewers <span class="ms-4">14,510</span> Likes
                            </div>
                            <div class="title-area">
                                <h3>League of Legends</h3>
                            </div>
                            <div class="circle-area">
                                <div class="play-area">
                                    <a href="#">
                                        <img src="/img/icon/play-icon.png" alt="">
                                    </a>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section 5: Feedback - Start -->
        <section class="testimonials pt-120">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-7">
                        <div class="feedback-header text-center">
                            <Title :titles="titlesSections[5]" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="feedback-card d-flex justify-content-center">
                            <FeedbackCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section 5: End -->
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
                            <div class="banner text-light">
                                <div class="banner-title text-center">
                                    <Title :titles="titlesSections[6]" />
                                </div>
                                <div class="btn-area text-center">
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

.pt-120 {
    padding-top: 120px;
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
    font-family: $font_style;
    position: absolute;
    bottom: 15%;
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
    padding-bottom: 250px;
}

.background-section-1 {
    background-color: $colorblack;
    padding-top: 100px;

    .direction {
        direction: rtl;

        .img-max {
            max-width: unset;
        }
    }

    .section-box {
        display: flex;
        gap: 30px;
        padding-top: 20px;

        .text-box {
            color: $colorwhite;

            h3 {
                line-height: 30px;
                font-weight: 700;
                font-size: 24px;
            }

            p {
                line-height: 30px;
                font-family: $font_style;
            }
        }

        .img-box {
            max-width: unset;
        }
    }

    .btn-box {
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

    }

}

.background-section-2 {
    background-color: #222833;
    padding: 90px 0;

    .box-battle-card {
        width: calc(100% / 2 - 20px);
        margin: 10px;
    }

    .btn-box {
        display: flex;
        justify-content: center;

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

    }
}

.pad-bottom {
    padding: 100px 0;
}

.bg-black {
    color: $colorblack;
    padding-top: 100px;
}


.box-random {
    @include box-random;
    color: $colorwhite;

    .text-green {
        font-family: $font_style;
        color: $colorlime;
        font-size: 16px;
        font-weight: 300;
    }
}

.background-section-4 {
    background-color: black;
    background-image: url('/public/img/live-streaming-bg.png');
    background-repeat: no-repeat;

    .img-container {
        width: 80%;
        position: relative;

        img {
            width: 100%;
        }

        button {
            font-family: $font_style;
            position: absolute;
            top: 30px;
            right: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 25px;

            img {
                padding: 5px;
            }

        }

        /* .circle-area {
            border: #1a8f3d 1px solid;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
        } */

        .play-area {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;

            &::before {
                position: absolute;
                top: -9px;
                left: -12px;
                content: "";
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border: 1px solid #07cc7c;
                animation: stretch 4s linear infinite;
            }

            a {

                img {
                    padding: 30px;
                    background-color: $colorwhite;
                    border-radius: 50%;
                }
            }

        }

        .number-area {
            font-family: $font_style;
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: $colorwhite;

            span {
                color: $colorlime
            }
        }

        .title-area {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%);
            color: $colorwhite;

        }

    }

}

.testimonials {
    background-color: $colorblack;

    .feedback-header {
        margin-bottom: 55px;
    }
}
</style>
