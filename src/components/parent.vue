<template>
    <div>
        <child :parent-message="msg" @print="val => printMessage(val)" />
        
    </div>
</template>

<script>
import child from './child.vue'
export default {
    name: 'parent',
    components: { child },
    data () {
        return {
            msg: '안녕하세요'
        }
    },
    methods: {
        printMessage (val) {
            console.log(val)
        }
    }
}
</script>