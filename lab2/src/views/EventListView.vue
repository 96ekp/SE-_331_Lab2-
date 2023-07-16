<template>
  <h1>Events For Good</h1>

  <main class="events">
    <EventInfo v-for="event in events" :key="event.id" :event="event" />
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script setup lang="ts">
// import EventCard from '../components/EventCard.vue'
import EventInfo from '../components/EventInfo.vue'

import type { EventItem } from '@/type'
import { ref } from 'vue'

// Import Axios
// import axios from 'axios'

// import the EventService instend of axios
import EventService from '@/services/EventService'

const events: Ref<EventItem[]> = ref([])
axios.get<EventItem[]>('http://localhost:3004/events').then((response) => {
  events.value = response.data
})
</script>
