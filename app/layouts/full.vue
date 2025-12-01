<script setup>
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="h-screen w-screen bg-cover bg-center bg-[url('assets/images/bg/bg.jpg')]">
    <UContainer class="flex flex-col items-center justify-center h-full w-full">
      <main class="position-relative mt-auto">
        <slot />
      </main>

      <Footer />
    </UContainer>
  </div>
</template>
