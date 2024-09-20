<template>
  <div class="mx-w-sm card mx-auto mt-7 text-center">
    <p class="mt-7 text-7xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error?.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go to home...</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useError, clearError } from '#app' // Import useError and clearError composables
import type { NuxtError } from '#app' // Import the NuxtError type

// Get the current error from the composable
const rawError = useError() // rawError is Ref<NuxtError | null | undefined>

// Create a computed property to handle null or undefined errors
const error = computed(
  () =>
    rawError.value ||
    ({ statusCode: 500, message: 'An unexpected error occurred' } as NuxtError)
)

// Handle clearing the error and redirecting to the home page
const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>
