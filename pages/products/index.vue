<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/interface/product'

definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch<IProduct[]>(
  "https://fakestoreapi.com/products",
);

useHead({
  title: "Nuxt Dogo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>
