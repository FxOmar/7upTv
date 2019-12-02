<template>
  <div>
    <div style="background-image: url('/img/66653541.jpg')" class="backdrop block bg-no-repeat bg-cover bg-center"></div>
    <div class="container mx-8 my-6">
      <div class="breadcrumb text-white flex justify-between">
        <div class="Jombtron">
          <p><i class="fas fa-home"></i><span>Home</span><i class="fas fa-angle-right"></i><span>Movie</span><i class="fas fa-angle-right"></i><span>JOKER</span></p>
        </div>
        <ul class="social-media flex">
          <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
        </ul>
      </div>
      <div class="flex justify-between mt-10">
        <div class="flex flex-col justify-between">
          <div class="text-white">
            <h1 class="text-7xl">JOKER</h1>
            <p class="break-all mt-12">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</p>
          </div>
          <div class="flex">
            <div>
              <iframe width="400" height="224.94" src="https://www.youtube.com/embed/lceAOQkiq-w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
        <div class="flex-col ml-6">
          <div class="my-2 text-white text-sm">
            <div class="flex">
              <i class="fas fa-star text-yellow-600 text-5xl"></i>
              <div class="pl-3 text-white an">
                <p class="text-2xl">9.5<span class="text-sm text-gray-600">/10</span></p>
                <p class=" text-sm">490.303</p>
              </div>
            </div>
            <div class="text-sm mt-1">
              <div class="my-3">
                <p><i class="fas fa-calendar-check"></i> 4 October 2019 (USA)</p>
                <p><i class="far fa-hourglass"></i> 2h 2min</p>
                <p><i class="fas fa-tag"></i> Crime, Drama, Thriller</p>
              </div>
            </div>
          </div>
          <div class="w-84">
            <img class="" src="/img/71rNJQ2g-EL._SY606_.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.Jombtron p>span, .social-media li>a{
  @apply px-2
}
.backdrop{
  z-index: -1;
}
.backdrop::before{
  content: "";
  background: rgba(22,28,35,.6);
  background: -webkit-gradient(linear,left top,left bottom,from(rgba(22,28,35,.77)),to(#161c23));
  background: linear-gradient(180deg,rgba(22,28,35,.77) 0,#161c23);
}
.backdrop,
.backdrop::before{
  @apply absolute inset-0
}
</style>