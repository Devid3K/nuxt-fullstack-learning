<script setup lang="ts">
import type { AnnouncementDetails } from '~/server/api/announcements/[slug].get'

const { announcement } = defineProps<{announcement: AnnouncementDetails }>()
</script>

<template>
    <NuxtImg  class="h-[300px] w-full">
        <h1 class="text-4xl font-bold">{{ announcement.title }}</h1>
        <p class="my-4">{{ announcement.content }}</p>
    </NuxtImg>
    
</template>