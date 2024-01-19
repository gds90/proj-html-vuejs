<script>
export default {
    name: 'TitleSection',
    data() {
        return {

        }

    },
    props: {
        titles: Object
    }
}
</script>
<template lang="">
    <div>
        <h5 :class="titles.isWhite == true ? 'text-light' : 'lime-h5'" v-show= 'titles.section !== ""'>{{titles.section}}</h5>
        <h2 :class="titles.isBigger == true ? 'text-bigger' : ''" v-show= 'titles.title !== ""'>{{titles.title}}</h2>
        <p v-show= 'titles.subtitle !== ""'>{{titles.subtitle}}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h5 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
}

.lime-h5 {
    color: $colorlime;
}

h2 {
    color: $colorwhite;
    font-size: 57px;
    font-weight: 700;

    &.text-bigger {

        font-size: 70px;
        line-height: 1.3;
    }
}

p {
    font-family: $font_style;
    color: $colorpanna;
    font-size: 18px;
}
</style>