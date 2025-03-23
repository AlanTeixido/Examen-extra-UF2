import { ref } from 'vue'
import axios from 'axios'

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json'

export const useEmbassaments = () => {
  const embassaments = ref([])
  const loading = ref(false)
  const error = ref(null)

  const getEmbassaments = async () => {
    loading.value = true
    error.value = null

    try {
      const { data } = await axios.get(API_URL)

      const vistos = new Set()
      embassaments.value = data.filter(item => {
        if (!vistos.has(item.estaci)) {
          vistos.add(item.estaci)
          return true
        }
        return false
      })
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return {
    embassaments,
    loading,
    error,
    getEmbassaments
  }
}
