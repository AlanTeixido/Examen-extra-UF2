import { ref, onMounted } from 'vue'
import axios from 'axios'

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json'

export function useEmbassaments() {
  const embassaments = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchEmbassaments = async () => {
    try {
      const response = await axios.get(API_URL)
      const data = response.data

      const nomsUnics = new Set()
      const unics = []

      for (const item of data) {
        if (!nomsUnics.has(item.estaci)) {
          nomsUnics.add(item.estaci)
          unics.push(item)
        }
      }

      embassaments.value = unics
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchEmbassaments)

  return {
    embassaments,
    loading,
    error
  }
}
