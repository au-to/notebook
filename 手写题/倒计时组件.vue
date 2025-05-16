<template>
  <div class="time-wrapper">
    倒计时：{{ formatTime }}
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  downTime: {
    type: Number,
    required: true
  },
  onEnd: {
    type: Function,
    default: null
  }
})

const remaining = ref(props.downTime)
const timer = ref(null)

const formatTime = computed(() => {
  const m = String(Math.floor(remaining.value / 60)).padStart(2, '0')
  const s = String(remaining % 60).padStart(2, '0')

  return `${m}:${s}`
})

const startCountDown = () => {
  timer.value = setInterval(() => {
    if (remaining.value > 0) {
      remaining.value--
    } else {
      clearInterval(timer.value)
      props?.onEnd()
    }
  }, 1000)
}

onMounted(() => {
  startCountDown()
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>