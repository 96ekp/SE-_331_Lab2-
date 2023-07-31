<template>
  <div id="app">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/categories">Categories</RouterLink>|
      <router-link to="/students">Students</router-link> -->

        <RouterLink :to="{ name: 'event-list' }">Home</RouterLink> |
        <RouterLink :to="{ name: 'about' }">About</RouterLink> |
        <RouterLink :to="{ name: 'categories' }">Categories</RouterLink> |
        <RouterLink :to="{ name: 'students' }">Students</RouterLink>
      </nav>
    </header>
    <!-- <RouterView /> -->
    <!-- Page size selection -->
    <div class="page-size-selection">
      <!-- Label and dropdown for selecting page size -->
      <label for="pageSize">Page Size:</label>
      <select v-model="pageSize" @change="updatePageSize">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">3</option>
        <option value="5">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>

    <!-- Render the EventListView component with the selected page size -->
    <!-- <EventListView :pageSize="pageSize" /> -->
    <router-view :pageSize="pageSize" />
    <!-- The EventListView component will be rendered inside the router-view element, and the page size selection dropdown will appear on top of it. -->
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
h4 {
  font-size: 20px;
}
/* Add your styles here */
.page-size-selection {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  margin-right: 5px;
}
</style>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useMassageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMassageStore()
const { message } = storeToRefs(store)

// Reactive variable to store the page size
const pageSize = ref(2)

// Function to update the page size
const updatePageSize = () => {
  // Fetch the selected page size from the dropdown and update the reactive variable
  // You can also fetch the page size from any other source (e.g., query parameter)
  const selectedPageSize = parseInt(pageSize.value)
  pageSize.value = selectedPageSize
}
</script>
