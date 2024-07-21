import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from "./router/router"
import { createPinia } from 'pinia'
//import { createVuetify } from 'vuetify'

//import { FontAwesomeIcon } from './assets/fontawesome'

const pinia = createPinia();
//const vuetify = createVuetify()

createApp(App).use(router).use(pinia).mount('#app')

    //App.use(createPinia());
