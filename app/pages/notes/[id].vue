<script setup lang="ts">
  import {getNoteById} from "~/repositories/notes";

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
  <h1>
    Individual Note #{{ note.id }}
  </h1>
  <p>
    {{ note.content }}
  </p>
</template>
