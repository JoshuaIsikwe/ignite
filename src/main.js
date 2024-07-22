import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from "./router/router"
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();
const vuetify = createVuetify({
    components, directives,
    
    
});

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')

    //App.use(createPinia());
