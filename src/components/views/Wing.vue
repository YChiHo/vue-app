<template>
    <div>
        <SVGImage SVGFile='Main/home.svg' @click.native="hello"/>
        <SVGImage SVGFile='Main/connection.svg'/>
        <SVGImage SVGFile='Main/headphones.svg'/>
        <SVGImage SVGFile='Main/camera.svg'/>
        <SVGImage SVGFile='Main/music.svg'/>
        <SVGImage SVGFile='Main/image.svg'/>
    </div>
</template>

<script>
import SVGImage from '../Common/SVG-image.vue'

export default {
    name: 'wing',
    props: ['open_home'],
    data() {
        return {
            postWindow: null,
        }
    },
    components: {
        SVGImage,
    },
    methods: {
        writeClick() {
            this.postWindow = window.open(this.open_home, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1900,height=1000");
        },
        closeHome() {
            this.postWindow.close()
            
        },
        hello() {
            this.postWindow = window.open("https://gwa.douzone.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1900,height=1000")
        }
    }
}
</script>

<style lang="scss" scoped>

div {
    display: flex;
    flex: 0 0 60px;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 10px 0;
    border-right: 1px solid black;
}

</style>