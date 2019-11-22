<template>
  <div class="container mx-auto py-5 px-12">
    <div class="flex">
      <div class="flex flex-wrap mx-2">
        <movieCard v-for="(movie, index) in movies" :key="index" class="w-48 pl-1" :title="movie.title" :img="movie.poster_path" :vote_average="movie.vote_average" />
      </div>
    </div>
    <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
  </div>
</template>

<script>
import movieCard from '~/components/common/movieCard'
import axios from "axios";

export default {
	scrollToTop: true,
	components: {
		movieCard,
	},
	data() {
		return {
			movies: [],
			page: 1
		};
	},

	computed: {
		url() {
			return "https://api.themoviedb.org/3/movie/top_rated?api_key=282861697b1461993e375f17e2212e83&language=en-US&page=" + this.page;
		}
	},

	created() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			const response = await axios.get(this.url);
			this.movies = response.data.results;
		},
		infiniteScroll($state) {
			setTimeout(() => {
				this.page++
				axios.get(this.url)
					.then((response) => {
						if (response.data.results.length > 1) {
							response.data.results.forEach((item) => this.movies.push(item))
							$state.loaded()
						} else {
							$state.complete()
						}
					}).catch((err) => {
						console.log(err)
					})
			}, 500)
		}
	}
}
</script>

<style scoped>

</style>