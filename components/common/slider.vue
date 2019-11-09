<template>
    <div class="relative">
        <div class="">
            <div>
                <h1>Popular Movies</h1>
            </div>
        </div>
        <!-- Slider main container -->
        <div class="swiper-container relative">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"><movieCard /></div>
                <div class="swiper-slide"><movieCard /></div>
                <div class="swiper-slide"><movieCard /></div>
                <div class="swiper-slide"><movieCard /></div>
                <div class="swiper-slide"><movieCard /></div>
                <div class="swiper-slide"><movieCard /></div>
            </div>
        </div>
        <div class="object-none object-right-top">
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios'
import movieCard from './movieCard'

export default {
  components:{
      movieCard,
  },
  data(){

  },
  mounted() {
    this.init()
  },
  methods: {
      init(){
          this.instance = new Swiper ('.swiper-container', {

            slidesPerView: 1,
            spaceBetween: 10,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }
        })
      }
  }
}
</script>

<style scoped>
.swiper-container {
    @apply w-auto 
}
.swiper-wrapper {
    @apply flex items-stretch justify-start mb-10 px-4 relative
}
.swiper-slide {
    
}
</style>