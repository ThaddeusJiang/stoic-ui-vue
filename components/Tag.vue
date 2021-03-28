<template>
  <span class="text-center rounded px-3 py-1">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {},
})
</script>
