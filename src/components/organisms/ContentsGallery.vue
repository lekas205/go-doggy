<template>
    <div class="content_gallery">
        <go-doggy-image-card v-for="img in images" :url="img" ></go-doggy-image-card>
    </div>
</template>

<script lang="ts" setup>
import { GoDoggyImageCard } from "../atoms";

defineProps({
    images: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.content_gallery {
  /* line-height: 0; */
  -webkit-column-count: 4;
  -webkit-column-gap: 10px;
  -moz-column-count: 4;
  -moz-column-gap: 10px;
  column-count: 4;
  column-gap: 24px;
}
</style>