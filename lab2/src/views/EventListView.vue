<template>
  <h1>Events For Good</h1>

  <main class="events">
    <EventList v-for="event in events" :key="event.id" :event="event" />
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
import EventList from '../components/EventList.vue'

import type { EventItem } from '@/type'
import { ref } from 'vue'

// Import Axios
// import axios from 'axios'

// Import EventService
import EventService from '@/services/EventService'

const events: Ref<EventItem[]> = ref([])
// Fetch events data when the component is created
EventService.getEvent().then((response) => {
  events.value = response.data
})
</script>
