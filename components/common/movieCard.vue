<template>
  <article id="475557" class="item">
      <div class="thumb mb-4">
          <nuxt-link :to="`/movie/${url}/review`">
              <div class="relative">
                  <img :srcset="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${img} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img} 2x`" sizes="auto" :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${img}`" class="rounded" :alt="`${title}`">
                  <div class="opacity-0 bg-hover hover:opacity-100 absolute inset-0 flex items-center justify-center">
                      <button class="rounded-full h-16 w-16 flex items-center justify-center bg-red-500 text-white text-lg text-center" type="button"><i class="fas fa-play"></i></button>
                      <div class="rate absolute inset-0 pt-3 pl-3 text-yellow-500 text-sm">
                        <i class="fa fa-star text-warning"></i> <span class="small text-white">{{ vote_average }}<span class="text-xs">/10</span></span>
                      </div>
                  </div>
              </div>
          </nuxt-link>
          <header class="entry-header">
              <h2 class="entry-title">
                  <nuxt-link to="/movie/title">{{ title }}</nuxt-link>
              </h2>
          </header>
      </div>
  </article>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    img: String,
    vote_average: Number,
    url: String,
  }
}
</script>

<style>
  .bg-hover{
    background-color: rgba(0,0,0,.8);
  }
  .entry-title{
    @apply pt-3 
  }
</style>