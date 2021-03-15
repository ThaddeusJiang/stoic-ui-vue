<template>
  <form class="w-auto max-w-sm p-4 space-y-6 shadow">
    <h2 class="text-lg font-bold">Login</h2>

    <div class="space-y-2 ">
      <label for="email">Email</label>
      <input class="block w-full rounded" type="email" placeholder="abc@example.com" />
    </div>
    <div class="space-y-2">
      <label for="password">password</label>
      <input class="block w-full rounded" type="password" placeholder="******">
    </div>

    <div>
      <button class="w-full px-3 py-2 font-bold text-white bg-blue-600 rounded-full">Login</button>
    </div>

    <div>
      <a href="#" class="text-blue-600 ">forget password</a>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
