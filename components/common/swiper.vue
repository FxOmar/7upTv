<template>
    <div class=" relative">
        <nuxt-link class="flex items-center mb-5" :to="`${link}`">
            <h1 class="text-2xl pr-3 antialiased">{{ title }}</h1>
            <i class="fas fa-chevron-right"></i>
        </nuxt-link>
        <swiper :options="swiperOption" >
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <!-- Slides -->
            <slot />
        </swiper>
    </div>
</template>

<script>
import movieCard from './movieCard'

export default {
  components:{
      movieCard,
  },
  props:['title', 'link'],
    data() {
      return {
        swiperOption: {
          slidesPerView: 6,
          spaceBetween: 10,
          loop: true,
          loopFillGroupWithBlank: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>

<style scoped>
</style>