import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAppStore = defineStore("app", () => {
  const apiUrl = "https://developer.nps.gov/api/v1";
  const apiKey = "PJ4z6sTPajlvaClquOjSQpcDuOSUbIfKv6gx3UDx";

  const currentPage = ref(1);
  const nPages = ref(0);
  const parks = ref({});

  async function fetchParks() {
    try {
      const response = await axios({
        method: "get",
        url: `${apiUrl}/parks`,
        params: {
          api_key: apiKey,
          start: (currentPage.value - 1) * 50,
        },
      });

      nPages.value = Math.ceil(response.data.total / 50);
      parks.value[currentPage.value] = response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  return { parks, currentPage, nPages, fetchParks };
});
