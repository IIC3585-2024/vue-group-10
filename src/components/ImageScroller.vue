<template>
  <div class="image-scroller">
    <img :src="images[currentIndex].url" class="image" alt="Park Image" />
    <button class="prev control-button" @click="prevImage"><</button>
    <button class="next control-button" @click="nextImage">></button>
    <p>{{ currentIndex + 1 }} / {{ images.length }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["images"]);

const currentIndex = ref(0);

function prevImage() {
  if (currentIndex.value === 0) {
    currentIndex.value = props.images.length - 1;
  } else {
    currentIndex.value--;
  }
}

function nextImage() {
  if (currentIndex.value === props.images.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
}
</script>

<style scoped>
.image-scroller {
  position: relative;
  margin: 10px;
}

.image {
  border-radius: 5px;
  max-width: 50vw;
  max-height: 50vh;
}

.control-button {
  background-color: #333;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev {
  position: absolute;
  left: 0;
  top: 50%;
}

.next {
  position: absolute;
  right: 0;
  top: 50%;
}
</style>
