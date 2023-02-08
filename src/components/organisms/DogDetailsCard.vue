<template>
    <div class="details_card">
        <div class="image_view" :style="{ backgroundImage: 'url(' + url + ')' }">
        </div>
        <div class="description">
            <div class="title">
                <go-doggy-text size="large">{{ breedName }} </go-doggy-text>
                <GoDoggyIcon icon="heart" fill="#ffffff"> </GoDoggyIcon>
            </div>

            <go-doggy-text size="paragraph" v-for="text in contents">
                {{ text }}
            </go-doggy-text>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { GoDoggyImage, GoDoggyIcon, GoDoggyText } from "../atoms";

const contents = ref([
    "  The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a medium sized, muscular dog of around 40–55 lb. They have large heads with a thick folds of skin around the face and shoulders, and a relatively flat face with a protruding lower jaw.",
    "The breed has significant health issues as a consequence of breeding for its distinctive appearance, including brachycephalia, hip dysplasia, heat sensitivity, and skin infections. Due to concerns about their quality of life, breeding Bulldogs is illegal in Norway and the Netherlands.",
    "The modern Bulldog was bred as a companion dog from the Old English Bulldog, a now-extinct breed used for bull-baiting, when the sport was outlawed in England under the Cruelty to Animals Act. The Bulldog Club (In England) was formed.",
    " The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a medium sized, muscular dog of around 40–55 lb. They have large heads with a thick folds of skin around the face and shoulders, and a relatively flat face with a protruding lower jaw.",
    "he breed has significant health issues as a consequence of breeding for its distinctive appearance, including brachycephalia, hip dysplasia, heat sensitivity, and skin infections."

])
defineProps<{
    url: string,
    breedName: string
}>()
</script>

<style lang="scss" scoped>
.details_card {
    display: flex;
    border-radius: 8px;
    overflow: hidden;

    .image_view {
        width: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .description {
        color: var(--theme-white);
        background-color: #211D52;
        height: 100%;
        width: 60%;
        padding: 50px;
        overflow: auto;
        max-height: 80vh;

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;

        }

        h2 {
            font-size: 32px;
            text-transform: capitalize;
        }

        p {
            margin-bottom: 20px;
        }
    }

}
</style>