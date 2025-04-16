<script setup>
</script>

<template>
    <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="/">LAB - WikiCountries</a>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    width: 100%;
    height: 56px;
    padding: 8px 16px;
    top: 0;
    left: 0;
    margin: 0 0 16px;
    background-color: #007bff;  
}

a {
    text-decoration: none;
    color: white
}

.container {
    width: 100%;
    height: 40px;
    padding: 0 16px;
    display: flex;
    justify-content: start;
    align-items: center;
}

.navbar-brand {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
}
</style>