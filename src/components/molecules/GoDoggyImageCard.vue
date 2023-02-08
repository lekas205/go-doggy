<template>
    <div class="image_card">
        <go-doggy-image :url="url"></go-doggy-image>
        <!-- overlay -->
        <div class="image_overlay">
            <go-doggy-text>Pit bull</go-doggy-text>
            <go-doggy-icon icon="heart" fill="#ffffff"></go-doggy-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { GoDoggyImage, GoDoggyIcon, GoDoggyText } from "../atoms";
defineProps<{
    url: string
}>()
</script>

<style lang="scss" scoped>
.image_card {
    position: relative;
    cursor: pointer;
    height: 100%;

    .image_overlay {
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: calc(100% - 30px);
        width: 100%;
        z-index: 3;
        padding: 18px 20px;
        border-radius: 8px;
        position: absolute;
        opacity: 0;
        background: rgba(0, 0, 0, 0.3);
        transition: opacity .25s ease-in;

        p {
            font-size: 16px;
            text-transform: capitalize;
            color: var(--theme-white);
        }
    }

    &:hover {
        .image_overlay {
            opacity: 1;
        }
    }
}
</style>