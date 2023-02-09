<template>
    <div class="search_feild">
        <go-doggy-icon fill="#00071A" icon="search" class="search_icon"></go-doggy-icon>
        <go-doggy-input placeholder="Search" @keyup="search($event)" v-model="form.breed"
            :value="form.breed"></go-doggy-input>
        <go-doggy-button variant="transparent" v-if="form.breed.length > 0" @click="form.breed = ''">
            <go-doggy-icon fill="#00071A" icon="close"></go-doggy-icon>
        </go-doggy-button>

        <!-- search suggestions -->
        <go-doggy-suggestion-card :contents="contents" v-if="contents.length > 0 && form.breed.length > 0"
            @selectBreed="selectBreed($event)"></go-doggy-suggestion-card>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';
import { key } from "../../store";
import { ref, reactive, computed } from "vue";
import { GoDoggyInput, GoDoggyIcon, GoDoggyButton } from "../atoms";
import GoDoggySuggestionCard from "./GoDoggySuggestionCard.vue";

const $store = useStore(key)
const contents = ref([])
const form = reactive({
    breed: '',
})

const breedList = computed(() => {
    return $store.state.breedList
})
const fetchBreed = async function () {
    try {
        $store.dispatch('toggleLoadingStatus', true)
        await $store.dispatch('fetchByBreed', form.breed)
        $store.dispatch('toggleLoadingStatus', false)
    } catch (err) {
        console.log(err);
        $store.dispatch('toggleLoadingStatus', false)
    }
}

const search = async function (event: KeyboardEvent) {
    let key = event.keyCode || event.charCode
    if (key === 13) return selectBreed(form.breed)
    if (form.breed.length > 0) return getBreedList()
    contents.value = []

}

const fetchFilteredBreeds = function () {
    console.log(breedList);
}

const selectBreed = function (breed: string) {
    form.breed = breed
    contents.value = []
    if (form.breed.length > 0) {
        fetchBreed()
        // check if breed has sub categories
        let breedSubCategory = breedList.value[breed]
        $store.commit('SAVE_BREED_CATEGORIS', breedSubCategory || [])
        $store.commit('SAVE_SEARCHED_BREED', breed)
    } else {
        $store.dispatch('resetPageContent')
    }

}

const getBreedList = async function () {
    if (breedList.value == null) {
        await $store.dispatch('fetchBreedList')
    }
    let breeds = Object.keys(breedList.value)
    contents.value = breeds.filter(elm => {
        return elm.includes(form.breed.toLowerCase())
    })
}

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