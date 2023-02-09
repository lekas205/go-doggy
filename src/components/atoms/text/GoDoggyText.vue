<template>
    <component :is="tagSelector" v-bind="$attrs">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, markRaw } from 'vue';
const props = defineProps({
    size: {
        type: String,
        default: 'paragraph',
        validator(value: string) {
            return ['small', 'paragraph', 'medium', 'large'].includes(value)
        },
    },
});

const tags = markRaw([
    {
        size: 'small',
        tag: 'small'
    },
    {
        size: 'paragraph',
        tag: 'p'
    },
    {
        size: 'medium',
        tag: 'h4'
    },
    {
        size: 'large',
        tag: 'h2'
    },
])

const tagSelector = computed(() => {
    return tags.find(value => value.size === props.size)?.tag
});

</script>