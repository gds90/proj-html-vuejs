<script>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
export default {
    name: 'FeedbackCard',
    setup() {
        const [emblaNode] = emblaCarouselVue({ loop: false }, [Autoplay()])
        return { emblaNode }
    },
    data() {
        return {
            reviews: [
                {
                    profileimg: '/public/img/testimonials-image-1.png',
                    name: 'Kim Ramos',
                    location: 'Serbia'
                },
                {
                    profileimg: '/public/img/testimonials-image-2.png',
                    name: 'Garry Francis',
                    location: 'Kiribati'
                },
                {
                    profileimg: '/public/img/testimonials-image-3.png',
                    name: 'Merle Fisher',
                    location: 'United States'
                },
                {
                    profileimg: '/public/img/testimonials-image-1.png',
                    name: 'Kim Ramos',
                    location: 'Serbia'
                },
                {
                    profileimg: '/public/img/testimonials-image-2.png',
                    name: 'Garry Francis',
                    location: 'Kiribati'
                },
                {
                    profileimg: '/public/img/testimonials-image-3.png',
                    name: 'Merle Fisher',
                    location: 'United States'
                },
                {
                    profileimg: '/public/img/testimonials-image-1.png',
                    name: 'Kim Ramos',
                    location: 'Serbia'
                },
                {
                    profileimg: '/public/img/testimonials-image-2.png',
                    name: 'Garry Francis',
                    location: 'Kiribati'
                },
                {
                    profileimg: '/public/img/testimonials-image-3.png',
                    name: 'Merle Fisher',
                    location: 'United States'
                },
            ]
        }
    },
    methods: {

    },
}
</script>
<template lang="">
    <div class="embla" ref="emblaNode">
        <div class="embla_container d-flex">
            <div class="col-12 col-md-4 feedback-cards" v-for="rate, index in reviews" :key="index">
                <div class="stars d-flex gap-1 mb-2">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”</p>
                <div class="user d-flex gap-3 align-content-center">
                    <div class="user-img d-flex align-items-center">
                        <img :src="rate.profileimg" :alt="rate.name" class="img-fluid">
                    </div>
                    <div class="user-data">
                        <h6>{{ rate.name }}</h6>
                        <p> {{ rate.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/generals.scss';
@use '../assets/styles/partials/variables' as *;

.fa-star {
    color: gold;
    font-size: 18px;
}

.feedback-cards {
    border-radius: 30px;
    background-color: $colorblue;
    padding: 34px 40px;
    margin: 0 10px;
    width: 412px;

    p,
    h6 {
        color: white;
    }

    .review {
        font-family: $font_style;
        font-size: 19px;
        line-height: 36px;
    }

    h6 {
        font-size: 18px;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .user-data p {
        color: $colorlime;
        font-size: 18px;
        font-family: $font_style;
    }
}

.embla {
    overflow: hidden;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}
</style>