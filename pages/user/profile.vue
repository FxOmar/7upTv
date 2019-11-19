<template>
  <section class="section">
  	<div class="bg-gray-400 p-6 flex justify-center items-center relative">
  		<div class="backdrop bg-center bg-no-repeat bg-cover" style="background-image: url('/img/66653541.jpg')"></div>
  		<div class="z-10">
  			<div class="w-full flex justify-center">
  				<img class="w-24 h-24 rounded-full" :src="(isAuthenticated || {}).avatar || $avatar()">
  			</div>
  			<div class="w-full text-center mt-4 text-white">
  				<h1>{{ loggedInUser.name }}</h1>
  		  	<p>Member since {{ loggedInUser.created_at | moment }}</p>
  			</div>
  		</div>
  	</div>
  	<div class="">
  		<ul class="flex border-b justify-center items-center">
  			<li class="mr-1">
  				<a class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
  			</li>
  			<li class="mr-1">
  				<a class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
  			</li>
  			<li class="mr-1">
  				<a class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
  			</li>
  			<li class="mr-1">
  				<a class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold" href="#">Active</a>
  			</li>
  		</ul>
  		<div class="container mx-auto mt-5">
  			<div class="flex flex-wrap justify-center">
  				<movieCard class="w-48 mx-2" v-for="n in 6" :key="n" vote_average="6" />
  			</div>
  		</div>
  	</div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import movieCard from '~/components/common/movieCard'


export default {
  middleware:['auth'],
  components: {
    movieCard,
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  filters: {
  moment: function (date) {
    return moment(date).format('MMMM D, YYYY');
  }
}
}
</script>
<style scoped>
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