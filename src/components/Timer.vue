<script>
export default {
  props: ['totalTime', 'questionTime']
}
</script>

<template>
    <div class=" z-10 flex flex-col justify-around w-2/3">
        <p class="fixed top-5 left-1/4">Time left for this question: {{ questionTime }} seconds</p>
        <p>Total time left: {{ totalTime }} seconds</p>
    </div>
</template>
