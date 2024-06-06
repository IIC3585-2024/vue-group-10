import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAppStore = defineStore("app", () => {
  const apiUrl = "https://developer.nps.gov/api/v1";
  const apiKey = "PJ4z6sTPajlvaClquOjSQpcDuOSUbIfKv6gx3UDx";

  const parks = ref({ data: [] });

  async function getParks() {
    try {
      const response = await axios({
        method: "get",
        url: `${apiUrl}/parks`,
        params: {
          api_key: apiKey,
        },
      });
      parks.value = response.data;
      return parks.value;
    } catch (error) {
      console.error(error);
    }
  }

  return { parks, getParks };
});
