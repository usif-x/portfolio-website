<template>
  <section class="flex-grow relative flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black px-4 sm:px-6 lg:px-8 py-16 md:py-20 overflow-hidden transition-colors duration-300">
    <div class="absolute top-[-10%] right-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-float-slow"></div>
    <div class="absolute bottom-[-10%] left-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-float-delayed"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto text-center">
      <div class="mb-4 sm:mb-6 md:mb-8 relative">
        <div class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white/20 dark:ring-white/10">
          <img 
            src="@/images/profile.jpg"
            alt="Yousseif Mohammed Logo"
            class="w-full h-full object-cover transition-transform duration-300"
            :class="{
              'opacity-0 scale-95': isLogoTransitioning,
              'opacity-100 scale-100': !isLogoTransitioning
            }"
            @load="isLogoTransitioning = false"
          />
        </div>
      </div>

      <div class="px-4 sm:px-6 md:px-8">
        <h1 class="font-roboto text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.2] sm:leading-tight mb-3 sm:mb-4 md:mb-6">
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Yousseif
          </span>
          <br class="hidden sm:block" />
          <span class="text-gray-900 dark:text-white transition-colors duration-300">
            I'm a <span id="typing-text" class="inline-block"></span>
          </span>
        </h1>

        <p class="font-cairo text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-xl sm:max-w-2xl mx-auto transition-colors duration-300">
          Crafting exceptional digital experiences with modern web technologies
        </p>

        <div class="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          <router-link to="/projects" class="w-full sm:w-auto">
            <button class="font-cairo w-full h-full sm:w-auto group relative px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black">
              View Projects
              <span class="absolute inset-0 rounded-full bg-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </router-link>
          
          <router-link to="/contact" class="w-full sm:w-auto">
            <button class="font-cairo w-full h-full sm:w-auto group px-5 sm:px-6 md:px-8 py-3 md:py-4 border border-gray-300 dark:border-white/20 rounded-full text-gray-900 dark:text-white text-sm sm:text-base font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black backdrop-blur-sm">
              Contact Me
            </button>
          </router-link>
        </div>

        <div class="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8 md:mb-10">
          <a v-for="link in socialLinks" 
             :key="link.url"
             :href="link.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="p-2 hover:scale-110 transition-transform duration-300"
             :class="['text-gray-500 dark:text-gray-400 transition-colors duration-300', link.hoverClass]">
            <span class="sr-only">{{ link.label }}</span>
            <Icon :icon="link.icon" class="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mb-4">
      <span class="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] animate-pulse text-center px-4">
        Let's build something amazing together
      </span>
      <Icon icon="svg-spinners:blocks-wave" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500 dark:text-gray-400"/>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useDarkMode } from '@/composables/useDarkMode'
import Typed from 'typed.js'

const { isDarkMode } = useDarkMode()



// Initialize logo on mount
onMounted(() => {
  new Typed('#typing-text', {
    strings: ['Coder', 'UI/UX Designer', 'Fullstack Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
    smartBackspace: true
  })
})

// Watch for dark mode changes

const socialLinks = [
  { 
    icon: 'mdi:telegram',
    url: 'https://t.me/yousseifmuhammed',
    label: 'Telegram',
    hoverClass: 'hover:text-blue-500'
  },
  { 
    icon: 'mdi:github',
    url: 'https://github.com/usif-x',
    label: 'GitHub',
    hoverClass: 'hover:text-gray-900 dark:hover:text-white'
  }
]
</script>

<style>
@keyframes scrollLine {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  50.1% {
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

.animate-scrollLine {
  animation: scrollLine 2s infinite;
}

/* Typed.js cursor style */
.typed-cursor {
  color: currentColor;
  opacity: 1;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes float-slow {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(30px) translateY(-30px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes float-delayed {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-30px) translateY(30px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite 1s;
}

/* Add these styles to handle overflow */
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  position: relative;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow-x: hidden;
}
</style>

<style scoped>
/* Add these styles for smoother transitions */
.typed-cursor {
  font-size: inherit;
  line-height: inherit;
}

@media (max-width: 640px) {
  .typed-cursor {
    font-size: 1.75rem;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .typed-cursor {
    font-size: 2.25rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .typed-cursor {
    font-size: 3rem;
  }
}

@media (min-width: 1025px) {
  .typed-cursor {
    font-size: 4rem;
  }
}
</style>
