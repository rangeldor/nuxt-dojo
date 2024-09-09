<template>
  <div class="mx-w-sm card mx-auto mt-7 text-center">
    <p class="mt-7 text-7xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error?.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go to home...</button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps({
  error: Object as () => NuxtError,
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>
