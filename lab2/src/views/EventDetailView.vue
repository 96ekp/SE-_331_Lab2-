<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { EventItem } from '@/type'
import EventService from '@/services/EventService'

const event: Ref<EventItem | null> = ref(null)
const props = defineProps({
  id: String
})

onMounted(() => {
  // Access the "id" prop passed from the router and convert it to a number
  const eventId = Number(props.id)

  EventService.getEventById(eventId)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
