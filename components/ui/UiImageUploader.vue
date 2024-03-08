<script setup lang="ts">
const fileInput = ref<HTMLInputElement | null>(null)
</script>

<template>
    <input ref="fileInput" type="file" class="hidden">
    <UButton variant="outline" class="w-full my-4" @click="fileInput?.click">Select File</UButton>
  
</template>