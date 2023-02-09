<template>
    <div class="search_suggestions">
        <go-doggy-text v-for="item in contents" @click="$emit('selectBreed', item)" >
            {{ item }}
        </go-doggy-text>
    </div>
</template>
<script lang="ts" setup>
import { GoDoggyText } from "../atoms";
defineProps<{
    contents: String[]
}>()
defineEmits(['selectBreed'])
</script>

<style lang="scss" scoped>
.search_suggestions{
    width: 100%;
    position: absolute;
    border-radius: 0 0 16px 16px;
    padding: 20px;
    max-height: 70vh;
    overflow: auto;
    background-color: var(--theme-white);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;   
    
    p{
        cursor: pointer;
        padding: 8px 10px;
        border-radius: 8px;
        &:hover{
            background: var(--theme-gray);
        }
    }
}
</style>