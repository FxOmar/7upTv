<template>
  <div>
    <div>
      <jumbotron />
    </div>
    <div class="container mx-auto px-12 py-5">
      <div class="mt-10 border-b">
        <popularmoviesSlider />
      </div>
      <div class="mt-10">
       <NowPlayingMovies />
      </div>
    </div>
  </div>
</template>

<script>
import jumbotron from '~/components/common/jumbotron'
import popularmoviesSlider from '~/components/popular-movies-Slider'
import NowPlayingMovies from '~/components/now-playing-movies'

export default {
  components: {
    jumbotron,
    popularmoviesSlider,
    NowPlayingMovies
  },
  data () {
    return { project: 'default' }
  },
  asyncData (context) {
    return { project: 'nuxt' }
  }
}
</script>

<style>
</style>