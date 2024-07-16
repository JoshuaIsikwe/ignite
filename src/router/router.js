import { createWebHistory, createRouter } from "vue-router" 
import App from "../App.vue"
import QuizDisplay from "../views/QuizDisplay.vue"


const links = [
{
path: "/",     
name: "HomePage",     
component: App,
},
{
path: "/Quiz",     
name: "Quiz",     
component: QuizDisplay,
},


]


const router = createRouter({   
history: createWebHistory(),  
 routes: links, 
})  

export default router