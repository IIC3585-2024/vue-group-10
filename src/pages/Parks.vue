<template>
  <div class="content">
    <h1>Parks</h1>
    <p>Check out our parks!</p>

    <p v-if="loadingParks">Loading...</p>

    <div>
      <button
        class="page-button"
        :class="{ 'selected-page': store.currentPage === n }"
        @click="changePage(n)"
        v-for="n in store.nPages"
        :key="n"
      >
        {{ n }}
      </button>
    </div>

    <div class="parks-container">
      <ParkButton
        v-for="park in store.parks[store.currentPage]"
        :key="park.id"
        :park="park"
        @click="selectedPark = park"
      />
    </div>
  </div>

  <ParkDetails v-if="selectedPark" :park="selectedPark" @close="selectedPark = null" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAppStore } from "../stores/store";

import ParkButton from "../components/ParkButton.vue";
import ParkDetails from "../components/ParkDetails.vue";

const store = useAppStore();
const loadingParks = ref(true);
const selectedPark = ref(null);

onMounted(async () => {
  changePage(1);
});

async function changePage(n) {
  loadingParks.value = true;
  store.currentPage = n;
  if (store.parks[store.currentPage]) {
    loadingParks.value = false;
  } else {
    await store.fetchParks();
    loadingParks.value = false;
  }
}
</script>

<style scoped>
.page-button {
  margin: 0.5rem;
  border: solid;
  width: 30px;
  border-width: 1px;
  border-radius: 5px;
}

.selected-page {
  background-color: lightblue;
}

.parks-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
