<template>
    <div class="home">
        <LeftWing />
        <ChatList />
    </div>
</template>

<script>

import LeftWing from '@/components/views/Wing.vue'
import ChatList from '@/components/views/Chat/ChatList.vue'

export default {
    name: 'Home',
    components:{
        LeftWing,
        ChatList
    }
}

</script>

<style lang="scss">

.home {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    background-color: aqua;

    LeftWing {
        align-items: stretch;
        height: 100%;
    }

    ChatList {
        height: 100%;
        width: 10px;
        align-items: stretch;
    }
}


</style>