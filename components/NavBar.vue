<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-pink-500">
    <div class="container flex flex-wrap items-center justify-between px-4 mx-auto">
      <div class="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
        <a
          class="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
          href="#"
        >
          LOGO
        </a>
        <button
          class="block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          @click="toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div :class="{ ' hidden': !isOpen, ' flex': isOpen }" class="items-center lg:flex lg:flex-grow">
        <ul class="flex flex-col ml-auto list-none lg:flex-row">
          <li class="nav-item">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
              href="#"
            >
              <span class="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isOpen = ref(false)

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggle,
    }
  },
})
</script>
