<script setup lang="ts">
interface Props {
  options: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-between bg-tertiary items-center">
    <Logo class="w-1/10 ml-5 w-[106px] h-[14px]" />
    <div class="flex items-center justify-center gap-2 p-3 text-sm">
      <RouterLink
        v-for="(option, index) in options"
        :key="index"
        :class="$route.path === '/' ? 'bg-primary' : 'bg-secondary'"
        class="p-1 px-3 text-white"
        to="/"
      >
        {{ option }}
      </RouterLink>
    </div>
  </div>
</template>
