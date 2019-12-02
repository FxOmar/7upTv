<template>
  <section class="">
    <div class="relative">
      <div style="background-image: url('/img/66653541.jpg')" class="backdrop block bg-no-repeat bg-cover bg-center"></div>
      <div class="container mx-auto px-3 pt-16 z-10">
        <div class="container">
          <div class="flex shadow-lg">
            <iframe width="100%" height="615" src="https://www.youtube.com/embed/TfzqdHf57RE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="w-full bg-gray-900">
          <div class="px-3 py-5 pb-4">
            <a class="hover:bg-gray-800 hover:text-white p-3 rounded-sm" href="#">Server 1</a>
            <a class="hover:bg-gray-800 hover:text-white p-3 rounded-sm" href="#">Server 2</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900">
      <div class="container mx-auto px-3 py-5">
        <div class="bg-gray-900 shadow-2xl px-5 py-5">
          <div class="flex">
            <div class="w-1/6">
              <img class="w-48" src="/img/71rNJQ2g-EL._SY606_.jpg" alt="">
            </div>
            <div class="mx-4 w-5/6">
              <div class="text-3xl text-white">
                <h1>Moonlight <span class="text-sm text-gray-600">2019</span></h1>
              </div>
              <div class="my-2 text-sm">
                <div class="flex items-center">
                  <i class="fas fa-star text-yellow-600 text-3xl"></i><p class="pl-3 text-3xl text-white">9.5<span class="text-sm text-gray-600">/10</span></p>
                </div>
                <div class="text-sm mt-1">
                  <p>7.1/10 by 3471 users</p>
                </div>
              </div>
              <div class="text-gray-500 mb-4">
                <p>Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.</p>
              </div>
              <div class="my-2">
                <ul class="">
                  <li class="active">Released: 2019-07-12</li>
                  <li>Runtime: 118 minutes</li>
                  <li class="active">Genre: Adventure, Animation, Drama</li>
                  <li>Stars: Donald Glover, Beyoncé Knowles, James Earl Jones, Chiwetel Ejiofor, Alfre Woodard</li>
                  <li class="active">Director: Jon Favreau, Jeff Nathanson, Irene Mecchi, Jonathan Roberts, Linda Woolverton</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>

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
ul li{
  @apply p-2
}
.active{
  @apply bg-gray-700 text-white
}
</style>