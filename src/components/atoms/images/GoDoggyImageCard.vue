<template>
    <div class="">
        <img :src="url" alt="">
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps<{
    url: string,
}>()
</script>

<style lang="scss" scoped>
img{
    border-radius: 6px;
}
</style>