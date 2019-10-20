<template>
  <div
    :dir="dir"
    class="text-gray-700"
  >
    <appNavbar />
    <div class="bg-gray-100">
      <nuxt />
    </div>
  </div>
</template>

<script>
import appNavbar from '~/components/common/appNavbar'

export default {
  components: {
    appNavbar
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