<script>
import { useQuizStore } from '../stores/Store';


export default{
    setup(){
        const store = useQuizStore()
        
        const goHome = () => {
        store.finished()
        };

        return{
            goHome
        }
    },

}
</script>

<template>
    <div>
        <button @click="goHome()" class="w-24 h-24 p-1 flex text-center font-semibold absolute items-center bottom-20 md:bottom-40 shadow-xl left-3/4 rounded-full cursor-pointer hover:scale-95 bg-red-700" >
            Leave with winnings
        </button>
    </div>
    
</template>