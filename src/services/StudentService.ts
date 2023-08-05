import axios from 'axios'

// get the students information given here (https://dv-student-backend-2019.appspot.com/students).
const apiClient = axios.create({
  baseURL: 'https://dv-student-backend-2019.appspot.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStudents() {
    return apiClient.get('/students')
  }
}
