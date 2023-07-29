<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id="app">
    <header>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/categories">Categories</RouterLink>|
      <router-link to="/students">Students</router-link> -->

        <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
        <RouterLink :to="{ name: 'about' }">About</RouterLink> |
        <RouterLink :to="{ name: 'categories' }">Categories</RouterLink> |
        <RouterLink :to="{ name: 'students' }">Students</RouterLink>
      </nav>
    </header>
    <RouterView />
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
</style>
