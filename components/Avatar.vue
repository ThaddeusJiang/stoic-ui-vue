<template>
  <span class="block w-6 h-6">
    <span class="g-is-square">
      <span v-if="firstname" class="bg-gray-400 rounded-full text-center">{{ firstname[0] }}</span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
</script>

<style scoped>
.g-is-square {
  display: block;
  padding-top: 100%;
  position: relative;
}

.g-is-square > span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}
</style>
