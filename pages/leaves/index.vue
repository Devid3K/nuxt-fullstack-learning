<script setup lang="ts">
const { leaves } = defineProps<{ leaves: LeavList }>()
import { LeaveList } from "~/server/api/leaves.get"
import { LeaveStatus } from "@prisma/client"


</script>

<template>
 <h1 class="text-center text-4xl my-4">All leaves</h1>
 <section class="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
   <UCard v-for="leave of leaves" :key="leave.id" class="cursor-ponter">
      <template #header>
         <UBadge>{{  leave.status }}</UBadge>
      </template>
   </UCard>
 </section>
</template>
