<template>
    <div class="app_layout">
       <app-header></app-header>
        <div class="page_container">
             <router-view />
        </div>
       
    </div>
</template>
<script lang="ts" setup>
import AppHeader from "../components/organisms/AppHeader.vue";
</script>

<style lang="scss" scoped>
.app_layout{
    .page_container{
        max-width: 1250px;
        padding: 0 50px;
        margin: 35px auto 0;

        @media screen and (max-width: 600px) {
            padding: 0 20px;
        }
    }


}
</style>