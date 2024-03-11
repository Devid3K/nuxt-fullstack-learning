<script setup lang="ts">

const { data: user, status,signOut} = useAuth()
const isAdmin = computed(() => ['ADMIN', 'MANAGER'].includes(user.value?.role))
const authMenuItems = [
    [
        {
        label: 'Profile',
        icon: 'i-el-adult',
        click(){
            navigateTo('/auth/profile')
        }
    }
    ],
    [
        {
            label:'Logout',
            icon:'i-el-remove',
            click(){
                signOut({ redirect:true,callbackUrl:'/auth/login'})
            }
        }
    ]
]

const { data: contentNavigation  } = useAsyncData('navigation', () => fetchContentNavigation()) 
const currentAvatar = computed(() => user.value?.image ? useGetImagePath(user.value?.image) : undefined)
</script>

<template>
    <header class="flex h-16 border-b p-4 items-center">
    <ULink to="/" active-class="text-primary" class="p-4 ">
        <img src="../../public/favicon.ico"></img>
    </ULink>
    <ULink v-if="isAdmin" to="/admin" active-class="text-primary" class="p-4 ">
        Admin

    </ULink>
    <ULink to="/leaves" active-class="text-primary" class="p-4 ">
        Leaves

    </ULink>
    <ULink to="/articles" active-class="text-primary" class="p-4 ">
        Articles

    </ULink>
    <ULink to="/announcements" active-class="text-primary" class="p-4 ">
        Announcements
    </ULink>
    <ULink v-for="item of contentNavigation" :key="item.path" active-class="text-primary"
    class="mx-4" :to="item._path">{{ item.title }}</ULink>
    <UDropdown v-if="status === 'authenticated'" :items="authMenuItems" :ui="{ item:{ disabled:'cursor-text select-text'}}" :popper="{ placement:'bottom-start'}" class="mx-4 ml-auto">
        <UAvatar :src="currentAvatar">
            <template #item="{ item }">
                <span class="truncate">
                    {{ item.label }}
                </span>
                <UIcon  :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"></UIcon>
            </template>
        </UAvatar>
    </UDropdown>
    <ULink v-else to="/auth/login" active-class="text-primary" class="mr-4 ml-auto">
        Login
    </ULink>
    </header>
</template>