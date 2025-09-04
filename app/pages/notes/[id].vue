<script setup lang="ts">
  import { getNoteById } from "~/repositories/notes";

  const route = useRoute();
  const id = Number(route.params.id);
  const note = getNoteById(id);

  if (note === null) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found'
    })
  }
</script>
<template>
  <section class="p-6 sm:p-10">
    <div class="mb-6">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-blue-800 hover:text-blue-900">
        ← Back to Ledger
      </NuxtLink>
    </div>

    <article class="rounded-xl border-4 border-neutral-900/80 bg-amber-50 shadow-[0_10px_0_0_rgba(0,0,0,0.6)]">
      <header class="p-6 sm:p-8 border-b-4 border-neutral-900/50 bg-gradient-to-b from-amber-100 to-amber-50">
        <div class="flex items-center gap-3">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-red-700 via-white to-blue-700 ring-2 ring-neutral-900/50 shadow"></span>
          <div>
            <h1 class="text-3xl font-black text-neutral-900">{{ note.title }}</h1>
            <p class="text-neutral-600 italic">Entry No. {{ note.id }}</p>
          </div>
        </div>
      </header>
      <div class="p-6 sm:p-8">
        <p class="text-neutral-800 leading-relaxed">
          {{ note.content }}
        </p>
      </div>
      <footer class="px-6 sm:px-8 py-4 border-t-4 border-neutral-900/50 bg-amber-100/60 flex items-center justify-between text-sm text-neutral-700">
        <span class="uppercase tracking-widest">Barber Shop Notes</span>
        <div class="flex items-center gap-2">
          <span class="inline-block h-3 w-3 rounded-full bg-red-700"></span>
          <span class="inline-block h-3 w-3 rounded-full bg-white border border-neutral-900/50"></span>
          <span class="inline-block h-3 w-3 rounded-full bg-blue-700"></span>
        </div>
      </footer>
    </article>
  </section>
</template>
