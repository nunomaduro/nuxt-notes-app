<template>
  <div class="min-h-screen bg-[repeating-linear-gradient(45deg,theme(colors.neutral.100)_0,theme(colors.neutral.100)_10px,theme(colors.white)_10px,theme(colors.white)_20px,theme(colors.red.100)_20px,theme(colors.red.100)_30px,theme(colors.white)_30px,theme(colors.white)_40px,theme(colors.blue.100)_40px,theme(colors.blue.100)_50px)] bg-fixed">
    <header class="border-b-8 border-red-700/80 bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-xl">
      <nav class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-red-700 via-white to-blue-700 ring-2 ring-white shadow-md group-hover:scale-105 transition"></span>
          <span class="text-2xl font-black tracking-wide text-white drop-shadow-md">
            Old Barber Notes
          </span>
        </NuxtLink>
        <ul class="flex items-center gap-6">
          <li>
            <NuxtLink to="/" class="text-white/90 hover:text-white font-semibold tracking-wide uppercase text-sm border-b-2 border-transparent hover:border-white transition">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-white/90 hover:text-white font-semibold tracking-wide uppercase text-sm border-b-2 border-transparent hover:border-white transition">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="rounded-xl border-4 border-neutral-900/80 shadow-[0_10px_0_0_rgba(0,0,0,0.6)] bg-neutral-50/95 backdrop-blur">
        <NuxtPage />
      </div>
    </main>

    <footer class="pb-10 text-center text-neutral-400">
      <p class="text-sm">© {{ new Date().getFullYear() }} Old Barber Notes — Crafted with care</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>