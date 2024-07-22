import { defineStore } from "pinia";

export const useQuizStore = defineStore({
    id: 'Quiz',
    state: () =>({
        questions: [],
        usedQuestion: [],
        currentQuestion: 0,
        questionTime: 30,
        totalTime: 150,
        interval: null,
        score: 0,
        quizCompleted: false
    }),

    actions:{
      //Api Call
       async fetchQuestions() {

        try {
          const response = await fetch('https://668bd8230b61b8d23b0b68d9.mockapi.io/api/questions')
          const data = await response.json();
          this.questions = data; 
          this.startTimer()
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
        
      },
      //Timer and scoring
      startTimer() {
        this.interval = setInterval(() => {
            if (this.questionTime > 0) {
            this.questionTime--;
            } else if (this.totalTime > 0) {
            this.nextQuestion(null);
            } else {
            clearInterval(this.interval);
            }

            if (this.totalTime > 0) {
            this.totalTime--;
            } else {
              this.finished()
            }
        }, 1000);
        },
      nextQuestion(selectedAnswer) {
        const current = this.questions[this.currentQuestion];
      if (selectedAnswer !== null) {
        if (selectedAnswer === current.correctAnswer) {
          switch (current.difficulty) {
            case 'Easy':
              this.score += 1;
              break;
            case 'Medium':
              this.score += 2;
              break;
            case 'Hard':
              this.score += 3;
              break;
            case 'Very Hard':
              this.score += 4;
              break;
          }
        } else {
          this.finished()
          return;
        }
      }

      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.questionTime = 30;
      } else {
        this.finished();
      }
    },
    resetQuiz() {
      clearInterval(this.interval);
      this.currentQuestion = 0;
      this.questionTime = 30;
      this.totalTime = 150;
      this.quizCompleted = false;
      this.score = 0;
      this.fetchQuestions();
    },
    finished(){
      clearInterval(this.interval);
      this.quizCompleted = true
    }
}
})