<script setup lang="ts">
defineProps<{
  alt?: string;
  src: string;
  width?: string;
  height?: string;
}>();
</script>

<template>
  <img :alt="alt" :src="src" :width="width || '600'" :height="height || '400'"
    class="rounded-lg shadow-lg max-w-[85%]" />
</template>
