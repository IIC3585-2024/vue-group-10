<template>
  <div class="content">
    <h1 class="font-serif text-3xl">Welcome to OutdoorLife!</h1>
    <p class="font-serif mt-5">Explore the great outdoors with our app.</p>
    <RouterLink class="router-link" to="/parks">Check our parks!</RouterLink>
  </div>
</template>

<style scoped>
.router-link {
  background-color: lightblue;
  border: solid;
  border-width: 2px;
  border-radius: 5px;
}
</style>
