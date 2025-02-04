<template>
  <TransitionGroup
    tag="div"
    class="fixed top-4 right-4 z-50 flex flex-col gap-2"
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-x-full opacity-0"
    enter-to-class="transform translate-x-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-x-0 opacity-100"
    leave-to-class="transform translate-x-full opacity-0"
  >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="flex items-center gap-3 min-w-[300px] px-4 py-3 rounded-lg shadow-lg backdrop-blur-lg"
      :class="[
        toast.type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white',
      ]"
    >
      <Icon 
        :icon="toast.type === 'success' ? 'mdi:check-circle' : 'mdi:alert-circle'" 
        class="w-5 h-5 flex-shrink-0"
      />
      <p class="font-cairo text-sm font-medium">{{ toast.message }}</p>
      <button 
        @click="removeToast(toast.id)"
        class="ml-auto p-1 hover:bg-white/20 rounded-full transition-colors"
      >
        <Icon icon="mdi:close" class="w-4 h-4" />
      </button>
    </div>
  </TransitionGroup>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const toasts = ref([])

const addToast = (message, type = 'success') => {
  const id = Date.now()
  toasts.value.push({ id, message, type })
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    removeToast(id)
  }, 5000)
}

const removeToast = (id) => {
  toasts.value = toasts.value.filter(toast => toast.id !== id)
}

// Expose methods to parent components
defineExpose({
  addToast
})
</script> 