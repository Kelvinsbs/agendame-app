<script setup>
  import { useMeStore } from '@/stores/me';
  const meStore = useMeStore();

</script>
<template>
  <div>
    Dashboard
    <br><br>
    <pre>{{ meStore.user }}</pre>
    <br>
    Ta logado ai? {{ meStore.isLoggedIn }}
  </div>
</template>
