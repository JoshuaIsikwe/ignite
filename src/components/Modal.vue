<template>
    <div class="flex flex-col inset-0 fixed z-10 m-auto bg-gray-200/95 shadow-lg rounded-lg h-80 w-1/3 ">
          
            <div class="modal-body flex flex-col justify-center mt-10 items-center">
                    <h2 class="text-xl font-bold uppercase">Quiz Completed!</h2>
                    <p class="font-semibold">Your Final Score: {{ score }}</p> 
                    <p>You got {{ correctAnswers }} answers correct</p>
            </div>
            <div class="modal-footer">
              <button @click="resetQuiz" class="mt-10 bg-green-300 rounded-md shadow-md p-5 hover:bg-green-500">Retake Quiz</button>
            </div>
    </div>
  </template>
  
  <script>
import { useQuizStore } from '../stores/Store';

  export default {
    props:{
        score: Number,
        correctAnswers: Number
    },
   setup(){
    const store = useQuizStore();

    return{
        resetQuiz: store.resetQuiz
    }
   }
  };
  </script>