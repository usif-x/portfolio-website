import { ref, watch, onMounted } from 'vue'

const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')

// Initialize dark mode on page load
const initializeDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function useDarkMode() {
  onMounted(() => {
    initializeDarkMode()
  })

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', isDarkMode.value)
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    isDarkMode,
    toggleDarkMode
  }
} 