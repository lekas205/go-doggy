<template>
    <div class="empty_state">
        <go-doggy-text size="large"> So Empty :) </go-doggy-text>
        <go-doggy-text>Content could not be found <br> for this search </go-doggy-text>
        <go-doggy-button @click="goBack">
            Go Back
        </go-doggy-button>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from "../../store";
import { GoDoggyButton, GoDoggyText } from "../atoms";

const $store = useStore(key)

const goBack =  function(){
    $store.dispatch('resetPageContent')
}
</script>

<style lang="scss" scoped>
.empty_state {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 75vh;

    h2,
    p {
        margin-bottom: 10px;
        text-align: center;
        color: var(--primary);
    }

    button {
        margin-top: 15px;
    }
}
</style>
