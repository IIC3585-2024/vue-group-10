<template>
  <div class="content">
    <h1>Parks</h1>
    <p>Check out our parks!</p>

    <p v-if="loadingParks">Loading...</p>
    <ul v-else>
      <li>Loaded parks</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "../stores/store";

const store = useAppStore();
const loadingParks = ref(true);

onMounted(async () => {
  if (store.parks.data.length) {
    loadingParks.value = false;
  } else {
    await store.getParks();
    loadingParks.value = false;
  }
});
</script>
