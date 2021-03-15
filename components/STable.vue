<template>
  <table class="w-full border border-collapse">
    <tr>
      <th v-for="item in titles" :key="item" class="text-left border">{{ item }}</th>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td v-for="value in item" :key="value" class="border">{{ value }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    titles: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {},
})
</script>
