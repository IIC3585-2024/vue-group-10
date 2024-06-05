<template>
  <div class="content">
    <h1>Activities</h1>
    <p>Check out our activities!</p>

    <p v-if="loadingActivities">Loading...</p>
    <ul v-else>
      <li>Loaded activities</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useAppStore } from "../stores/store";

const store = useAppStore();
const loadingActivities = ref(true);

onMounted(async () => {
  if (store.activities.data.length) {
    loadingActivities.value = false;
  } else {
    await store.getActivities();
    loadingActivities.value = false;
  }
});
</script>
