<template>
    <div class="search_feild">
        <go-doggy-icon fill="#00071A" icon="search" class="search_icon"></go-doggy-icon>
        <go-doggy-input placeholder="Search" ></go-doggy-input>
        <go-doggy-button variant="transparent">
            <go-doggy-icon fill="#00071A" icon="close"></go-doggy-icon>
        </go-doggy-button>

        <!-- search suggestions -->
        <go-doggy-suggestion-card :contents="contents" ></go-doggy-suggestion-card>


    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { GoDoggyInput, GoDoggyIcon, GoDoggyButton } from "../atoms";
import GoDoggySuggestionCard from "./GoDoggySuggestionCard.vue";

const contents = ref(['Bull Gog', 'jaman shepard', 'rott'])
</script> 

<style lang="scss" scoped>
.search_feild {
    position: relative;

    .search_icon {
        left: 12px;
    }

    button {
        right: 12px;
    }

    .search_icon,
    button {
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
    }
}
</style>