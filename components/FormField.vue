<template>
  <div>
    <label class="font-medium">{{ label }}</label>
    <div
      class="mt-2 w-max"
      :class="{
        'border border-red-600': isError,
      }"
    >
      <slot />
    </div>
    <p
      :class="{
        ' text-red-600': isError,
      }"
    >
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
})
</script>
