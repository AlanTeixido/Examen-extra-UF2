<template>
    <section>
      <h2>Dades de l'embassament: {{ nomEmbassament }}</h2>
  
      <div v-if="loading">Carregant dades...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
  
      <ul v-else>
        <li v-for="(item, index) in dades" :key="index">
          <p><strong>Data:</strong> {{ item.dia }}</p>
          <p><strong>Volum embassat:</strong> {{ item.volum_embassat }} hm³</p>
          <p><strong>Percentatge:</strong> {{ item.percentatge_volum_embassat }}%</p>
          <p><strong>Nivell absolut:</strong> {{ item.nivell_absolut }}</p>
          <p><strong>Capacitat total:</strong> {{ calcularCapacitat(item) }} hm³</p>
          <hr />
        </li>
      </ul>
  
      <button @click="tornar">Tornar</button>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  
  // 👇 rep la prop de forma clara
  const props = defineProps(['nomEmbassament'])
  
  const router = useRouter()
  const dades = ref([])
  const loading = ref(true)
  const error = ref(null)
  
  const fetchDetall = async () => {
    try {
      const query = `SELECT dia,estaci,nivell_absolut,percentatge_volum_embassat,volum_embassat WHERE estaci='${props.nomEmbassament}' ORDER BY dia DESC LIMIT 100`
      const url = `https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json?$query=${encodeURIComponent(query)}`
      const response = await axios.get(url)
      dades.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }
  
  const calcularCapacitat = (item) => {
    const percentatge = parseFloat(item.percentatge_volum_embassat)
    const volum = parseFloat(item.volum_embassat)
    return (!isNaN(percentatge) && percentatge !== 0)
      ? (volum / (percentatge / 100)).toFixed(2)
      : 'No disponible'
  }
  
  const tornar = () => {
    router.push('/aigua')
  }
  
  onMounted(fetchDetall)
  </script>
  