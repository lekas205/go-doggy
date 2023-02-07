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
import { ref } from "vue";
import { GoDoggyText, GoDoggyButton } from "../../components/atoms";
import ContentsGallery from "@/components/organisms/ContentsGallery.vue";
const category = ref('Samoyed')
const dogImages = ref([
    "https://plus.unsplash.com/premium_photo-1668257259669-f82c2506615e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1610385874395-e75e493098b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1619980201524-2f237decc377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1614178730713-4badc749c333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1614178730713-4badc749c333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1610112645245-36020fc0e128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1619980201524-2f237decc377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1610112645245-36020fc0e128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHB1cHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1610385874395-e75e493098b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1619980201524-2f237decc377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1668257259669-f82c2506615e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1668257259669-f82c2506615e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",

])
const filterContent = ref([
    "Bulldog", "Pitbull", "RottWiller", "Samoyed", "Eskimo"
])
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