<template>
  <div class="event-info">
    <span class="category">{{ event.category }}</span>
    <span class="organizer">{{ event.organizer }}</span>
  </div>
</template>

<style scoped>
.event-info {
  text-align: right;
  font-size: 16px;
  margin-bottom: 10px;
}

.category,
.organizer {
  font-size: 16px;
}
</style>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
