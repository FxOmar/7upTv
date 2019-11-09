<template>
  <div
    :dir="dir"
    class="text-gray-700"
  >
    <appNavbar />
    <div class="bg-gray-100">
      <jumbotron />
      <nuxt />
    </div>
  </div>
</template>

<script>
import appNavbar from '~/components/common/appNavbar'
import jumbotron from '~/components/common/jumbotron'

export default {
  components: {
    appNavbar,
    jumbotron
  },
  computed: {
    dir () {
      return ['ar'].includes(this.$i18n.locale) ? 'rtl' : 'ltr'
    }
  }
}
</script>

<style lang="postcss">
* {
  outline: none !important;
}
</style>