import { defineStore } from "pinia";

export const useQuizStore = defineStore({
    id: 'Quiz',
    state: () =>({
        questions: [],
        usedQuestion: [],
        currentQuestion: 0,
        questionTime: 30,
        totalTime: 150,
        interval: null
    }),

    actions:{
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
    }
})