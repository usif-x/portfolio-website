<template>
  <section class="relative py-24 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div class="absolute top-[-10%] right-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20 animate-fade-in">
        <h2 class="font-roboto text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <div class="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="relative group animate-slide-up">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
          <div class="relative rounded-2xl overflow-hidden glass-effect p-1">
            <div class="relative rounded-xl overflow-hidden">
              <img 
                :src="currentLogo"
                alt="Profile"
                class="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                @error="handleImageError"
              />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div class="absolute bottom-8 left-8 right-8">
                  <p class="text-xl font-bold text-white mb-2">Full Stack Developer</p>
                  <p class="text-gray-200 text-sm">Transforming ideas into exceptional digital solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8 animate-slide-up" style="animation-delay: 200ms;">
          <div class="relative group">
            <div class="card-modern">
              <h3 class="font-roboto text-2xl sm:text-3xl font-bold gradient-text mb-6 dark:text-white">
                Who I Am
              </h3>
              <p class="font-cairo text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                A passionate Full Stack Developer with 2+ years of experience in crafting scalable web applications and solving complex problems. I specialize in modern web technologies and love creating innovative solutions.
              </p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div v-for="(fact, index) in quickFacts" 
                     :key="index"
                     class="group/fact">
                  <div class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300">
                    <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg group-hover/fact:scale-110 transition-all duration-300">
                      <Icon :icon="fact.icon" class="w-6 h-6" />
                    </div>
                    <div>
                      <p class="text-sm text-gray-500 dark:text-gray-400">{{ fact.label }}</p>
                      <p class="font-semibold text-gray-900 dark:text-white">{{ fact.value }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                What I Do
              </h4>
              <div class="space-y-6">
                <div v-for="(service, index) in services" 
                     :key="index"
                     class="group/service p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-300">
                  <div class="flex items-start gap-4">
                    <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg group-hover/service:scale-110 transition-all duration-300">
                      <Icon :icon="service.icon" class="w-6 h-6" />
                    </div>
                    <div>
                      <h5 class="font-semibold text-gray-900 dark:text-white mb-2">{{ service.title }}</h5>
                      <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <router-link to="/contact" class="w-full sm:w-auto">
            <button class="w-full h-full sm:w-auto group relative px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black">
              Let's Work Together
              <Icon icon="mdi:arrow-right" class="inline w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span class="absolute inset-0 rounded-full bg-white/[0.1] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useDarkMode } from '@/composables/useDarkMode'
import logoDark from '@/images/logo-dark.png'
import logoLight from '@/images/logo-light.png'

const { isDarkMode } = useDarkMode()
const currentLogo = ref(isDarkMode.value ? logoDark : logoLight)

// Handle image loading error
const handleImageError = (e) => {
  console.error('Image failed to load:', e)
  // Fallback to a default image if the main image fails to load
  e.target.src = isDarkMode.value ? logoDark : logoLight
}

// Watch for dark mode changes
watch(isDarkMode, (newValue) => {
  currentLogo.value = newValue ? logoDark : logoLight
})

const quickFacts = [
  { label: 'Experience', value: '2+ Years', icon: 'mdi:clock-outline' },
  { label: 'Projects', value: '0 Completed', icon: 'mdi:rocket-launch-outline' },
  { label: 'Location', value: 'Cairo, Egypt', icon: 'mdi:map-marker-outline' },
  { label: 'Availability', value: 'Full Time', icon: 'mdi:calendar-check-outline' }
]

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable and secure web applications using modern technologies.',
    icon: 'mdi:web'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces with great user experience.',
    icon: 'mdi:palette'
  }
]
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes slow-spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-slow-spin {
  animation: slow-spin 20s linear infinite;
}

.animate-slow-spin-reverse {
  animation: slow-spin-reverse 25s linear infinite;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
  background-size: 200% 200%;
}

</style> 