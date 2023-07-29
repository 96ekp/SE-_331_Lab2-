<template>
  <div>
    <h1>Event List</h1>
    <main class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
      <!-- Pagination -->
      <div class="pagination">
        <RouterLink
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page !== 1"
          id="page-prev"
        >
          Prev Page
        </RouterLink>

        <RouterLink
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          id="page-next"
        >
          Next Page
        </RouterLink>
      </div>
      <!-- End of Pagination -->
    </main>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* New CSS for pagination */
.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>

<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventList from '../components/EventList.vue'
import type { EventItem } from '@/type'
import { ref } from 'vue'
// Import EventService
import EventService from '@/services/EventService'

import { ref as VueRef, defineProps, watchEffect, computed } from 'vue'

const events = VueRef<EventItem[]>([])
// Fetch events data when the component is created
// EventService.getEvent().then((response) => {
//   events.value = response.data
// })

const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  EventService.getEvent(2, props.page).then((response) => {
    events.value = response.data
    totalEvent.value = parseInt(response.headers['x-total-count'] || '0')
  })
})
const hasNextPage = computed(() => {
  // first calculat the toatl page
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page < totalPages
})
</script>
