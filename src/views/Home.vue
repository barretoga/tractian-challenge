<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCompany } from '~/stores/Companies';

const companyStore = useCompany()
const companies = computed(() => {
  return companyStore.companies
})
const company = computed(() => {
  return companyStore.company
})

</script>

<template>
  <div class="bg-white rounded p-2">
    <div class="w-full flex justify-between">
      <div class="flex gap-2 items-center">
        <h1 class="text-xl font-semibold">
          Ativos 
        </h1>
        <span class="text-3xl font-semibold">
          /
        </span>
        <span class="text-gray-700">
          {{ company }}
        </span>
      </div>
      <div class="flex gap-x-2">
        
      </div>
    </div>
  </div>
</template>
