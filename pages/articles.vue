<script setup lang="ts">
const { data: articles} = await useFetch('/api/articles')
</script>

<template>
 <ArticleList v-if="articles" :items="articles"  @trigger="console.log($event)"/>
</template>
