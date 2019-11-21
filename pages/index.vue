<template>
  <div>
    <div>
      <jumbotron />
    </div>
    <div class="container mx-auto px-12 py-5">
      <div class="mt-10 border-b">
        <popularMSlider />
      </div>
      <div class="mt-10">
        <!-- <slider title="Now Playing Movies" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import jumbotron from '~/components/common/jumbotron'
import popularMSlider from '~/components/popularMSlider'


export default {
  components: {
    jumbotron,
    popularMSlider
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