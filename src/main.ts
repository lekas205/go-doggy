import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import http from './http/axios';
import { AxiosKey } from './http/symbol';
import './assets/scss/main.scss';

createApp(App)
    .use(router)
    .provide(AxiosKey, http)
    .mount('#app')
    
