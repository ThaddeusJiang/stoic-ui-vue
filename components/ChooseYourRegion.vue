<template>
  <section class="md:w-4/5 md:mx-auto">
    <h1 class="text-center font-bold text-2xl pb-8">Choose your country or region</h1>
    <div v-for="item in data" :key="item.group">
      <h2 class="font-semibold text-xl pb-6">{{ item.group }}</h2>

      <div class="grid grid-cols-2 md:grid-cols-4">
        <div v-for="sub_item in item.items" :key="sub_item.id" class="text-gray-500 pb-4">
          <a href="#">{{ sub_item.code }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = [
      {
        group: 'Europe',
        items: [
          { id: 'U.K.', code: 'U.K.' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
          { id: 'France', code: 'France' },
        ],
      },
      {
        group: 'Asaia',
        items: [
          { id: 'Japan', code: 'Japan' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
          { id: 'Hong Kong', code: 'Hong Kong' },
        ],
      },
      {
        group: 'North America',
        items: [
          { id: 'U.S', code: 'U.S' },
          { id: 'Canada', code: 'Canada' },
        ],
      },
    ]

    return {
      data,
    }
  },
})
</script>
