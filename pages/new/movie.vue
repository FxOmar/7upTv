<template>
    <div class="container mx-auto">
        <div class="my-6">
            <div class="flex justify-center items-center ">
                <form method="get" @submit.prevent="fetchData">
                    <p>https://www.themoviedb.org/movie/{movie_id}</p><input v-model="id" class="border rounded-lg p-2 text-lg" type="text" placeholder="Movie id">
                    <button  class="ml-2 rounded-lg bg-orange-400 text-white font-extrabold antialiased px-5 py-3">Get</button>
                </form>
            </div>
            <div v-if="loading" class="my-6">
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        :style="`background-image: url('https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}')`" title="Woman holding a mug">
                    </div>
                    <div
                        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <div class="text-gray-900 font-bold text-xl mb-2">{{ movie.title }}
                            </div>
                            <p class="text-gray-700 text-base">{{ movie.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            movie:[],
            id: null,
            loading: false
        }
    },
	methods: {
		async fetchData() {
            this.loading = false
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=282861697b1461993e375f17e2212e83&language=en-US`);
            this.loading = true
			this.movie = response.data;
        },
    }
}
</script>

<style scoped>

</style>