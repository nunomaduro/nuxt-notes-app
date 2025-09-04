<script setup lang="ts">
  import { getNotes } from "~/repositories/notes";

  const notes = getNotes();
</script>
<template>
  <h1 class="text-3xl font-bold underline">
     Notes App
  </h1>
  <ul v-for="note in notes" :key="note.id">
    <li>
      <NuxtLink :to="`/notes/${note.id}`">{{ note.title }}</NuxtLink>
    </li>
  </ul>
</template>
