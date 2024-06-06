<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.path">
        <RouterLink class="router-link" :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const links = [
  { path: "/", name: "Home" },
  { path: "/parks", name: "Parks" },
  { path: "/about", name: "About" },
];
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-left: 20px;
}

.router-link {
  color: white;
  text-decoration: none;
}
</style>
