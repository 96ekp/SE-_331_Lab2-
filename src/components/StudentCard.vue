<!-- // creat studdents card to display student name, surname and gpa -->

<template>
  <div class="student-card">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.student-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
