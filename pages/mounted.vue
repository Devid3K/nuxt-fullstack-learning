<script setup lang="ts">
const title = ref('Nuxt')

watchEffect(() => {
    document.title = title.value
})
</script>

<template>
    <div >
      <button @click="title = 'lorem'"> update title</button> 
    </div>
</template>
    

