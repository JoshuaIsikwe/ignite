<template>
    <transition name="modal" class="flex flex-col bg-gray-100 shadow-lg rounded-lg h-80 w-1/3 m-auto">
      <div class="modal-mask fixed z-10">
        <div class="modal-wrapper">
          <div class="modal-container"> 
            <div class="modal-body flex justify-center items-center">
                  <div class="w-2/3 text-center">
                    <h2>Quiz Completed!</h2>
                    <p>Your Score: {{ score }}</p>
                    <button @click="resetQuiz" class="mt-10 bg-green-300 rounded-md shadow-md p-5 hover:bg-green-500">Restart Quiz</button>
                  </div>
            </div>
  
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
import { useQuizStore } from '../stores/Store';

  export default {
    props:{
        score: Number
    },
   setup(){
    const store = useQuizStore();

    return{
        resetQuiz: store.resetQuiz
    }
   }
  };
  </script>