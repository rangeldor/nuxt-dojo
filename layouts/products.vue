<template>
  <div>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto flex justify-between p-4">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto flex justify-between border-t-2 p-4">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
