<template>
  <v-container
    grid-list-md
    text-xs-center
  >
    <v-layout
      row
      wrap
    >
      <Block
        :data="movies"
        title="New Movies"
      />
      <Block
        :data="movies"
        title="New Series"
      />
    </v-layout>
  </v-container>
</template>

<script>
import Block from '@/components/Block'
export default {
  components: {
    Block
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
          time: '4 hours ago'
        },
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
          time: '4 hours ago'
        },
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
          time: '4 hours ago'
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
