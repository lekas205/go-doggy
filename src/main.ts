import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import http from './http/axios';
import { store, key } from './store'
import { AxiosKey } from './http/symbol';
import './assets/scss/main.scss';

createApp(App)
    .use(router)
    .use(store, key)
    .provide(AxiosKey, http)
    .mount('#app')

