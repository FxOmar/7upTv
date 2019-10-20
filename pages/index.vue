<template>
  <div class="container mx-auto px-3 py-5">
    <div class="flex -mx-3">
      <div class="px-3 w-1/4">
        <movieCard />
      </div>
      <div class="px-3 w-1/4">
        <movieCard />
      </div>
      <div class="px-3 w-1/4">
        <movieCard />
      </div>
      <div class="px-3 w-1/4">
        <movieCard />
      </div>
    </div>
  </div>
</template>

<script>
import movieCard from '~/components/common/movieCard'
export default {
  components: {
    movieCard
  }
}
</script>

<style>
</style>