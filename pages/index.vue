<script setup lang="ts">
const text = ref('')

</script>
<template>
<p class="text-rose-500">{{  text }}</p>
<input v-model="text" type="text" class="bg-rose">
</template>
    


