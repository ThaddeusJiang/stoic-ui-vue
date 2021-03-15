<template>
  <dl class="border">
    <div v-for="item in items" :key="item.title" class="flex w-full border-b last:border-b-0">
      <dt class="border-r">{{ item.title }}</dt>
      <dd class="">{{ item.description }}</dd>
    </div>
  </dl>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {},
})
</script>
