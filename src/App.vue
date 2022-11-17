<script setup lang="ts"></script>

<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">home</RouterLink>
      |
      <RouterLink to="/button">button</RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
