<script>
export default {
  props: {
    questionTime: 30,
    totalTime: 150
  }
}
</script>

<template>
    <div>
        <p>Time left for this question: {{ questionTime }} seconds</p>
        <p>Total time left: {{ totalTime }} seconds</p>
    </div>
</template>
