<!-- views/event/EventDetailView.vue -->

<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'
defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
</script>

<template>
  <div v-if="event" class="text-center font-mono mt-2">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
