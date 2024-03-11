<script setup lang="ts">
useSeoMeta({
  title:'Absend Management - All Articles',
  ogTitle:'Absend Management - All Articles',
})
const { data: articles} = await useFetch('/api/articles')
</script>

<template>
 <ArticleList v-if="articles" :articles="articles"/>
</template>
