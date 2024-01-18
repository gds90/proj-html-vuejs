<script>
import { store } from '../store';
export default {
    name: 'BlogCard',
    data() {
        return {
            store,
        }
    },
}
</script>
<template lang="">
<div class="container">
    <div class="row">
        <div class="col-6">
            <div class="blogCardBox mt30">
                <div class="imageContainer">
                    <img :src="store.blogCards[0].image" alt="Blog News">
                </div>
                <div class="textContainer p-3">
                    <div class="blogCardInfo">
                        <div class="infoNews d-flex ">
                            <span><img src="/img/icon/clock.png" alt="">{{store.blogCards[0].time}}</span>
                            <span><img src="/img/icon/eye.png" alt="">{{store.blogCards[0].views}}</span>
                            <span><img src="/img/icon/calendar.png" alt="">{{store.blogCards[0].date}}</span>
                        </div>
                        <h4>{{store.blogCards[0].title}}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
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
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.mt30 {
    margin-top: 30px;
}

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