<template>
    <div class="content_gallery"> 
        <go-doggy-image-card v-for="img in  images" :url="img"></go-doggy-image-card>
    </div>
</template>

<script lang="ts" setup>
import  GoDoggyImageCard  from "../molecules/GoDoggyImageCard.vue";

defineProps({
    images: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.content_gallery {
   line-height: 1.5; 
  -webkit-column-count: 4;
  -webkit-column-gap: 10px;
  -moz-column-count: 4;
  -moz-column-gap: 10px;
  column-count: 4;
  column-gap: 24px;


@media (max-width: 1200px) {
    column-count: 3;
}

@media (max-width: 980px) {
    column-count: 2;
  }

@media (max-width: 600px) {
    column-count: 2;
    column-gap: 15px;
    line-height: 1.2; 
  }
}
</style>