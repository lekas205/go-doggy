<template>
    <div class="home_page">
        <!-- search title and sub-categories -->
        <section>
            <go-doggy-text size="large">{{ searchedBreed }}</go-doggy-text>
            <div class="filter_content" v-if="breedSubCategories.length > 1">
                <go-doggy-button v-for="item in breedSubCategories" :variant="cactiveCtegory == item ? 'dark' : 'light'"
                    @click="fetchByCategory(item)">{{ item }}
                </go-doggy-button>
            </div>
        </section>


        <go-doggy-skeleton v-if="loading"></go-doggy-skeleton>
        <empty-state v-else-if="!loading && dogImages.length == 0"></empty-state>
        <contents-gallery :images="dogImages" v-else></contents-gallery>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from 'vuex';
import { key } from '../../store';
import { GoDoggyText, GoDoggyButton } from "../../components/atoms";
import EmptyState from "@/components/organisms/EmptyState.vue";
import GoDoggySkeleton from "@/components/molecules/GoDoggySkeleton.vue";
import ContentsGallery from "@/components/organisms/ContentsGallery.vue";

const $store = useStore(key)
const cactiveCtegory = ref('')

const dogImages = computed(() => {
    return $store.state.dogImages
})

const breedSubCategories = computed(() => {
    return $store.state.breedSubCategories
})

const searchedBreed = computed(() => {
    return $store.state.searchedBreed
})

const loading = computed(() => {
    return $store.state.contentLoading
})

const fetchByCategory = async function (category: string) {
    try {
        cactiveCtegory.value = category
        $store.dispatch('toggleLoadingStatus', true)
        await $store.dispatch('fetchByBreedSubCategories', { breed: searchedBreed.value, category })
        $store.dispatch('toggleLoadingStatus', false)

    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }
}

const fetchRandomBreed = async function () {
    try {
        $store.dispatch('toggleLoadingStatus', true)
        await $store.dispatch('fetchDogImages')
        if (dogImages.value.length < 100) fetchRandomBreed()
        $store.dispatch('toggleLoadingStatus', false)

    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }
}

onMounted(() => {
    let breedImages = localStorage.getItem('breedImages')
    if (breedImages) {
        $store.commit('SAVE_DOG_IMAGES', JSON.parse(breedImages))
    } else {

        fetchRandomBreed()
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