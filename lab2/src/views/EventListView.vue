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

      <!-- Page Size Links -->
      <div class="page-size">
        <!-- Page size 2 link -->
        <RouterLink
          :to="{ name: 'event-list', query: { page: 1, size: 2 } }"
          :class="{ active: pageSize === 2 }"
        >
          2
        </RouterLink>
        <!-- Page size 5 link -->
        <RouterLink
          :to="{ name: 'event-list', query: { page: 1, size: 5 } }"
          :class="{ active: pageSize === 5 }"
        >
          5
        </RouterLink>
        <!-- Page size 10 link -->
        <RouterLink
          :to="{ name: 'event-list', query: { page: 1, size: 10 } }"
          :class="{ active: pageSize === 10 }"
        >
          10
        </RouterLink>
      </div>
      <!-- End of Page Size Links -->
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
/* Add styles for page size links */
.page-size {
  display: flex;
  margin-top: 8px;
}

.page-size RouterLink {
  display: inline-block;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  text-decoration: none;
  color: #2c3e50;
}

.page-size RouterLink.active {
  background-color: #42b983;
  color: #fff;
}
.page-size RouterLink.active {
  background-color: #42b983;
  color: #fff;
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
  },
  pageSize: {
    type: Number,
    default: 2 // default page size is set to 2
  }
})

// Fetch events data when the component is created
watchEffect(() => {
  EventService.getEvent(props.pageSize, props.page).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = parseInt(response.headers['x-total-count']) // Store the total number of events
  })
})
const hasNextPage = computed(() => {
  // first calculat the toatl page
  const totalPages = Math.ceil(totalEvent.value / 2)
  return props.page < totalPages
})
</script>
