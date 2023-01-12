import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3TouchEvents from "vue3-touch-events";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    
};

createApp(App).use(store).use(router).use(Vue3TouchEvents).use(Toast, options).mount('#app')
