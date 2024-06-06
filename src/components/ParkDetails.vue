<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal" @click="(event) => event.stopPropagation()">
      <h1 class="font-serif text-3xl">{{ park.fullName }}</h1>
      <div class="side-by-side">
        <img :src="park.images[0].url" class="park-image" alt="Park Image" />
        <div>
          <h2 class="text-3xl">{{ park.designation }}</h2>
          <br />
          <p class="text-3xl">States: {{ park.states }}</p>
          <br />
          <div class="description">
            <p>{{ park.description }}</p>
          </div>
        </div>
      </div>
      <br />
      <h2 class="text-3xl">Activities</h2>
      <p>{{ parkActivities }}</p>

      <br />
      <h2 class="text-3xl">Directions</h2>
      <p>{{ park.directionsInfo }}</p>
      <a v-if="park.directionsUrl" class="link" :href="park.directionsUrl">{{ park.directionsUrl }}</a>

      <br />
      <br />
      <button class="close-button" @click="close">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["park"]);
const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

console.log("park", props.park);

const parkActivities = props.park.activities
  .map((activity) => {
    return activity.name;
  })
  .join(", ");
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  max-height: 70%;
  max-width: 90%;
  border-radius: 5px;
  overflow-x: auto;
  overflow-y: auto;
  padding: 10px;
  text-align: center;
}

.side-by-side {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.park-image {
  border-radius: 5px;
  margin: 10px;
  max-width: 50vw;
  max-height: 50vh;
}

.close-button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.description {
  background-color: #dad5d5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.link {
  color: blue;
}
</style>
