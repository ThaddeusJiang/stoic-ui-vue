<template>
  <div v-if="isOpenRef" class="relative px-6 py-4 mb-4 text-white bg-pink-500 border-0 rounded">
    <span class="inline-block mr-5 text-xl align-middle">
      <i class="fas fa-bell"></i>
    </span>
    <span class="inline-block mr-8 align-middle">
      <b class="capitalize">{{ title }}</b> <span>{{ message }}</span>
    </span>
    <button
      class="absolute top-0 right-0 mt-4 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
      @click="close"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      defualt: false,
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isOpenRef = ref(props.isOpen)

    const close = () => {
      isOpenRef.value = !isOpenRef.value
    }

    return {
      isOpenRef,
      close,
    }
  },
})
</script>
