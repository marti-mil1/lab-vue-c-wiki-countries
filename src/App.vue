<script setup>
  import { RouterView } from 'vue-router';
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="app">
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  margin: 0;

}
</style>