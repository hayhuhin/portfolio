<script setup>
import AboutMe from './components/AboutMe.vue'
import NavigationBar from './components/NavigationBar.vue';
</script>




<template>
  <div class="bg-ruby-500">
    <header>
      <NavigationBar />  
    </header>
    <h1>test</h1>


    <AboutMe />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
