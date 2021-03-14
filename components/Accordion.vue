<template>
  <div>
    <details>
      <summary class="outline-none font-semibold text-xl flex justify-between">
        <span>{{ title }}</span>
        <span class="w-6 h-6 text-gray-500 g-summary-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>

      <div class="py-4 px-1">
        <slot />
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>
