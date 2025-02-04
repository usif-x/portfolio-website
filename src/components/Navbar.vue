<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300"
       :class="[scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <router-link to="/" class="relative flex items-center">
          <img 
            :src="currentLogo"
            alt="Logo"
            class="h-8 sm:h-10 w-auto transition-all duration-300"
            :class="{'opacity-0 scale-95': isLogoTransitioning}"
            @load="isLogoTransitioning = false"
          />
        </router-link>

        <div class="hidden md:flex items-center gap-8">
          <router-link 
            v-for="link in ['Home', 'About', 'Skills', 'Projects', 'Contact']"
            :key="link"
            :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
            class="font-cairo relative text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 group py-2"
          >
            {{ link }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </router-link>
        </div>

        <button 
          @click="handleDarkModeToggle"
          class="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          <div class="relative w-5 h-5">
            <Icon 
              icon="mdi:weather-sunny" 
              class="w-5 h-5 absolute transition-all duration-300"
              :class="[
                isDarkMode ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100',
                isIconTransitioning ? 'scale-50' : 'scale-100'
              ]"
            />
            <Icon 
              icon="mdi:weather-night" 
              class="w-5 h-5 absolute transition-all duration-300"
              :class="[
                isDarkMode ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0',
                isIconTransitioning ? 'scale-50' : 'scale-100'
              ]"
            />
          </div>
        </button>

        <button 
          @click="toggleMenu"
          class="md:hidden relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          aria-label="Toggle Menu"
        >
          <div class="w-6 h-6 relative">
            <span 
              class="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
              :class="[
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              ]"
            ></span>
            <span 
              class="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
              :class="[
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              ]"
            ></span>
            <span 
              class="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
              :class="[
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              ]"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <div 
      v-show="isMenuOpen"
      class="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 transform"
      :class="isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'"
    >
      <div class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg px-4 pt-2 pb-3 flex flex-col gap-1">
        <router-link 
          v-for="link in ['Home', 'About', 'Skills', 'Projects', 'Contact']"
          :key="link"
          :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
          class="block px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
          @click="closeMenu"
        >
          {{ link }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'
import logoDark from '@/images/logo-dark.png'
import logoLight from '@/images/logo-light.png'
import { Icon } from '@iconify/vue'

const { isDarkMode, toggleDarkMode } = useDarkMode()
const scrolled = ref(false)
const isMenuOpen = ref(false)
const isLogoTransitioning = ref(true)
const isIconTransitioning = ref(false)
const currentLogo = ref(isDarkMode.value ? logoDark : logoLight)

const handleDarkModeToggle = () => {
  isIconTransitioning.value = true
  setTimeout(() => {
    toggleDarkMode()
    setTimeout(() => {
      isIconTransitioning.value = false
    }, 150)
  }, 150)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Watch for dark mode changes and update logo with transition
watch(isDarkMode, (newValue) => {
  isLogoTransitioning.value = true
  setTimeout(() => {
    currentLogo.value = newValue ? logoDark : logoLight
  }, 300)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
  if (isMenuOpen.value) isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

/* Improve transition smoothness */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
