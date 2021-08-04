<template>
    <img :src="path" :alt="alt" :width="width" :height="height"/>
</template>

<script>
export default {
    name: 'SVG-image',
    props: {
        SVGFile: {
            type: String,
            default: '@/assets/logo.png'
        },
        alt: {
            type: String,
            defalt: 'image'
        },
        width: {
            type: [Number, String],
            default: 25
        },
        height: {
            type: [Number, String],
            default: 25
        },
    },
    computed: {
        path() {
            return require(`@/assets/${this.SVGFile}`)
        },
    }
}
</script>

<style lang="scss" scoped>

img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    margin: 10px;
}

</style>