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
import { ref } from "vue";
import { useAppStore } from "../stores/store";
import axios from "axios";

const store = useAppStore();
const loadingActivities = ref(true);

axios({
  method: "get",
  url: `${store.apiUrl}/activities`,
  params: {
    api_key: store.apiKey,
  },
}).then((response) => {
  console.log(response.data);
  loadingActivities.value = false;
});
</script>
