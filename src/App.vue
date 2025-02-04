<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import { useCrisp } from './composables/useCrisp'

const { initCrisp } = useCrisp()

onMounted(() => {
  initCrisp()
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <router-view v-slot="{ Component }" class="flex-grow flex flex-col">
      <transition name="page-flip" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer class="mt-auto" />
  </div>
</template>

<style>
/* Add smooth scrolling to the whole document */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

/* Reset body margin and add flex layout */
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

.page-flip-enter-active,
.page-flip-leave-active {
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: center right;
  transform-style: preserve-3d;
  position: relative;
}

.page-flip-enter-from {
  opacity: 0;
  transform: rotateY(-180deg);
}

.page-flip-leave-to {
  opacity: 0;
  transform: rotateY(180deg);
}

.page-flip-enter-to,
.page-flip-leave-from {
  opacity: 1;
  transform: rotateY(0deg);
}

/* Optional: Add a shadow effect during transition */
.page-flip-enter-active::before,
.page-flip-leave-active::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to left, rgba(0,0,0,0.1), transparent);
  opacity: 0;
  transition: opacity 0.6s;
}

.page-flip-enter-active::before {
  opacity: 1;
}

/* Prevent FOUC (Flash of Unstyled Content) */
.page-flip-move {
  transition: transform 0.6s;
}
</style>

