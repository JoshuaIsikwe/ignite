import { createWebHistory, createRouter } from "vue-router" 
//import App from "../App.vue"
import QuizDisplay from "../views/QuizDisplay.vue"
import Results from "../views/Results.vue"
import StartScreen from "../views/StartScreen.vue"


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
component: Results,
},

]


const router = createRouter({   
history: createWebHistory(),  
 routes: links, 
})  

export default router