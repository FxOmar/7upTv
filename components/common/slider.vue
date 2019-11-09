<template>
    <div class="relative">
        <div class="">
            <div>
                <h1>Popular Movies</h1>
            </div>
        </div>
        <!-- Slider main container -->
        <div class="swiper-container h-32 relative">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 3</div>
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

export default {
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
    @apply w-auto h-64
}
.swiper-slide {
    @apply flex h-full bg-gray-700
}
</style>