<template>
  <div>
    <div>
      <jumbotron />
    </div>
    <div class="container mx-auto px-2 py-5">
      <div class="mt-10 border-b">
        <slider title="Popular Movies" />
      </div>
      <div class="mt-10">
        <slider title="Now Playing Movies" />
      </div>
      <!-- <div class="flex -mx-3">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import jumbotron from '~/components/common/jumbotron'
import movieCard from '~/components/common/movieCard'
import slider from '~/components/common/slider'

export default {
  components: {
    jumbotron,
    movieCard,
    slider
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