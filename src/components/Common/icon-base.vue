<template>
    <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewbox"
    :aria-labelledby="iconName"
    role="presentation"
    >
    <title
        :id="iconName"
        lang="en"
    >{{ iconName }}</title>
    <g :fill="iconColor">
        <slot />
    </g>
    </svg>
</template>

<script>

export default {
    name: 'icon-base',
    components: {
    },
    props: {
        iconName: {
            type: String,
            default: 'icon'
        },
        width: {
            type: [Number, String],
            default: 18
        },
        height: {
            type: [Number, String],
            default: 18
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
    },
    computed: {
        viewBox() {
            return '0 0 ' + this.width + ' ' + this.height 
        }
    },
    methods: {

    },
}
</script>

<style scoped>
svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px; /* yes, I'm that particular about formatting */
    cursor: pointer;
}
</style>