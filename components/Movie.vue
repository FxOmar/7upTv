<template>
  <v-flex
    xs12
    sm4
    md3
    lg2
  >
    <v-card>
      <v-img
        class="white--text"
        height="200px"
        :src="thumbnail"
      >
        <v-container
          fill-height
          fluid
        >
          <v-layout fill-height>
            <v-flex
              xs12
              align-end
              flexbox
            />
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div>
          <span class="title">{{ title }}</span><br>
          <span class="grey--text">{{ views }} Views . {{ time }}</span>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    thumbnail: { type: String, default: 'not_found.png' },
    title: { type: String, default: 'Title is here' },
    views: { type: Number, default: 5000 },
    time: { type: String, default: '5 hours ago' }
  }
}
</script>

<style>
</style>
