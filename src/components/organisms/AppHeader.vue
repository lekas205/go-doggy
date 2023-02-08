<template>
    <div class="app_header">
        <div class="container">
            <router-link to="/">
                <GoDoggyLogo class="desktop_logo"></GoDoggyLogo>
                <go-doggy-icon-logo class="mobile_logo" ></go-doggy-icon-logo>
            </router-link>
            
            <go-doggy-search class="header_search_feild" ></go-doggy-search>

            <div class="header_icons">
                <go-doggy-icon icon="bell" fill="#524E7A"></go-doggy-icon>
                <go-doggy-icon icon="heart" fill="#524E7A"></go-doggy-icon>
                <go-doggy-icon icon="cart" fill="#524E7A"></go-doggy-icon>

                <go-doggy-avatar
                    url="https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"></go-doggy-avatar>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { GoDoggyLogo, GoDoggyAvatar, GoDoggyIcon, GoDoggyIconLogo } from "../atoms";
import GoDoggySearch from "../molecules/GoDoggySearch.vue";
</script>

<style lang="scss" scoped>
.app_header {
    top: 0;
    padding: 20px 0;
    position: sticky;
    z-index: 999;
    background: var(--theme-white);
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1250px;
        padding: 0 50px;
        margin: 0 auto;

        .mobile_logo{
            display: none;
        }

        .header_search_feild{
            width: 50%;
        }

        .header_icons {
            display: flex;
            align-items: center;

            &>*+* {
                margin-left: 21px;
            }
        }

        @media screen and (max-width: 820px) {
            .desktop_logo {
                display: none;
            }
            .mobile_logo{
                display: block;
            }
        }

        @media screen and (max-width: 600px) {
            padding: 0 20px;
        }
    }
}
</style>