<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/aigua">Embassaments</RouterLink> |
      <RouterLink to="/compra">Llista Compra</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
// res, només setup
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
</style>
