<template>
    <div class="home_page">
        <go-doggy-text size="large">Bulldog</go-doggy-text>
        <div class="filter_content">
            <go-doggy-button v-for="item in filterContent" :variant="category == item ? 'dark' : 'light'">{{ item }}
            </go-doggy-button>
        </div>
        <contents-gallery :images="dogImages"></contents-gallery>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { DogService } from "../../services";
import { GoDoggyText, GoDoggyButton } from "../../components/atoms";
import ContentsGallery from "@/components/organisms/ContentsGallery.vue";
const category = ref('Samoyed')
const dogImages = ref([])
const filterContent = ref([
    "Bulldog", "Pitbull", "RottWiller", "Samoyed", "Eskimo"
])

onMounted(async () => {
    let { data } = await DogService.fetchRandomDogImages()
    dogImages.value = data.message
    console.log(data);
})
</script>

<style lang="scss" setup>
.home_page {
    h2 {
        font-size: 32px;
        margin-bottom: 20px;
        color: var(--theme-primary);
    }

    .filter_content {
        &>*+* {
            margin-left: 15px;
        }

        margin-bottom: 20px;
    }
}
</style>