<template>
    <div class="home_page">
        <section v-if="!loading">
            <go-doggy-text size="large">Bulldog</go-doggy-text>
            <div class="filter_content">
                <go-doggy-button v-for="item in filterContent" :variant="category == item ? 'dark' : 'light'">{{ item }}
                </go-doggy-button>
            </div>
            <contents-gallery :images="dogImages"></contents-gallery>
        </section>
        <go-doggy-skeleton v-else></go-doggy-skeleton>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from 'vuex';
import { key } from '@/store';
import { GoDoggyText, GoDoggyButton } from "../../components/atoms";
import GoDoggySkeleton from "@/components/molecules/GoDoggySkeleton.vue";
import ContentsGallery from "@/components/organisms/ContentsGallery.vue";

const $store = useStore(key)
const category = ref('Samoyed')
const filterContent = ref([
    "Bulldog", "Pitbull", "RottWiller", "Samoyed", "Eskimo"
])

const dogImages = computed(() => {
    return $store.state.dogImages
})

const loading = computed(() => {
    return $store.state.contentLoading
})

onMounted(async () => {
    try {
        $store.dispatch('toggleLoadingStatus', true)
        await $store.dispatch('fetchDogImages')
        $store.dispatch('toggleLoadingStatus', false)
    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }

})
</script>

<style lang="scss" setup>
.home_page {
    h2 {
        font-size: 32px;
        margin-bottom: 20px;
        color: var(--theme-primary);

        @media screen and (max-width: 600px) {
            font-size: 25px;
        }
    }

    .filter_content {
        margin-bottom: 20px;
        button {
            margin-bottom: 15px;

            &:not(:last-child) {
                margin-right: 12px;
            }
        }

    }
}
</style>