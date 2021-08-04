<template>
    <div class="choose">
        <select 
        v-model="selected"
        @change="updateValue"
        >
            <option 
                disabled
                value=""
                v-text="disabledOption"
            />
            <option 
                v-for="(item, idx) in items"
                v-bind:value="item.value"
                v-bind:key="idx"
            >
                {{ item.text }}
            </option>
        </select>
    </div>
</template>

<script>

export default {
    name: 'chatchoose',
    model: {
        event: 'change',
    },
    props: {
        disabledOption: {
            type: String,
            default: '선택하세요',
        },
        options: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [String, Number],
            default: 1,
        },
    },
    data() {
        return {
            selected: this.value,
            items: {
                1: { text: '일반 미팅룸', value: 1 },
                2: { text: '프로젝트 미팅룸', value: 2 },
                3: { text: '즐겨찾기 미팅룸', value: 3 },
            },
        }
    },
    methods: {
        updateValue(){
            this.$emit('change', this.selected);
        },
    },
}
</script>

<style lang="scss" scoped>
.choose {
    display: flex;
    flex: 0 0 150px;
    height: 10%;
    width: 85%;
    padding: 10px 0px;
    border-bottom: 1px solid black;
}
</style>