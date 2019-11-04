<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="https://tailwindcss.com/img/card-top.jpg"
    >
    <div class="px-6 py-4">
       <nuxt-link class="block" to="movies/test">
          <div class="font-bold text-xl mb-2">test this out</div>
      </nuxt-link>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#action</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#sci-fi</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#adventure</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>