<template>
    <div>
        <MainHeader />
        <slot />
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from '@/components/Menu/MainHeader';
import MainFooter from '@/components/Menu/MainFooter';

export default {
    name: 'DefaultLayout',
    components: {
        MainHeader,
        MainFooter,
    },
}
</script>