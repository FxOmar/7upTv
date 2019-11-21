<template>
    <div class="container mx-auto">
        <div class="my-6">
            <div class="flex justify-center items-center ">
                <p>https://www.imdb.com/title/</p><input class="border rounded-lg p-2 text-lg" type="text" placeholder="Movie id">
                <button class="ml-2 rounded-lg bg-orange-400 text-white font-extrabold antialiased px-5 py-3">Get</button>
            </div>
            <div class="my-6 w-3/5">
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style="background-image: url('https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg')" title="Woman holding a mug">
                    </div>
                    <div
                        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <p class="text-sm text-gray-600 flex items-center">
                                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}
                            </div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                                nihil.</p>
                        </div>
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full mr-4" src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                                alt="Avatar of Jonathan Reinink">
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                                <p class="text-gray-600">Aug 18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const data  = await $axios.$get('/movies/1')
        return {
            title: data.movie.title
        }
    }
}
</script>

<style scoped>

</style>