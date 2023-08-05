<template>
  <div class="event-list">
    <div class="category">{{ event.category }}</div>
    <div class="organizer">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>
.event-list {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 10px;
}

.category,
.organizer {
  font-size: 20px;
  margin-right: 20px;
}

.category {
  flex: 1;
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
