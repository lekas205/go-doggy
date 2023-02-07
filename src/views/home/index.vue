<template>
    <div class="hello">
        <go-doggy-button variant="dark" > hello world</go-doggy-button>
        <go-doggy-button variant="light" > hello world</go-doggy-button>
        <go-doggy-text size="default" >I am larhe</go-doggy-text>
        <go-doggy-avatar url="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"></go-doggy-avatar>
        <go-doggy-input  @input="$emit('update:me', $event.target.value)" ></go-doggy-input>
        <go-doggy-icon icon="cart" fill="#524E7A" ></go-doggy-icon>
        <go-doggy-logo width="150px"></go-doggy-logo>
        <go-doggy-image-card url="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" ></go-doggy-image-card>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import GoDoggyText from '../../components/atoms/text/GoDoggyText.vue';
import GoDoggyInput from '../../components/atoms/inputs/GoDoggyInput.vue';
import GoDoggyIcon from '../../components/atoms/icons/GoDoggyIcon.vue';
import GoDoggyLogo from "../../components/atoms/logos/GoDoggyLogo.vue";
import GoDoggyAvatar from '../../components/atoms/avatar/GoDoggyAvatar.vue';
import GoDoggyButton from "../../components/atoms/buttons/GoDoggyButton.vue";
import GoDoggyImageCard from '../../components/atoms/images/GoDoggyImageCard.vue';

const me = ref([''])
</script>