<template>
  <div>
    <p v-if="status === 'pending'">Carregando produtos</p> 

    <div class="grid grid-cols-4 gap-5" v-else>           
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "products",
});

const { data: products, status } = await useLazyFetch<IProduct[]>(
  "https://fakestoreapi.com/products",
);

useHead({
  title: "Nuxt DoJo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>
