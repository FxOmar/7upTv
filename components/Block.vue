<template>
  <div class="block">
    <div class="block-head">
      <h1 class="text-xs-left ml-4">
        {{ title }}
      </h1>
    </div>
    <div class="block-content">
      <v-container>
        <v-layout
          row
          wrap
        >
          <Movie
            v-for="(card, index) in data"
            :key="index"
            :thumbnail="card.thumbnail"
            :title="card.title"
            :views="card.views"
            :time="card.time"
          />
          <v-flex
            xs12
            sm6
            md4
            lg3
          >
            <v-card
              class="text-xs-center ma-2"
              to="/movies"
            >
              <v-responsive class="pa-5">
                <v-icon large>
                  add
                </v-icon>
              </v-responsive>
              <v-card-text>
                <div class="subheading">
                  more
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import Movie from './Movie'
export default {
  components: {
    Movie
  },
  props: {
    data: { type: Array, default: null },
    title: { type: String, default: 'New' }
  }
}
</script>

<style>
.block {
  margin-bottom: 40px;
}
</style>
