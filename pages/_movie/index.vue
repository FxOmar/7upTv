<template>
  <div class="container mx-auto px-3 py-5">
      <h1>welcome to the movie {{$route.params.slug}}</h1>
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