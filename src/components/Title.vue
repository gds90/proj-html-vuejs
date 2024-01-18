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
        <h5>{{titles.section}}</h5>
        <h1>{{titles.title}}</h1>
        <p>{{titles.subtitle}}</p>
    </div>
</template>
<style lang="scss" scoped></style>