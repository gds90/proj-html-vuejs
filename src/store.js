import { reactive } from 'vue';

export const store = reactive({
    blogCards: [
        {
            image: '',
            time: '10 min',
            views: '240',
            date: 'Apr 11, 2022',
            titles: 'Secrets To An Amazing Role Playing Game'
        },
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
})