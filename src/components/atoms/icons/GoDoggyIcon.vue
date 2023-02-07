<template>
      <svg
        :width="iconObject.width"
        :height="iconObject.height"
        :viewBox="`0 0 ${iconObject.width} ${iconObject.height}`"
        fill="none"
        :class="fill"
    >
        <path v-for="path in iconObject.path"  :d="path" :fill="fill" />
    </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { computed } from 'vue';
import icons from './icons.json';

const props = defineProps({
    fill:{
        type: String,
        default: "fill-primary"
    },
    icon: {
        type: String,
        required: true
    },
})

const iconObject = computed(() => {
    return icons[props.icon as keyof typeof icons];
})
</script>