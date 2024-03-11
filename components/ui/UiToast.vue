<script setup lang="ts">
const store = useUiStore();
const { toast } = storeToRefs(store);
const { clearToast } = store;
</script>

<template>
  <UAlert
    v-if="store.toast"
    :color="toast.type === 'success' ? 'primary' : 'rose'"
    variant="solid"
    :title="toast.title"
    :description="toast.message"
    :close-button="{
      icon: 'i-heroicons-x-mark-20-solid',
      color: 'gray',
      variant: 'link',
      padded: false,
    }"
    class="my-4 fixed right-0 w-[300px]  bottom-0"
    @close="store.clearToast"
  />
</template>
