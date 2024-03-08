<script setup lang="ts">
import type {RegisterInput} from '~/server/api/auth/register.post';

function handleSignIn(credentials: RegisterInput){
    console.log(credentials)
}
</script>

<template>
    <AuthForm kind="register" @submit="handleSignIn"/>
</template>