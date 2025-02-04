<template>
  <footer class="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-300">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div class="absolute bottom-0 left-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      <div class="absolute top-0 right-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
    </div>

    <div class="relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div class="col-span-1 md:col-span-2">
            <div class="mb-8">
              <img 
                :src="currentLogo"
                alt="Yousseif Mohammed Logo"
                class="h-8 w-auto transition-all duration-300"
                :class="{
                  'opacity-0 scale-95': isLogoTransitioning,
                  'opacity-100 scale-100': !isLogoTransitioning
                }"
                @load="isLogoTransitioning = false"
              />
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Crafting exceptional digital experiences with modern web technologies. Let's build something amazing together.
            </p>
            <div class="flex gap-4">
              <a href="https://t.me/yousseifmuhammed" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="p-2 hover:scale-110 transition-transform duration-300 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                <span class="sr-only">Telegram</span>
                <Icon icon="mdi:telegram" class="h-6 w-6" />
              </a>
              <a href="https://github.com/usif-x" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="p-2 hover:scale-110 transition-transform duration-300 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <span class="sr-only">GitHub</span>
                <Icon icon="mdi:github" class="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul class="flex flex-col gap-3">
              <li v-for="(link, index) in quickLinks" :key="index">
                <router-link :to="link.to" 
                   class="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                  {{ link.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul class="flex flex-col gap-3">
              <li>
                <a href="https://t.me/yousseifmuhammed" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <Icon icon="mdi:telegram" class="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Telegram</span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <Icon icon="mdi:map-marker" class="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Cairo, Egypt</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative border-t border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              © {{ new Date().getFullYear() }} < BY: <span class="font-bold">Yousseif Muhammed</span> />
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import { Icon } from '@iconify/vue'
import logoDark from '@/images/logo-dark.png'
import logoLight from '@/images/logo-light.png'

const { isDarkMode } = useDarkMode()
const isLogoTransitioning = ref(false)
const currentLogo = ref(logoLight)

const updateLogo = (isDark) => {
  isLogoTransitioning.value = true
  setTimeout(() => {
    currentLogo.value = isDark ? logoDark : logoLight
    setTimeout(() => {
      isLogoTransitioning.value = false
    }, 150)
  }, 150)
}

// Initialize logo on mount
onMounted(() => {
  updateLogo(isDarkMode.value)
})

// Watch for dark mode changes
watch(isDarkMode, (newValue) => {
  updateLogo(newValue)
})

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
