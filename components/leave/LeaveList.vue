<script setup lang="ts">
import type { LeaveStatus } from "@prisma/client";
import type { LeaveList } from "~/server/api/leaves/index.get";

const { leaves } = defineProps<{ leaves: LeaveList }>();

function statusColor(status: LeaveStatus) {
  switch (status) {
    case "APPROVED":
      return "primary";
    case "PENDING":
      return "yellow";
    case "REJECTED":
      return "rose";
  }
}
</script>
<template>
  <div class="p-4">
    <h1 class="text-4xl mb-4 ml-4">All Leaves</h1>
    <section>
      <UCard
        v-for="leave of leaves"
        :key="leave.id"
        class="cursur-pointer my-4"
      >
        <template #header>
          <div class="flex justify-between items-center">
            <UBadge :color="statusColor(leave.status)"
              >{{ leave.status }}
            </UBadge>
            <UButton
              variant="ghost"
              icon="i-heroicons-pencil-square"
              :to="`/leaves/${leave.id}/edit`"
            ></UButton>
          </div>
        </template>
        <p>{{ leave.reason }}</p>
        <template v-if="leave.rejectionReason" #footer>{{
          leave.rejectionReason
        }}</template>
      </UCard>
    </section>
    <UButton
      icon="i-heroicons-plus"
      :ui="{ rounded: 'rounded-full' }"
      class="fixed bottom-4 right-4"
      to="/leaves/new"
    ></UButton>
  </div>
</template>
