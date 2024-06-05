import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const apiUrl = ref("https://developer.nps.gov/api/v1");
  const apiKey = ref("PJ4z6sTPajlvaClquOjSQpcDuOSUbIfKv6gx3UDx");

  return { apiUrl, apiKey };
});
