<template>
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div class="absolute w-[500px] h-[500px] top-0 left-0 bg-blue-500/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute w-[500px] h-[500px] bottom-0 right-0 bg-purple-500/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="font-roboto text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Professional Skills
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p class="font-cairo mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my technical expertise and professional capabilities.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
        <div v-for="(skill, index) in skills" 
             :key="index"
             class="group relative animate-slide-up"
             :style="{ animationDelay: `${index * 100}ms` }">
          <div class="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl opacity-80 dark:opacity-90 backdrop-blur-xl"></div>
          <div class="relative p-6 rounded-2xl">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div class="relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white transform group-hover:rotate-6 transition-transform duration-300">
                <Icon :icon="skill.icon" class="w-8 h-8" />
              </div>
            </div>

            <h3 class="font-roboto text-lg font-semibold text-gray-900 dark:text-white text-center">
              {{ skill.name }}
            </h3>

            <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-transform duration-1000 ease-out"
                   :style="{ transform: `scaleX(${skill.level / 100})` }"></div>
            </div>
            
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
              {{ skill.level }}% Proficiency
            </span>
          </div>
        </div>
      </div>

      <div class="mt-20 animate-slide-up" style="animation-delay: 400ms;">
        <h3 class="font-roboto text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Technology Ecosystem
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div v-for="(tech, index) in techStack" 
               :key="index"
               class="group relative">
            <div class="relative p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="relative flex flex-col items-center">
                <Icon :icon="tech.icon" 
                      class="w-12 h-12 mb-3 transform transition-transform duration-300 group-hover:scale-110" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { onMounted } from 'vue'

const skills = [
  { 
    name: 'Frontend Development',
    level: 90,
    icon: 'mdi:web'
  },
  { 
    name: 'Backend Development',
    level: 85,
    icon: 'mdi:server'
  },
  { 
    name: 'UI/UX Design',
    level: 80,
    icon: 'mdi:palette'
  },
  { 
    name: 'Cloud Architecture',
    level: 85,
    icon: 'mdi:cloud'
  }
]

const techStack = [
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Node.js', icon: 'logos:nodejs' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'MongoDB', icon: 'logos:mongodb' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'Firebase', icon: 'logos:firebase' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' }
]

// Optional: Add animation on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.group').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

/* Add hover effects for skill cards */
.group:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
}

.group:hover .progress-bar {
  transform: scaleX(1.02);
}
</style> 