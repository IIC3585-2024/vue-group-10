<template>
  <div class="park-button" :key="park.key">
    <img :src="park.images[0].url" class="park-thumbnail m-2" alt="Park Thumbnail" />
    <p>{{ park.fullName }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["park"]);
</script>

<style scoped>
.park-button {
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  text-align: center;
  width: 40%;
  max-height: 20vh;
  display: flex;
  align-items: center;
}

.park-thumbnail {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
