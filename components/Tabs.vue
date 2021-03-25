<template>
  <div>
    <ul class="flex px-4 space-x-4 border-b">
      <li class="py-2 hover:is-active is-active"><a href="#">Pictures</a></li>
      <li class="py-2 hover:border-b hover:border-blue-500"><a href="#">Musics</a></li>
      <li class="py-2 hover:border-b hover:border-blue-500"><a href="#">Videos</a></li>
      <li class="py-2 hover:border-b hover:border-blue-500"><a href="#">Documents</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style scoped>
.is-active {
  @apply border-b;
  @apply border-blue-600;
}
</style>
