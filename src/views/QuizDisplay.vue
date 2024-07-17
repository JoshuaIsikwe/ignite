<script>
import Timer from '../components/Timer.vue'
import { useQuizStore } from '../stores/Store';

export default{
  components: { Timer },

    setup(){
      
    },
    data(){
        return{
            questions: [],
            usedQuestion: [],
            currentQuestion: 0,
            questionTime: 30,
            totalTime: 150,
            interval: null
        }
    },
    mounted(){
        fetch('https://668bd8230b61b8d23b0b68d9.mockapi.io/api/questions')
        .then(res=> res.json())
        .then(data =>{
            this.questions = data
            this.startTimer()})
        .catch(err => console.log(err.message))
    },

    methods:{
      startTimer() {
        this.interval = setInterval(() => {
            if (this.questionTime > 0) {
            this.questionTime--;
            } else if (this.totalTime > 0) {
            this.nextQuestion();
            } else {
            clearInterval(this.interval);
            }

            if (this.totalTime > 0) {
            this.totalTime--;
            } else {
            clearInterval(this.interval);
            }
        }, 1000);
        },
      nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.questionTime = 30;
      } else {
        clearInterval(this.interval);
      }
    },
    calculateScore() {
      
    }
    
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
    
}
</script>

<template>
    <div class="min-h-screen">
        <h1>Who Wants to Be an Ignite Millionaire</h1>
        <section v-if="currentQuestion < questions.length && totalTime > 0">
            <div class="w-2/3">
              <span>Level: {{ questions[currentQuestion].difficulty }}</span>
            <h2 class="text-center w-2/3">{{ questions[currentQuestion].question }}</h2>
            <div class="flex flex-col text-center justify-evenly gap-5 items-center rounded-md w-2/3 h-1/3">
                <p v-for="(options, index) in questions[currentQuestion].options" :key="index" class="btn-option"> {{ options }}</p>
                <p>Time left for this question: {{ questionTime }} seconds</p>
                <p>Total time left: {{ totalTime }} seconds</p>
                <timer/>

                <router-link to="/results">View Final Score</router-link>
            </div>
        </div>
        </section>
    </div>
</template>