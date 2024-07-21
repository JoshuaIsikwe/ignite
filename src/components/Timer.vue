<script>
import { computed } from 'vue';
import { useQuizStore } from '../stores/Store';


export default {
  setup (){
    const store = useQuizStore()

    return {
      questionTime: computed(()=> store.questionTime),
      totalTime: computed(()=> store.totalTime),
    }
  }
}
</script>

<template>
    <div class=" flex flex-col items-center justify-around w-2/3">
        <div class="flex absolute h-10 top-40 left-3/4">
          <p class="flex text-white items-center object-cover font-bold gap-2"><img class="h-full w-full " src="../assets/images/clock.png" alt="">  {{ questionTime }}s</p>
        </div>
        <p class="bg-red-200 w-full">Total time left: {{ totalTime }}s</p>
    </div>
</template>
