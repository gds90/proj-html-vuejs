<script>
import { store } from '../store';
export default {
    name: 'BlogCard',
    data() {
        return {
            store,
        }
    },
    props: {
        news: Object
    },
    computed: {
        isFirst() {
            return this.$parent.blogCards.indexOf(this.news) === 0;
        }
    }
}
</script>
<template lang="">
<div class="blogCardBox">
    <div class="imageContainer">
        <img :src="news.image" alt="Blog News">
    </div>
    <div class="textContainer p-3">
        <div class="blogCardInfo">
            <div class="infoNews d-flex">
                <span><img src="/img/icon/clock.png" alt="">{{news.time}}</span>
                <span><img src="/img/icon/eye.png" alt="">{{news.views}}</span>
                <span><img src="/img/icon/calendar.png" alt="">{{news.date}}</span>
            </div>
            <h4 v-if="isFirst">{{news.title}}</h4>
            <h5 v-else>{{news.title}}</h5>
        </div>
    </div>
</div>
        <!-- <div class="col-6">
            <div class="blogCardBox" v-for="(news, index) in store.blogCards" :key="index">
                <div v-if="index !== 0" class="d-flex ">
                    <div class="imageContainer">
                        <img :src="news.image" alt="Blog News">
                    </div>
                    <div class="textContainer p-3">
                        <div class="blogCardInfo">
                            <div class="infoNews d-flex">
                                <span><img src="/img/icon/clock.png" alt="">{{news.time}}</span>
                                <span><img src="/img/icon/eye.png" alt="">{{news.views}}</span>
                                <span><img src="/img/icon/calendar.png" alt="">{{news.date}}</span>
                            </div>
                            <h5>{{news.title}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.blogCardBox {
    background-color: $colorblue;
    border-radius: 20px;
    margin-bottom: 30px;
    padding: 0;


    img {
        border-radius: 20px;
    }

    .blogCardInfo {
        .infoNews {
            margin-bottom: 20px;

            span {
                display: inline-flex;
                align-items: center;
                margin-right: 25px;
                color: $colorlime;

                img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                    margin-right: 10px;
                }

            }
        }

        h4,
        h5 {
            color: $colorwhite;
            font-size: 1.5rem;
        }

        h4 {
            font-size: 42px;
        }
    }
}
</style>