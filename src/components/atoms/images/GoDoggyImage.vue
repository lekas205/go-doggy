<template>
    <img v-lazy="url" alt="">
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps<{
    url: string,
}>()
</script>

<style lang="scss" scoped>
img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    margin-bottom: 24px;

    &[lazy=loading] {
        background: #eee;
        background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
        border-radius: 8px;
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
    }

    @keyframes shine {
    to {
        background-position-x: -200%;
    }
}
}
</style>