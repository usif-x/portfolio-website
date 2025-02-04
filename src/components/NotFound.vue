<template>
  <section class="relative min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black px-4 sm:px-6 lg:px-8 py-16 md:py-20 overflow-hidden transition-colors duration-300">
    <div class="absolute top-[-10%] right-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
    <div class="absolute bottom-[-10%] left-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto text-center">
      <div class="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
        <div class="animate-bounce-slow">
          <Icon 
            icon="mdi:alert-circle-outline" 
            class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto text-gray-400 dark:text-gray-600"
          />
        </div>

        <div class="space-y-6 sm:space-y-8 md:space-y-10 px-4 sm:px-6 md:px-8">
          <h1 class="font-roboto space-y-2 sm:space-y-3 md:space-y-4">
            <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              404
            </span>
            <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Page Not Found
            </span>
          </h1>

          <p class="font-cairo text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-md sm:max-w-lg md:max-w-2xl mx-auto transition-colors duration-300">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div class="pt-4 sm:pt-6 md:pt-8">
            <router-link to="/" class="inline-block w-full sm:w-auto">
              <button class="w-full sm:w-auto group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full text-white text-base sm:text-lg md:text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-white dark:focus:ring-offset-black">
                <div class="flex items-center justify-center gap-3">
                  <Icon icon="mdi:home" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <span>Back to Home</span>
                </div>
                <span class="absolute inset-0 rounded-full bg-white/[0.15] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
/* Custom animations for smoother effects */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Improve transition smoothness */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 