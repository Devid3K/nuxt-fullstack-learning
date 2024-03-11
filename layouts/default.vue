<script setup lang="ts">
import { useGetImagePath } from '~/composables/UseGetImagePath'

const image = useGetImagePath('/assets/images/pt.png')

useSeoMeta({
  title:'Absend Management',
  ogTitle:'Absend Management',
  description:'A website for managing leaves employee of absend',
  ogDescription:'A website for managing leaves employee of absend',
  ogImage: image,
})
</script>

<template>
  <UiHeader/>
<UContainer class=" my-4">
  <UiToast/>
<slot />
</UContainer>
</template>
