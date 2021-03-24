<template>
  <nav aria-label="breadcrumbs">
    <ul class="flex">
      <li class="mr-4 breadcrumb"><a class="mr-4 text-blue-600 hover:underline" href="#">Stoic Web</a></li>
      <li class="mr-4 breadcrumb"><a class="mr-4 text-blue-600 hover:underline" href="#">Components</a></li>
      <li><a class="" href="#">Breadcrumb</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style scoped>
.breadcrumb::after {
  content: '/';
}
</style>
