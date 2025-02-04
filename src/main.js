import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import '@fontsource/cairo'
import '@fontsource/roboto'
// Initialize dark mode based on localStorage or system preference
if (localStorage.getItem('darkMode') === 'true' || 
    (!('darkMode' in localStorage) && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.setItem('darkMode', 'true')
} else {
  document.documentElement.classList.remove('dark')
  localStorage.setItem('darkMode', 'false')
}

const app = createApp(App)
app.use(router)
app.mount('#app')