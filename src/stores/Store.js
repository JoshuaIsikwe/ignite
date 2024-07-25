import { defineStore } from "pinia";

export const useQuizStore = defineStore({
    id: 'Quiz',
    state: () =>({
        questions: [],
        currentQuestion: 0,
        questionTime: 30,
        totalTime: 150,
        interval: null,
        score: 0,
        quizCompleted: false,
        nextScore: 0,
        correctAnswers: 0,
        friendAnswer: '',
        friendAnswered: false
    }),

    actions:{
      //Api Call
       async fetchQuestions() {

        try {
          const response = await fetch('https://668bd8230b61b8d23b0b68d9.mockapi.io/api/questions')
          const data = await response.json();

          // Define difficulty order
        // const difficultyOrder = {
        //   'Easy': 1,
        //   'Medium': 2,
        //   'Hard': 3,
        //   'Very Hard': 4
        // };
        
        // // Sort questions by difficulty
        // this.questions = data.sort((a, b) => {
        //   return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        // });
          this.questions = data
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
          this.correctAnswers++
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
        this.nextQuestionLevel()
      } else {
        this.finished();
      }
    },
    //Calculate difficulty of Next question
    
    nextQuestionLevel () {
      const nextQuestionIndex = this.currentQuestion + 1;
      if (nextQuestionIndex < this.questions.length) {
        const nextQuestion = this.questions[nextQuestionIndex];

        switch (nextQuestion.difficulty) {
          case 'Easy':
            this.nextScore = 1;
            break;
          case 'Medium':
            this.nextScore = 2;
            break;
          case 'Hard':
            this.nextScore = 3;
            break;
          case 'Very Hard':
            this.nextScore = 4;
            break;
        }
      } else {
        this.nextScore = 0; // Reset to 0 if there are no more questions
      }
    },
    
    resetQuiz() {
      clearInterval(this.interval);
      this.correctAnswers = 0;
      this.currentQuestion = 0;
      this.questionTime = 30;
      this.totalTime = 150;
      this.quizCompleted = false;
      this.score = 0;
      this.fetchQuestions();
      this.friendAnswered = false
    },
    finished(){
      clearInterval(this.interval);
      this.quizCompleted = true
    },

     resetTimer () {
      this.questionTime = 30
    },

    phoneFriend(){

      const currentQuestion = this.questions[this.currentQuestion]; // Get the current question
      
      if (currentQuestion!==null){
        const allOptions = currentQuestion.options;
        const randomOption = allOptions[Math.floor(Math.random() * allOptions.length)];

        this.friendAnswer = randomOption;
        this.friendAnswered= true;
        
        this.resetTimer()
      } else {
        console.error("answer undefined")
      }
    }
}


})