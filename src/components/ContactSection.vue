<template>
  <section class="relative py-20 overflow-hidden">
    <Toast ref="toastRef" />

    <div class="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div class="absolute w-[500px] h-[500px] top-0 left-0 bg-blue-500/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute w-[500px] h-[500px] bottom-0 right-0 bg-purple-500/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="font-roboto text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Let's Connect
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p class="font-cairo mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let's create something extraordinary together.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="relative group animate-slide-up">
          <div class="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl opacity-80 dark:opacity-90 backdrop-blur-xl"></div>
          <div class="relative p-8 rounded-2xl">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
              <div class="group">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <div class="relative">
                  <Icon icon="mdi:account" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input 
                    type="text" 
                    v-model="formData.name"
                    required
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    :class="{ 'border-red-500': errors.name }"
                  />
                </div>
                <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
              </div>

              <div class="group">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div class="relative">
                  <Icon icon="mdi:email" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input 
                    type="email" 
                    v-model="formData.email"
                    required
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    :class="{ 'border-red-500': errors.email }"
                  />
                </div>
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
              </div>

              <div class="group">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <div class="relative">
                  <Icon icon="mdi:message" class="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <textarea 
                    v-model="formData.message"
                    rows="4"
                    required
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    :class="{ 'border-red-500': errors.message }"
                  ></textarea>
                </div>
                <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-70"
              >
                <span class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div class="flex items-center justify-center gap-2">
                  <Icon v-if="isSubmitting" icon="mdi:loading" class="animate-spin" />
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  <Icon icon="mdi:send" class="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </div>
        </div>

        <div class="flex flex-col gap-8 animate-slide-up" style="animation-delay: 200ms;">
          <div class="relative group">
            <div class="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl opacity-80 dark:opacity-90 backdrop-blur-xl"></div>
            <div class="relative p-8 rounded-2xl">
              <h3 class="font-roboto text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div class="flex flex-col gap-6">
                <a href="mailto:yousseifmuhammed@gmail.com" 
                   class="flex items-center gap-4 group/item">
                  <div class="p-3 rounded-xl bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors">
                    <Icon icon="mdi:email" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p class="text-gray-900 dark:text-white font-medium">yousseifmuhammed@gmail.com</p>
                  </div>
                </a>

                <div class="flex items-center gap-4 group/item">
                  <div class="p-3 rounded-xl bg-purple-500/10 group-hover/item:bg-purple-500/20 transition-colors">
                    <Icon icon="mdi:map-marker" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p class="text-gray-900 dark:text-white font-medium">Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div class="flex gap-4">
                  <a v-for="social in socialLinks" 
                     :key="social.name"
                     :href="social.url"
                     target="_blank"
                     class="p-3 rounded-xl bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                    <Icon :icon="social.icon" class="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="relative group overflow-hidden rounded-2xl h-[200px]">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.54749371281!2d31.24967233955078!3d30.044420000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjkiTiAzMcKwMTUnNTQuOSJF!5e0!3m2!1sen!2seg!4v1625136873278!5m2!1sen!2seg"
              class="w-full h-full border-0"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'
import Toast from './Toast.vue'

const toastRef = ref(null)
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({})
const isSubmitting = ref(false)

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/usif-x' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/yousseifmuhammed' },
  { name: 'Telegram', icon: 'mdi:telegram', url: 'https://t.me/yousseifmuhammed' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com/yousseifmuhammed' }
]

// Add your Telegram bot token and chat ID
const TELEGRAM_BOT_TOKEN = ''
const TELEGRAM_CHAT_ID = ''

const handleSubmit = async () => {
  // Reset errors
  Object.keys(errors).forEach(key => delete errors[key])
  
  try {
    isSubmitting.value = true
    
    // Basic validation
    if (!formData.name) errors.name = 'Name is required'
    if (!formData.email) errors.email = 'Email is required'
    if (!formData.message) errors.message = 'Message is required'
    
    if (Object.keys(errors).length > 0) {
      throw new Error('Validation failed')
    }

    // Prepare message for Telegram
    const messageText = `
New Contact Form Submission:
---------------------------
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
---------------------------
Sent from: Portfolio Website
`
    
    // Send to Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'HTML'
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    // Clear form
    Object.keys(formData).forEach(key => formData[key] = '')
    
    // Show success toast
    toastRef.value?.addToast('Message sent successfully! I will get back to you soon.', 'success')
    
  } catch (error) {
    console.error('Error:', error)
    if (error.message !== 'Validation failed') {
      // Show error toast
      toastRef.value?.addToast('Failed to send message. Please try again.', 'error')
    }
  } finally {
    isSubmitting.value = false
  }
}
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
</style>
