<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function handleRedirectToProductsPage() {
  router.push("/products");
}
</script>

<template>
  <main class="min-h-screen bg-red-200 text-red-800">
    <header class="w-full bg-red-300 p-4">
      <h1 class="text-3xl font-bold">Home Page</h1>
    </header>

    <section class="p-8">
      <p class="mb-4 text-2xl">Info text</p>

      <button
        type="button"
        @click="handleRedirectToProductsPage"
        class="cursor-pointer rounded-lg border-0 bg-red-300 p-2 text-lg font-bold outline-2 outline-red-800"
      >
        Go to products page
      </button>
    </section>
  </main>
</template>

<style scoped></style>
