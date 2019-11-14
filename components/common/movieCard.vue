<template>
  <article id="475557" class="item">
      <div class="thumb mb-4">
          <a href="#" rel="bookmark" title="Joker (2019)">
              <div class="relative">
                  <img class="rounded" src="//i0.wp.com/image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg?resize=300,450" alt="Image Joker" title="Image Joker (2019)">
                  <div class="opacity-0 bg-hover hover:opacity-100 absolute inset-0 flex items-center justify-center">
                      <button class="rounded-full h-16 w-16 flex items-center justify-center bg-red-500 text-white text-lg text-center" type="button"><i class="fas fa-play"></i></button>
                      <div class="rate absolute inset-0 pt-3 pl-3 text-yellow-500">
                        <i class="fa fa-star text-warning"></i> <span class="small text-white">8.5/10</span>
                      </div>
                  </div>
              </div>
          </a>
          <header class="entry-header">
              <h2 class="entry-title">
                  <a href="#" class="_title" rel="bookmark" title="Joker (2019)">{{ title }}</a>
              </h2>
          </header>
      </div>
  </article>
</template>

<script>
export default {
  props:['title']
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