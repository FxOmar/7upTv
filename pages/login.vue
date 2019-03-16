<template>
  <v-layout>
    <v-flex text-xs-center>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios.get('https://www.fevrok.com/api/me').then(response => {
      print(response.data)
    })
  }
}
</script>

<style scoped>
</style>
