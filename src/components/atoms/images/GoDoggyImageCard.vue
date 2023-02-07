<template>
    <img :src="url" alt="">
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
    margin-bottom: 24px;
}
</style>