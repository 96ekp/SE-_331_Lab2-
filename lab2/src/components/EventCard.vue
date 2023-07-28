<!--  HTML or template -->
<template>
  <RouterLink to="/event/123">
+    <div class="event-class">
+      <div class="event-card">
+        <span>@{{ event.time }} on {{ event.date }}</span>
+        <h4>{{ event.title }}</h4>
+      </div>
    </div>
 <RouterLink>
</template>

<!-- typescript -->
<script setup lang="ts">
import type { EventItem } from '@/type'
import type { PropType } from 'vue'
// import { defineProps } from 'vue';

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
})
</script>

<!-- CSS or styles -->
<style scoped>
.event-class {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0, 2);
}
</style>
