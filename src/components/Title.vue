<script>
export default {
    name: 'TitleSection',
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
                    section: 'Latest News',
                    title: 'Stay Updated With Our Latest News Articles',
                    subtitle: 'libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.'
                },
            ]
        }
    },
}
</script>
<template lang="">
    <div v-for='titles, index in titlesSections'>
        <h5>{{titles.section}}</h5>
        <h1>{{titles.title}}</h1>
        <p>{{titles.subtitle}}</p>
    </div>
</template>
<style lang="scss" scoped></style>