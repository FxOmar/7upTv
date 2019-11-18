<template>
  <div class="container mx-auto px-3 py-5">
    <div class="flex">
      <div class="w-1/4">
        <appfilter />
        <appfilter />
      </div>
      <div class="flex flex-wrap px-3 w-4/5">
          <movieCard class="pl-2" v-for="n in 8" :key="n" title="Joker (2019)" />
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
table {
  @apply border-collapse w-full
}

td, th {
  @apply border text-left p-4
}

tr:nth-child(even) {
  @apply bg-white
}
</style>