<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params

const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch<IProduct>(uri)

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true
  })
}

definePageMeta({
  layout: 'products'
})
</script>
