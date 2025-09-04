<script setup lang="ts">
  import { getNotes } from "~/repositories/notes";

  const notes = getNotes();
</script>
<template>
  <section class="p-6 sm:p-10">
    <div class="mb-8 text-center">
      <h1 class="text-4xl sm:text-5xl font-black tracking-wide text-neutral-900">
        Barber's Ledger
      </h1>
      <p class="mt-2 text-neutral-600">Where every cut has a note and every note tells a story.</p>
    </div>

    <div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
      <NuxtLink
        v-for="note in notes"
        :key="note.id"
        :to="`/notes/${note.id}`"
        class="group block rounded-xl border-4 border-neutral-900/70 bg-amber-50 hover:bg-amber-100 transition shadow-[0_6px_0_0_rgba(0,0,0,0.6)] hover:shadow-[0_10px_0_0_rgba(0,0,0,0.6)]">
        <div class="p-6">
          <div class="flex items-center gap-3">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-red-700 via-white to-blue-700 ring-2 ring-neutral-900/50 shadow"></span>
            <h2 class="text-xl font-extrabold text-neutral-900 group-hover:text-neutral-950">
              {{ note.title }}
            </h2>
          </div>
          <p class="mt-3 text-neutral-700 line-clamp-2">{{ note.content }}</p>
          <div class="mt-4 flex items-center justify-between text-sm text-neutral-600">
            <span class="italic">Note #{{ note.id }}</span>
            <span class="uppercase tracking-wider text-red-700">Read</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
