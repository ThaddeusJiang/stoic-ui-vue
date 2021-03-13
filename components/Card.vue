<template>
  <div class="rounded border shadow w-auto">
    <figure>
      <img :src="cover" :alt="description" />
    </figure>

    <div class="p-4">
      <div v-if="title" class="text-black text-opacity-50">{{ title }}</div>
      <div v-if="description" class="text-sm">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    cover: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>
