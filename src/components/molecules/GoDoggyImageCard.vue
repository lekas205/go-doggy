<template>
    <router-link :to="`/${breedName}?image_url=${url}`" class="image_card" @click="" >
        <go-doggy-image :url="props.url"></go-doggy-image>
        <!-- overlay -->
        <div class="image_overlay">
            <go-doggy-text>{{ breedName }} </go-doggy-text>
            <go-doggy-icon icon="heart" fill="#ffffff"></go-doggy-icon>
        </div>
    </router-link>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useBreedName } from '../../composables/getBreedName'
import { GoDoggyImage, GoDoggyIcon, GoDoggyText } from "../atoms";
const props = defineProps({
    url: {
        type: String,
        default: ''
    }
})

const breedName = useBreedName(props.url)

const close = async () => {
    
}
</script>

<style lang="scss" scoped>
.image_card {
    position: relative;
    cursor: pointer;
    height: 100%;
    display: block;

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