<!-- views/event/EventDetailView.vue -->

<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
const router = useRouter()
const store = useMessageStore()

function register() {
  store.updateMessage('You are successfully registered for ' + event.value?.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({
    name: 'eventDetail',
    params: {
      id: props.event.id
    }
  })
}
</script>

<template>
  <p>Registration from here</p>
  <button @click="register">Register Me</button>
</template>
