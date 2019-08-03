<template>
  <div class="block">
    <div class="block-head">
      <h1 class="text-xs-center ml-4">
        {{ movie.title }}
      </h1>
    </div>
    <div class="block-content">
      <v-container>
        <v-layout
          row
          wrap
          justify-center
        >
          <v-flex xs10>
            <v-card
              color="blue-grey"
              class="white--text"
            >
              <v-layout fill-height>
                <iframe
                  :src="movie.servers[selected_server].url"
                  style="width: 100%;height: 36em;"
                  frameborder="0"
                />
              </v-layout>

              <v-divider light />
              <v-card-actions>
                <v-btn
                  flat
                  dark
                  icon
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn
                  flat
                  dark
                  icon
                >
                  <v-icon>highlight</v-icon>
                </v-btn>
                <v-btn
                  flat
                  dark
                  icon
                >
                  <v-icon>report</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn
                  flat
                  dark
                >
                  <v-icon
                    dark
                    left
                  >
                    navigate_before
                  </v-icon>Previous
                </v-btn>
                <v-btn
                  flat
                  dark
                >
                  Next
                  <v-icon
                    dark
                    right
                  >
                    navigate_next
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-divider light />
              <v-card-actions>
                <div>
                  <span style="font-size:18px;">servers : </span>
                </div>
                <v-btn
                  v-for="(server, index) in movie.servers"
                  :key="server.id"
                  flat
                  dark
                  color="orange"
                  :disabled="selected_server == index"
                  @click="change_server(server.id)"
                >
                  {{ server.name }}
                </v-btn>
              </v-card-actions>
              <v-divider light />
              <v-container>
                <div class="comments">
                  <vue-disqus shortname="7uptv" />
                </div>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected_server: 0,
      movie: {
        adult: false,
        backdrop_path: null,
        belongs_to_collection: null,
        budget: 0,
        genres: [
          {
            id: 99,
            name: 'Documentary'
          }
        ],
        servers: [
          {
            name: 'youtube',
            id: 1,
            url: 'https://embed.mystream.to/f8zbsw1az5g9'
          },
          {
            name: 'drive',
            id: 2,
            url: 'https://gounlimited.to/embed-gh11js50nsim.html'
          },
          {
            name: 'openload',
            id: 3,
            url: 'https://embed.mystream.to/f8zbsw1az5g7'
          },
          {
            name: 'mega',
            id: 4,
            url: 'https://embed.mystream.to/f8zbsw1az5g8'
          }
        ],
        homepage: '',
        id: 413323,
        imdb_id: 'tt5852644',
        original_language: 'en',
        original_title: 'Deadpool: From Comics to Screen... to Screen',
        overview:
          'This documentary divided into five segments examines the source and its path to the movies, backstory, special effects story/character areas, cast and performances. It includes notes from Reynolds, Liefeld, Miller, Wernick, Reese, executive producers Aditya Sood and Stan Lee, co-creator/comics writer Fabian Nicieza, producer Simon Kinberg, comics writer Joe Kelly, specialty costume designer Russell Shinkle, makeup designer Bill Corso, production designer Sean Haworth, director of photography Ken Seng, executive producer/unit production manager John J. Kelly, previs supervisor Franck Balson, stunt coordinator Philip J. Silvera, visual effects supervisors Pauline Duvall and Jonathan Rothbart, visual effects producer Annemarie Griggs, 2nd unit director/stunt coordinator Robert Alonzo, special effects coordinator Alex Burdett, utility stunts Regis Harrington, composer Tom Holkenberg, and actors Morena Baccarin, TJ Miller, Brianna Hildebrand, Leslie Uggams, Ed Skrein, and Gina Carano.',
        popularity: 0,
        poster_path: '/chV0avy5ogIB2PMTInT4KpHDzwj.jpg',
        production_companies: [],
        production_countries: [],
        release_date: '2016-05-10',
        revenue: 0,
        runtime: 80,
        spoken_languages: [],
        status: 'Released',
        tagline: '',
        title: 'Deadpool: From Comics to Screen... to Screen',
        video: false,
        vote_average: 0,
        vote_count: 0
      }
    }
  },
  methods: {
    change_server(id) {
      const serverId = this.movie.servers.map(server => server.id).indexOf(id)
      // const server = this.movie.servers.filter(obj => {
      //   return obj.id === id
      // })
      this.selected_server = serverId
    }
  }
}
</script>
