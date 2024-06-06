<template>
  <div class="park-button" :key="park.key">{{ park.name }}</div>
</template>

<script setup>
const props = defineProps({
  park: Object,
});
</script>

<style scoped>
.park-button {
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
}
</style>
