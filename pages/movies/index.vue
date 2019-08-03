<template>
  <v-layout
    row
    wrap
  >
    <div class="block">
      <div class="block-head">
        <h1 class="text-xs-left ml-4">
          All Movies
        </h1>
      </div>
      <div class="block-content">
        <v-container>
          <v-layout
            row
            wrap
          >
            <Movie
              v-for="(card, index) in movies"
              :key="index"
              :thumbnail="card.thumbnail"
              :title="card.title"
              :views="card.views"
              :time="card.time"
            />
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-layout>
</template>

<script>
import Movie from '@/components/Movie'
export default {
  components: {
    Movie
  },
  data() {
    return {
      movies: [
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '4 hours ago'
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '1 hours ago'
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '2 hours ago'
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '7 hours ago'
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '54 hours ago'
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '4 days ago'
        },
        {
          thumbnail: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'Top 10 Australian beaches',
          views: 5000,
          time: '4 hours ago'
        }
      ]
    }
  }
}
</script>
