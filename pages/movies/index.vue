<template>
  <div class="container mx-auto py-5 px-12">
    <div class="flex">
      <div class="flex flex-wrap mx-2">
        <movieCard v-for="(movie, index) in movies" :key="index" class="w-48 pl-1" :title="movie.title" :url="movie.id" :img="movie.poster_path" :vote_average="movie.vote_average" />
      </div>
    </div>
    <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
  </div>
</template>

<script>
import movieCard from '~/components/common/movieCard'

export default {
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
			return "/movies?page=" + this.page;
		}
	},

	mounted() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			const response = await this.$axios.$get(this.url);
			this.movies = response.movies.data;
			console.log(this.movies)
		},
		infiniteScroll($state) {
			setTimeout(() => {
				this.page++
				this.$axios.$get(this.url)
					.then((response) => {
						if (response.movies.data.length > 1) {
							response.movies.data.forEach((item) => this.movies.push(item))
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