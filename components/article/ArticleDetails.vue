<script setup lang="ts">
import type { ArticleDetails } from '~/server/api/articles/[slug].get'

const { slug } = defineProps<{ slug: string }>()
const { data: article} = useFetch(`/api/articles/${slug}`)
const image = useGetImagePath(article.value?.image ?? '/assets/images/pt.png')
useSeoMeta({
  title: article.value?.title,
  ogTitle:article.value?.title,
  description:article.value?.excerpt,
  ogDescription:article.value?.excerpt,
  ogImage: image
})
</script>

<template>
   <template v-if="article">
    
    <NuxtImg  :src="article.image" class="h-[300px] flex justify-center items-center m-auto mt-8">
        
    </NuxtImg>
    <h1 class="text-4xl font-bold">{{ article.title }}</h1>
    <p class="my-4">{{ article.content }}</p>
  
   </template>
    
</template>