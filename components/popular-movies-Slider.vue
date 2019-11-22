<template>
    <swiper title="Popular Movies" link="/movies/movie-popular">
        <swiper-slide v-for="(movie, index) in movies" :key="index">
            <movieCard  class="pl-1" :title="movie.title" :img="movie.poster_path" :vote_average="movie.vote_average" />
        </swiper-slide>
    </swiper>
</template>

<script>
import movieCard from '~/components/common/movieCard'
import swiper from '~/components/common/swiper'
import axios from "axios"

export default {
    components: {
        movieCard,
        swiper
    },
    data() {
		return {
			movies: [],
			page: 1
		};
	},

	computed: {
		url() {
			return "https://api.themoviedb.org/3/movie/popular?api_key=282861697b1461993e375f17e2212e83&language=en-US";
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
    }
}
</script>

<style scoped>

</style>