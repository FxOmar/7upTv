<template>
    <slider title="Popular Movies">
        <div class="swiper-slide">
            <movieCard v-for="(movie, index) in movies" :key="index" class="w-48 pl-1" :title="movie.title" :img="movie.poster_path" :vote_average="movie.vote_average" />
        </div>
    </slider>
</template>

<script>
import movieCard from '~/components/common/movieCard'
import slider from '~/components/common/slider'
import axios from "axios"

export default {
    components: {
        movieCard,
        slider
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