<script setup lang="ts">
import type { LeaveStatus } from '@prisma/client'
import type { LeaveList} from '~/server/api/leaves/index.get'

const { leaves } = defineProps<{ leaves: LeaveList}>()

function statusColor(status: LeaveStatus) {
    switch (status) {
        case 'APPROVED':
            return 'primary'
        case 'PENDING':
            return 'yellow'
        case 'REJECTED':
            return 'rose'
    }
}

</script>
<template>
<h1>All Leaves</h1>
<section>
    <UCard v-for="leave of leaves" :key="leave.id" class="cursur-pointer">
        <template #header>
            <UBadge>{{ leave.status }}
                
            </UBadge>
        </template>
        <p>{{ leave.reason }}</p>
        <template v-if="leave.rejectionReason" #footer>{{ leave.rejectionReason }}</template>
    </UCard>
</section>
<UButton icon="i-heroicons-plus" :ui="{ rounded: 'rounded-full'}" class="fixed bottom-4 right-4 " to="/leaves/new"></UButton>
</template>