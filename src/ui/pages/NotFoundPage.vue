<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function handleRedirectToHomePage() {
  router.push("/");
}
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-red-200 text-red-800"
  >
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold">404</h1>
      <p class="mb-8 text-3xl">Sorry, this page was not found</p>

      <button
        type="button"
        @click="handleRedirectToHomePage"
        class="cursor-pointer rounded-lg border-0 bg-red-300 p-2 text-lg font-bold outline-2 outline-red-800"
      >
        Go to home page
      </button>
    </div>
  </main>
</template>

<style scoped></style>
