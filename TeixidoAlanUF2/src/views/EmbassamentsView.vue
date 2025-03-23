<template>
    <section>
      <h2>Llistat d'embassaments</h2>
  
      <div v-if="loading">Carregant dades...</div>
      <div v-else-if="error">Error carregant les dades: {{ error.message }}</div>
  
      <ul v-else>
        <li v-for="emb in embassaments" :key="emb.estaci">
          <RouterLink :to="`/aigua/${encodeURIComponent(emb.estaci)}`">
            {{ emb.estaci }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { useEmbassaments } from '@/composables/useEmbassaments'
  
  const { embassaments, loading, error } = useEmbassaments()
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  </style>
  