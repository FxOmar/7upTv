<template>
  <div class="container mx-auto mx-3 py-5">
    <div class="flex">
      <div class="w-1/4">
        <appfilter />
        <appfilter />
      </div>
      <div class="flex flex-wrap mx-2 w-4/5">
          <movieCard class="w-48 pl-1" v-for="n in 8" :key="n" title="Joker (2019)" />
      </div>
    </div>
  </div>
</template>

<script>
import movieCard from '~/components/common/movieCard'
import appfilter from '~/components/common/appfilter'

export default {
  components: {
    movieCard,
    appfilter
  }
}
</script>

<style scoped>

</style>