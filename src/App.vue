<script >
import QuizDisplay from './views/QuizDisplay.vue'
import StartScreen from './views/StartScreen.vue'

export default{
  components:{
    QuizDisplay, StartScreen, 
  }
}

</script>

<template>
  <div class="bg-blue-200 min-h-screen p-4">
    <router-view/>
    <quiz-display/>
    <start-screen/>
  </div>
</template>


<style scoped>

</style>
