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
  <div class="bg-blue-900 min-h-screen p-4">
    <router-view class="p-20"/>
  </div>
</template>


<style scoped>

</style>
