<script setup lang="ts">
import Navbar from '~/blocks/Navbar.vue'

</script>

<template>
  <div class="min-h-screen w-full flex flex-col">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>
