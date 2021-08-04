<template>
    <div>
        <ChatChoose height="150px"/>
        <ChatRoomList />
    </div>
</template>

<script>
import ChatChoose from './ChatChoose.vue'
import ChatRoomList from './ChatRoomList.vue'
export default {
    components: { ChatChoose, ChatRoomList },

}
</script>

<style lang="scss" scoped>

div {
    display: flex;
    flex : 0 0 180px;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: rgb(231, 220, 190);
}

</style>