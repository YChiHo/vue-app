<template>
    <div style="height: 0px">
        <MainHeader />
        <slot />
        <MainFooter v-if="isFooter"/>
    </div>
</template>

<script>
import MainHeader from '@/components/Menu/MainHeader';
import MainFooter from '@/components/Menu/MainFooter';
import { computed, watch } from '@vue/composition-api';

export default {
    name: 'DefaultLayout',
    components: {
        MainHeader,
        MainFooter,
    },
    setup(props, { root }){
        const store = root.$store;
        const userState = computed(()=> store.getters['login/getUserStatus'].userState);
        const isFooter = computed(() => store.getters['menu/getFooter']);

        watch(userState, () => {
            userState.value === '더존비즈온' ? store.commit('menu/showFooter') : store.commit('menu/disableFooter');
        });

        return {
            isFooter,
        }
    }
}
</script>