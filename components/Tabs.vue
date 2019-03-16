<template>
  <v-tabs
    slot="extension"
    centered
    color="red"
    slider-color="white"
  >
    <v-tab
      v-for="(tab, key) in tabs"
      :key="key"
    >
      {{ tab }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: { tabs: { type: Array, default: Array } }
}
</script>

<style>
</style>
