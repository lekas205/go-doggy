<template>
    <button :class="[`btn-${variant}`]">
        <slot />
    </button>
</template>

<script lang="ts" setup>
defineProps({
    variant: {
        type: String,
        default: 'dark',
        description: 'button colors (dark, light, transparent)'
    },
})
</script>

<style lang="scss" scoped>
button {
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    cursor: pointer;

    &.btn-dark {
        border: 1px solid var(--theme-primary);
        ;
        color: var(--theme-white);
        background-color: var(--theme-primary);
    }

    &.btn-light {
        color: var(--theme-deep-gray);
        background-color: rgba(204, 205, 209, 0.05);
        border: 1px solid rgba(204, 205, 209, 0.25);
    }

    &.btn-transparent {
        background-color: rgba(204, 205, 209, 0);
        border: 1px solid rgba(204, 205, 209, 0);
    }

    @media screen and (max-width: 600px) {
        font-size: 12px;
        padding: 8px 10px;

    }
}
</style>