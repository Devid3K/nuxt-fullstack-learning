<script setup lang="ts">
import  type { FormSubmitEvent} from '#ui/types'
import type { ProfileInput } from "~/server/api/auth/profile.patch";
import { profileInputValidator } from "~/validators/auth";

interface Props {
  profile?: {
    id: string;
    email: string;
    name: string;
    role: "ADMIN" | "MANAGER" | "MEMBER";
    image: string;
  };
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "submit", profile: ProfileInput): void;
}>();

const state = reactive<ProfileInput>({
  ...props.profile,
  password: undefined,
  image: undefined,
});
const schema = profileInputValidator;
function onSubmit(event: FormSubmitEvent<ProfileInput>) {
  emit("submit", event.data);
}
const currentAvatar = props.profile?.image ? useGetImagePath(props.profile.image) : undefined
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 max-w-lg mx-auto"
    @submit="onSubmit"
  >
    <h1 class="text-center text-3xl font-bold">Profile</h1>
    <UDivider/>
    <UFormGroup  label="Image" name="image">
      <UiImageUploader :image="currentAvatar" @submit="state.image = $event"/>
    </UFormGroup>


    <UFormGroup  label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <div class="flex justify-between items-center">
      <UButton to="/leaves" type="submit"> Edit Profile </UButton>

    </div>
  </UForm>
</template>
