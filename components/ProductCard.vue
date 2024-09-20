<template>
  <div class="card text-center">
    <img :src="`${product.image}`" alt="product thumb" class="thumb" />
    <p class="m-4 truncate font-bold text-gray-500">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Deatils</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/interface/product'

const { product } = defineProps<{ product: IProduct }>()
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
