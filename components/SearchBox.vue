<template>
  <!-- focus-within doesn't work -->
  <div class="flex border rounded-lg">
    <select class="m-2 border-0 outline-none felx-initial">
      <option value="All">All</option>
      <option value="Coffee">Coffee</option>
      <option value="Whisky">Whisky</option>
      <option value="XXXXXXXXXXXXXXXXXX">XXXXXXXXXXXXXXXXXX</option>
    </select>
    <input type="text" class="flex-auto px-2 border-t-0 border-b-0 border-gray-100 outline-none" />
    <button class="flex-none w-10 h-10 p-2 hover:bg-gray-100 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
