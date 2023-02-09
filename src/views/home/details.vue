<template>
    <dog-details-card :breed-name="breedName" :url="image_url"></dog-details-card>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from "vue";
import {useRoute} from 'vue-router'
import DogDetailsCard from "../../components/organisms/DogDetailsCard.vue";
const route = useRoute();

let image_url = ref()
let breedName = ref()

onMounted(()=>{
    image_url.value = route.query.image_url
    breedName.value = route.params.id
})


// onMounted(()=>)

</script>