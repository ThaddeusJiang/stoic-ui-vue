<template>
  <div>
    <button ref="btn">{{ title }}</button>

    <div ref="content">
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { useTippy } from 'vue-tippy/composition'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const btn = ref(null)
    const content = ref(null)

    useTippy(btn, {
      content,
      allowHTML: true,
      theme: 'light',
      interactive: true,
    })

    return {
      btn,
      content,
    }
  },
}
</script>
