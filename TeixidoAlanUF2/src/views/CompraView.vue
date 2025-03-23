<template>
    <section>
      <h2>Llista de la compra</h2>
  
      <form @submit.prevent="afegirProducte">
        <input v-model="nouProducte" placeholder="Producte..." required />
  
        <label>
          <input type="checkbox" v-model="prioritari" />
          Prioritari
        </label>
  
        <label>
          <input type="checkbox" v-model="comprat" />
          Comprat
        </label>
  
        <button type="submit">Afegir</button>
      </form>
  
      <ul v-if="llista.length">
        <li
          v-for="item in llistaRevertida"
          :key="item.id"
          :style="getItemStyle(item)"
        >
          {{ item.label }}
        </li>
      </ul>
  
      <p v-else>No hi ha cap producte afegit.</p>
    </section>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue'
  
  const nouProducte = ref('')
  const prioritari = ref(false)
  const comprat = ref(false)
  
  const llista = reactive([])
  let id = 1
  
  const afegirProducte = () => {
    llista.push({
      id: id++,
      label: nouProducte.value,
      comprat: comprat.value,
      altaPrioritat: prioritari.value
    })
  
    // Reset dels inputs
    nouProducte.value = ''
    comprat.value = false
    prioritari.value = false
  }
  
  // Mostrar l’últim afegit a dalt
  const llistaRevertida = computed(() => [...llista].reverse())
  
  // Estils segons estat
  const getItemStyle = (item) => {
    const color = item.altaPrioritat && !item.comprat ? 'red' : item.comprat ? 'green' : ''
    const textDecoration = item.comprat ? 'line-through' : 'none'
    return { color, textDecoration }
  }
  </script>
  
  <style scoped>
  form {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 0.5rem 0;
  }
  </style>
  