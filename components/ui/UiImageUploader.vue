<script setup lang="ts">
const { image } = defineProps<{ image?: string}>()
const previewImage = ref<string | undefined>(image)
const fileInput = ref<HTMLInputElement | null>(null)
const emit = defineEmits<{
    (e: 'submit',image: File): void
}>()
function uploadImage(event: HTMLInputEvent){
    const file = event.target.files?.[0]

    if(!file) return

    const image = URL.createObjectURL(file)
    previewImage.value = image
    emit('submit', file)
}
</script>

<template>
    <div class="p-6 rounded-md">
    <img v-if="previewImage" :src="previewImage" alt="h-[300px] w-full  rounded-md">
    <img v-else src="../../public/assets/images/No_image_available.svg.png" alt="error 404" class="h-[350px] w-full">
    <input ref="fileInput" type="file" class="hidden " @input="uploadImage($event as HTMLInputEvent)">
    </div>
    <UButton variant="outline" class="w-full my-4" @click="fileInput?.click()">Select File</UButton>
  
</template>