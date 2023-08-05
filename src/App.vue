<template>
  <div id="app">
    <header class="max-h-screen leading-normal">
      <h1 class="text-3xl font-bold">Saw Eh Kalane Phaung</h1>
      <div id="flashMessage" v-if="message" class="animate-yellowfade">
        <h4 class="text-lg">{{ message }}</h4>
      </div>
      <nav class="p-8">
        <!-- <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/categories">Categories</RouterLink>|
      <router-link to="/students">Students</router-link> -->

        <RouterLink
          :to="{ name: 'event-list' }"
          class="font-bold text-gray-700 hover:text-green-500"
          >Home</RouterLink
        >
        |
        <RouterLink :to="{ name: 'about' }" class="font-bold text-gray-700 hover:text-green-500"
          >About</RouterLink
        >
        |
        <RouterLink
          :to="{ name: 'categories' }"
          class="font-bold text-gray-700 hover:text-green-500"
          >Categories</RouterLink
        >
        |
        <RouterLink :to="{ name: 'students' }" class="font-bold text-gray-700 hover:text-green-500"
          >Students</RouterLink
        >
      </nav>
    </header>
    <!-- <RouterView /> -->
    <!-- Page size selection -->
    <!-- <div class="page-size-selection"> -->
    <!-- Label and dropdown for selecting page size -->
    <!-- <label for="pageSize">Page Size:</label>
      <select v-model="pageSize" @change="updatePageSize">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>
    </div> -->

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
/* Add your styles here */
.page-size-selection {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  margin-right: 5px;
}
@keyframes yellowfade {
  from {
    background: yellow;
  }

  to {
    background: transparent;
  }
}

.animate-yellowfade {
  animation: yellowfade 3s ease-in-out;
}
</style>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)

// Reactive variable to store the page size
const pageSize = ref(3)

// Function to update the page size
const updatePageSize = () => {
  // Fetch the selected page size from the dropdown and update the reactive variable
  // You can also fetch the page size from any other source (e.g., query parameter)
  const selectedPageSize = parseInt(pageSize.value)
  pageSize.value = selectedPageSize
}
</script>
