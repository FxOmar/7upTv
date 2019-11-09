<template>
  <div class="container mx-auto px-3 py-5">
      <h1>welcome to the movie {{$route.params.slug}}</h1>
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <img src="~/static/img/71rNJQ2g-EL._SY606_.jpg" alt="">
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