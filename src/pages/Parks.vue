<template>
  <div class="content">
    <h1>Parks</h1>
    <p>Check out our parks!</p>

    <p v-if="loadingParks">Loading...</p>
    <div class="parks-container">
      <ParkButton v-for="park in store.parks.data" :key="park.id" :park="park" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "../stores/store";

import ParkButton from "../components/ParkButton.vue";

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

<style scoped>
.parks-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
