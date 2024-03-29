<script setup lang="ts" generic="K extends 'create' | 'edit'">
import { z } from "zod";
import { updateArticleInputValidator, createArticleInputValidator } from "~/validators/articles";
import type { FormSubmitEvent } from "#ui/types";
import type { CreateArticleInput } from "~/server/api/admin/articles/index.post";
import type { UpdateArticleInput } from "~/server/api/admin/articles/[slug].patch";
import type { ArticleDetails } from "~/server/api/articles/[slug].get";

interface Props {
  kind: K
  article?: ArticleDetails
}
type EmitData = K extends "create" ? CreateArticleInput : UpdateArticleInput;

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "submit", credentials: EmitData): void;
}>();
const title = useCapitalize(props.kind);
const isCreateFrom = props.kind === "create";
const state = reactive<UpdateArticleInput>(isCreateFrom ?{
    title: undefined,
    excerpt: undefined,
    content: undefined,
    image: undefined,
}: {...props.article, image: undefined}) 
const schema =
  props.kind === "create" ? createArticleInputValidator : updateArticleInputValidator;

function onSubmit(event: FormSubmitEvent<EmitData>) {
  emit("submit", event.data);
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 max-w-lg mx-auto"
    @submit="onSubmit"
  >
    <h1 class="text-center text-3xl font-bold">{{ title }}</h1>

    <UFormGroup  label="Image" name="image">
      <UiImageUploader :image="props.article?.image" @submit="state.image = $event"/>
    </UFormGroup>


    <UFormGroup  label="Title" name="title">
      <UInput v-model="state.title" />
    </UFormGroup>

    <UFormGroup label="Excerpt" name="excerpt">
      <UTextarea v-model="state.excerpt" />
    </UFormGroup>

    <UFormGroup label="Content" name="content">
      <UTextarea v-model="state.content" />
    </UFormGroup>


      <UButton type="submit"> {{ title }} </UButton>

  </UForm>
</template>
