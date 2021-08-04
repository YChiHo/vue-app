<template>
    <div>
        <default-layout></default-layout>
        <mobile-layout> </mobile-layout>
    </div>
    <!-- <component :is="layout">
        <router-view class="main" />
    </component> -->
</template>

<script>
import { computed } from '@vue/composition-api';
import DefaultLayout from './DefaultLayout.vue';
import MobileLayout from './MobileLayout.vue';

export default {
    name: 'MainLayout',
    components: {
        DefaultLayout,
        MobileLayout
    },
    data: function() {
        return {
            layout: true,
        }
    },
    setup(props, { root }){
        const layout = computed(() => root.$route.meta.layout || 'DefaultLayout' );

        return {
            layout,
        }
    }
}
</script>

<style scoped>
    .main{
        width: 1024px;
        margin: 0 auto 100px;
    }
</style>