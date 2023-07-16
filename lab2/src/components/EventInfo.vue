<template>
  <div class="event-info">
    <div class="category">{{ event.category }}</div>
    <div class="organizer">{{ event.organizer }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.event-info {
  text-align: right;
}

.category,
.organizer {
  font-size: 16px;
}
</style>
