<template>
  <div
    :dir="dir"
    class="text-gray-700"
  >
    <appNavbar />
    <div>
      <nuxt />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appNavbar from '~/components/common/appNavbar'
import appFooter from '~/components/common/appFooter'

export default {
  components: {
    appNavbar,
    appFooter
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