<template>
  <div>
    <h1>Event For Good</h1>
    <main class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
      <!-- Pagination change to Tailwind CSS  -->
      <div class="flex w-72 justify-between">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page !== 1"
          class="text-left text-gray-700 no-underline"
          id="page-prev"
        >
          Prev Page
        </router-link>

        <router-link
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="text-right text-gray-700 no-underline"
          id="page-next"
        >
          > Next Page
        </router-link>
      </div>
      <!-- End of Pagination -->

      <!-- Page Size Links -->
      <div class="page-size">
        <!-- Page size 1 link -->
        <router-link
          :to="{ name: 'event-list', query: { page: 1, size: 1 } }"
          :class="{ active: pageSize === 1 }"
        >
        </router-link>
        <!-- Page size 2 link -->
        <router-link
          :to="{ name: 'event-list', query: { page: 1, size: 2 } }"
          :class="{ active: pageSize === 2 }"
        >
        </router-link>
        <!-- Page size 3 link -->
        <router-link
          :to="{ name: 'event-list', query: { page: 1, size: 3 } }"
          :class="{ active: pageSize === 3 }"
        >
        </router-link>

        <!-- Page size 5 link -->
        <router-link
          :to="{ name: 'event-list', query: { page: 1, size: 5 } }"
          :class="{ active: pageSize === 5 }"
        >
        </router-link>
      </div>
      <!-- End of Page Size Links -->
    </main>
  </div>
</template>

<style scoped>
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

.page-size router-link {
  display: inline-block;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  text-decoration: none;
  color: #2c3e50;
}

.page-size router-link.active {
  background-color: #42b983;
  color: #fff;
}
.page-size router-link.active {
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
import NProgress from 'nprogress'

import { ref as VueRef, defineProps, watchEffect, computed } from 'vue'

const events = VueRef<EventItem[]>([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 3 // default page size is set to 3
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
  const totalPages = Math.ceil(totalEvent.value / 3)
  return props.page < totalPages
})
</script>
