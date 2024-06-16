<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useCompany } from '~/stores/Companies';
import Navbar from '~/blocks/Navbar.vue'

const companyStore = useCompany()
const { execute: getCompanies } = companyStore.getCompanies()
const companies = computed(() => {
  return companyStore.companies.map((item) => {
    return item.name
  })
})

onMounted(() => {
  getCompanies()
})
</script>

<template>
  <div class="min-h-screen w-full flex flex-col">
    <Navbar :options="companies"/>
    <main class="h-full min-h-screen items-start bg-slate-200 p-2">
      <router-view />
    </main>
  </div>
</template>
