import { reactive } from 'vue';

export const store = reactive({
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
    ]
})