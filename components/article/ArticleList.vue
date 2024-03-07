<script setup lang="ts">

import UidataTable from "./UidataTable.vue";
import type {Column} from '~/components/article/UidataTable.vue';

interface ArticleItem {
    id:number
    title:string
    excerpt: string
}
const {data: articles} = await useFetch('/api/articles')
const columns: Column<ArticleItem>[] = [
    { name:'ID', field:'id'},
    { name:'Title', field:'title'},
    { name:'Excerpt', field:'excerpt'},
]
</script>

<template>
  <div>
    <UidataTable @trigger="console.log($event)" :columns="columns" :rows="articles"/>
  </div>
</template>
