<script>
import { computed, onMounted } from 'vue';
import Modal from '../components/Modal.vue';
import Timer from '../components/Timer.vue'
import { useQuizStore } from '../stores/Store';
import ExitButton from '../components/ExitButton.vue';
import { watch } from 'vue';

export default{
  components: { Timer, Modal, ExitButton },


    setup(){
      const store = useQuizStore();


    onMounted(() =>{
        store.fetchQuestions().then(()=>{
          store.nextQuestionLevel()
        })
        //nextQuestionLevel()
        //console.log(nextScore)
      });

      watch(
      () => store.currentQuestion,
      () => {
        store.nextQuestionLevel();
      }
    );

      return {
      questions: computed(()=> store.questions),
      currentQuestion: computed(()=> store.currentQuestion),
      questionTime: computed(()=> store.questionTime),
      totalTime: computed(()=> store.totalTime),
      interval: computed(()=> store.interval),
      totalTime: computed(()=> store.totalTime),
      score: computed(()=> store.score),
      quizCompleted: computed(()=> store.quizCompleted),
      nextQuestion: store.nextQuestion,
      resetQuiz : store.resetQuiz,
      correctAnswers: computed(()=> store.correctAnswers),
      nextScore: computed(()=> store.nextScore),
      nextQuestionLevel: store.nextQuestionLevel,
      friendAnswer: computed(()=>store.friendAnswer),
      phoneFriend: store.phoneFriend,
      friendAnswered: computed(()=> store.friendAnswered)
    }
    }

      
}
</script>

<template>
    <div class="min-h-screen max-h-screen flex flex-col w-screen items-center text-center bg-showroom bg-cover bg-no-repeat">
      <div>
        <h4 class="text-green-300 text-sm md:text-lg font-bold ">Your current score is {{ score }}</h4>
        <h4 class="text-yellow-300">Next question points: {{ nextScore }}</h4>
      </div>
        <section v-if="currentQuestion < questions.length && totalTime > 0">
            <div class="min-w-full items-center mt-5 w-5/6">
            <div class="flex flex-col mb-4 items-center min-w-full">
              <span class="text-xs text-green-100 items-left font-semibold">Difficulty: {{ questions[currentQuestion].difficulty }}</span>
              <h2 class="text-green-100 text-center font-bold text-2xl min-w-full">{{ questions[currentQuestion].question }}</h2>
            </div>
            <div class="flex flex-col text-center justify-evenly gap-5 items-center rounded-md w-full h-1/3">
              <div class="grid md:grid-cols-2 grid-rows-2 grid-cols-1 min-w-full gap-10">
                <button v-for="(option, index) in questions[currentQuestion].options" :key="index" class="btn-option" @click="nextQuestion(option)">{{ index +1 }}. {{ option }}</button>
              </div>
                <!-- Timer -->
                <div>
                  <timer/>
                  <exit-button/>
                  <button @click="phoneFriend" :disabled="friendAnswered" :aria-disabled="friendAnswered" class="bg-green-400 rounded-xl p-5 mt-4">Phone a friend</button>
                  <p v-if="friendAnswered" class="text-white">{{ friendAnswer }}</p>
                </div>
                <!-- modal -->
                <section v-if="quizCompleted">
                  <modal :score="score" :correctAnswers="correctAnswers"/>
                </section>
            </div>
        </div>
        </section>
    </div>
</template>