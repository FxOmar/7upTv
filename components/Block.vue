<template>
  <div class="block">
    <div class="block-head">
      <h1 class="text-xs-left">
        {{ title }}
      </h1>
    </div>
    <div class="block-content">
      <Movie
        v-for="(card, index) in data"
        :key="index"
        :thumbnail="card.thumbnail"
        :title="card.title"
        :views="card.views"
        :time="card.time"
      />
    </div>
  </div>
</template>

<script>
import Movie from './Movie'
export default {
  components: {
    Movie
  },
  props: {
    data: { type: Array, default: null },
    title: { type: String, default: 'New' }
  }
}
</script>

<style>
.block {
  margin-bottom: 150px;
}
</style>
