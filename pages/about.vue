<template>
  <div>
    <h2>About</h2>

    {{ data }}
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'About',
  meta: [{ name: 'description', content: 'About page' }]
})

const { data } = await useFetch('/api/currency/EUR')
</script>
