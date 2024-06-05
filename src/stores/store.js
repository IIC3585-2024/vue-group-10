import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAppStore = defineStore("app", () => {
  const apiUrl = "https://developer.nps.gov/api/v1";
  const apiKey = "PJ4z6sTPajlvaClquOjSQpcDuOSUbIfKv6gx3UDx";

  const activities = ref({ data: [] });

  async function getActivities() {
    try {
      console.log("asking for api");
      const response = await axios({
        method: "get",
        url: `${apiUrl}/activities`,
        params: {
          api_key: apiKey,
        },
      });
      activities.value = response.data;
      return activities.value;
    } catch (error) {
      console.error(error);
    }
  }

  return { activities, getActivities };
});
