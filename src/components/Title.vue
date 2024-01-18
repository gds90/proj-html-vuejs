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
        <h5 v-show= 'titles.section !== ""'>{{titles.section}}</h5>
        <h1 v-show= 'titles.title !== ""'>{{titles.title}}</h1>
        <p v-show= 'titles.subtitle !== ""'>{{titles.subtitle}}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h5 {
    color: $colorlime;
}

h1 {
    color: $colorwhite;
}

p {
    color: $colorpanna;
}
</style>