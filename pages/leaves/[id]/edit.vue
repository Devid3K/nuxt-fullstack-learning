<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
})
import type { UpdateLeaveInput } from '~/server/api/leaves/[id].patch';

const route = useRoute()
const id = +(route.params.id as string)
const {data: leave} =await useFetch(`/api/leaves/${id}`) 

async function handleSubmit(form: UpdateLeaveInput){
    await useFetch(`/api/leaves/${id}`,{ method:'PATCH', body: form})
}
</script>

<template>
    <LeaveForm v-if="leave" kind="edit" @submit="handleSubmit"/>
</template>