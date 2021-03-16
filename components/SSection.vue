<template>
  <section class="p-4 bg-gray-300">
    <div class="p-4 bg-white border shadow">
      <h2 class="pb-4 text-lg font-bold border-b">{{ title }}</h2>

      <div class="pt-4">
        <slot />
      </div>
    </div>
  </section>
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
