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
    <div class="blogCardBox">
        <div class="imageContainer">
            <img :src="store.blogCards[0].image" alt="Blog News">
        </div>
        <div class="textContainer">
            <div class="blogCardInfo">
                <span><img src="/img/icon/clock.png" alt="">{{store.blogCards[0].time}}</span>
                <span><img src="/img/icon/eye.png" alt="">{{store.blogCards[0].views}}</span>
                <span><img src="/img/icon/calendar.png" alt="">{{store.blogCards[0].date}}</span>
                <h4>{{store.blogCards[0].title}}</h4>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.blogCardBox {
    background-color: $colorblue;
    border-radius: 20px;
    margin-bottom: 30px;
    padding: 0;
}
</style>