<template>
    <div>
        <div class="relative">
            <!-- Slider main container -->
            <div class="swiper-container relative">
                <div class="flex items-center ml-4 py-4 text-2xl relative">
                    <h1 class=" antialiased">{{ title }}</h1> <span><a class="pl-4" href="#"><i
                                class="fas fa-chevron-right"></i></a></span>
                    <div class="flex absolute right-0">
                        <!-- If we need navigation buttons -->
                        <div class="swiper-prev pr-4"><i class="fas fa-chevron-left"></i></div>
                        <div class="swiper-next"><i class="fas fa-chevron-right"></i></div>
                    </div>
                </div>
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
  props:['title'],
  data(){
      return {
          instance: null
      }
  },
  mounted() {
    this.init()
  },
  methods: {
      init(){
          this.instance = new Swiper ('.swiper-container', {
            
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
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
.swiper-button-disabled{
    @apply text-gray-500
}
.swiper-slide {
    
}
</style>