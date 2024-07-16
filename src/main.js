import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from "./router/router"

createApp(App).mount('#app')
    App.use(router)
