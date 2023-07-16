<template>
  <div class="student-view">
    <h1>Students</h1>
    <div class="student-list">
      <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'
import StudentCard from '@/components/StudentCard.vue'

const students = ref([])

onMounted(async () => {
  try {
    const response = await StudentService.getStudents()
    students.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.student-view {
  margin-top: 20px;
}

.student-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
