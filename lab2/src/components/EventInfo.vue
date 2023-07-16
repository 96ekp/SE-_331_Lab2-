<template>
  <div class="event-info">
    <div class="category">{{ event.category }}</div>
    <div class="organizer">{{ event.organizer }}</div>
  </div>
</template>

<style scoped>
.event-info {
  text-align: right;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: 10px;
}

.category,
.organizer {
  font-size: 16px;
  text-align: right;
}
/* .title-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.title {
  font-weight: bold;
}
.content-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
} */
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
