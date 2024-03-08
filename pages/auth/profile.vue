<script setup lang="ts">
import type { ProflieInput } from '~/server/api/auth/profile.patch';

function handleSubmit(form: ProflieInput){
    console.log(form)
}
</script>

<template>
    <AuthProfile @submit="handleSubmit"/>
        
  
</template>