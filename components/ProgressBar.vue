<template>
  <div class="relative pt-1">
    <div class="flex items-center justify-between mb-2">
      <div>
        <span
          class="inline-block rounded-full"
          :class="{
            'px-2 py-1 text-xs font-semibold text-pink-600 uppercase bg-pink-200': title,
          }"
        >
          {{ title }}
        </span>
      </div>
      <div v-if="badge" class="text-right">
        <span class="inline-block text-xs font-semibold text-pink-600">
          {{ _progressValue }}
        </span>
      </div>
    </div>
    <div class="flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded">
      <div
        :style="{
          width: _progressValue,
        }"
        class="flex flex-col justify-center text-center text-white bg-pink-500 shadow-none whitespace-nowrap"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number, // FIXME: how to type float, like 0.3
      required: true,
    },
    badge: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const _progressValue = `${props.value * 100}%`

    return {
      _progressValue,
    }
  },
})
</script>
