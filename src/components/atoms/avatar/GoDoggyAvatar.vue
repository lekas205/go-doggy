<template>
    <img :src="url" :style="avataSize" alt="" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
    url:{ type:String},
    width:{type:String },
    height: {type: String}
})

const avataSize = computed(() => {
    if (props.width && props.height) return { height: props.height, width: props.width }
    return { height: '30px', width: '30px' }
})
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
}
</style>