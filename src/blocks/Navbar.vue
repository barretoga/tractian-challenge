<script setup lang="ts">

</script>

<template>
  <div class="flex justify-between bg-tertiary items-center">
    <Logo class="w-1/10 ml-5 w-[106px] h-[14px]" />
    <div class="flex items-center justify-center gap-2 p-3 text-sm">
      <RouterLink
        :class="$route.path === '/' ? 'bg-primary' : 'bg-secondary'"
        class="p-1 px-3 text-white"
        to="/"
      >
        Apex Unit
      </RouterLink>
      <RouterLink
        :class="$route.path === '/aa' ? 'bg-primary' : 'bg-secondary'"
        class=" p-1 px-3 text-white"
        to="/"
      >
        Tobias Unit
      </RouterLink>
      <RouterLink
        :class="$route.path === '/aaa' ? 'bg-primary' : 'bg-secondary'"
        class="p-1 px-3 text-white"
        to="/"
      >
        Jaguar Unit
      </RouterLink>
    </div>
  </div>
</template>
