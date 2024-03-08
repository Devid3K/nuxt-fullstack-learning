<script setup lang="ts">
import type {RegisterInput} from '~/server/api/auth/register.post';

async function handleSignUP(credentials: RegisterInput){
    await useFetch('/api/auth/register',{
        method: 'POST',
        body: credentials
    })
}
</script>

<template>
    <AuthForm kind="register" @submit="handleSignUP"/>
</template>