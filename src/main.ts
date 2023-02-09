import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import http from './http/axios';
import { store, key } from './store'
import { AxiosKey } from './http/symbol';

import './assets/scss/main.scss';

import VueLazyLoad from 'vue3-lazyload'

createApp(App)
    .use(router)
    .use(store, key)
    .use(VueLazyLoad,{})
    .provide(AxiosKey, http)
    .mount('#app')

