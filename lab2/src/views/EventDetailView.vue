<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { EventItem } from '@/type'
import EventService from '@/services/EventService'
const event: Ref<EventItem | null> = ref(null)
const id: Ref<number> = ref(123)
EventService.getEventById(id.value)
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })

// onMounted(async () => {
//   const eventId = parseInt($route.params.eventId)
//   try {
//     const response = await EventService.getEventById(eventId)
//     event.value = response.data
//   } catch (error) {
//     console.error(error)
//   }
// })
</script>
