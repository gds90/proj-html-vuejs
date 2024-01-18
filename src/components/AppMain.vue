
<script>
import Title from './Title.vue';
import BlogCard from './BlogCard.vue';
import AppBattleCard from './AppBattleCard.vue';

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
        AppBattleCard
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
        </section>
        <section>
        </section>
        <section class='bg-black'>
            <div class="text-center">
                <div class="container visibility">
                    <div class="row">
                        <div class="col-12 pb-5">
                            <Title :titles='titlesSections[3]'/>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                {{GenerateRandomMajorNumber()}}
                                <div class='text-green'>Twitch Streams</div>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                {{GenerateRandomMinorNumber()}}
                                <div class='text-green'>Total Games</div>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                {{GenerateRandomMajorNumber()}}
                                <div class='text-green'>Youtube Streams</div>
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class="box-random">
                                {{GenerateRandomMinorNumber()}}
                                <div class='text-green'>Pro Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
        <section>
        </section>
    </main>
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;
@use '../assets/styles/generals.scss' as *;

.bg-black {
    color: $colorblack;
    padding-top: 100px;
    padding-bottom: 120px;
}

.box-random {
    @include box-random;
    color: $colorwhite;

    .text-green {
        color: $colorlime;
        font-size: 16px;
        font-weight: 300;
    }
}
</style>