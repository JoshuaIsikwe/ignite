import { createWebHistory, createRouter } from "vue-router" 
//import App from "../App.vue"
import QuizDisplay from "../views/QuizDisplay.vue"

import StartScreen from "../views/StartScreen.vue"
import Modal from "../components/Modal.vue"


const links = [
{
path: "/",     
name: "Home",     
component: StartScreen,
},
{
path: "/quiz",     
name: "Quiz",     
component: QuizDisplay,
},
{
path: "/results",     
name: "Results",     
component: Modal,
},

]


const router = createRouter({   
history: createWebHistory(),  
 routes: links, 
})  

export default router