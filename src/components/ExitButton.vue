<script>
import { useQuizStore } from '../stores/Store';


export default{
    setup(){
        const store = useQuizStore()

        return{
            quizCompleted: store.quizCompleted
        }
    },

    methods:{
        goHome(){
            this.quizCompleted = true;
        }
    }

}
</script>

<template>
    <div>
        <div @click="goHome" class="w-24 h-24 p-1 flex text-center absolute items-center bottom-40 shadow-xl left-3/4 rounded-full cursor-pointer hover:shadow-sm bg-red-700" >
            Leave with winnings
        </div>
    </div>
    
</template>