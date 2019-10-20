<template>
  <div :style="{ marginBottom: $store.state.navHeight + 'px' }">
    <div
      ref="navbar"
      class="h-12 border-b bg-white fixed inset-x-0 top-0 z-50"
    >
      <div class="container mx-auto h-full">
        <div class="flex justify-between h-full">
          <div class="flex">
            <nuxt-link
              :to="localePath('index')"
              class="px-3 flex items-center hover:bg-gray-100"
            >
              <span class="font-semibold text-xl tracking-tight">7UPTV</span>
            </nuxt-link>
          </div>
          <div class="flex">
            <template v-if="$auth()">
              <div class="px-3 flex items-center text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <i class="fa fa-bell"></i>
              </div>
              <div class="px-3 flex items-center text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <i class="fa fa-comment-alt"></i>
              </div>
              <div class="border-l border-gray-200 my-3"></div>
            </template>
            <div class="px-3 flex items-center hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer">
              <center-img
                class="h-8 w-8 rounded-full"
                innerBorder
              >
                <img :src="($auth() || {}).avatar || $avatar()">
              </center-img>
              <i class="fa fa-caret-down rtl:mr-2 ltr:ml-2"></i>
            </div>
            <template v-if="$auth()">
              <popper>
                <div
                  slot-scope="{ hide }"
                  class="shadow-md rounded bg-white py-2 w-32 -mt-1"
                >
                  <ul
                    class="popup-menu"
                    @click="hide"
                  >
                    <nuxt-link :to="localePath('profile-index')">
                      <!-- :locale: -->
                      <li>{{ $t('profile') }}</li>
                    </nuxt-link>
                    <li class="divider"></li>
                    <a @click="logout">
                      <li>{{ $t('logout') }}</li>
                    </a>
                  </ul>
                </div>
              </popper>
            </template>
            <template v-else>
              <popper>
                <div
                  slot-scope="{ hide }"
                  class="shadow-md rounded bg-white py-2 w-32 -mt-1"
                >
                  <ul
                    class="popup-menu"
                    @click="hide"
                  >
                    <nuxt-link :to="localePath('login')">
                      <li>{{ $t('login') }}</li>
                    </nuxt-link>
                    <nuxt-link :to="localePath('register')">
                      <li>{{ $t('new account') }}</li>
                    </nuxt-link>
                  </ul>
                </div>
              </popper>
            </template>
            <div class="px-3 flex items-center text-2xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 ltr:border-l rtl:border-r border-gray-200 cursor-pointer">
              <i class="fa fa-language"></i>
            </div>
            <popper>
              <div
                slot-scope="{ hide }"
                class="shadow-md rounded bg-white py-2 w-32 -mt-1"
              >
                <ul
                  class="popup-menu"
                  @click="hide"
                >
                  <nuxt-link :to="switchLocalePath('ar')">
                    <li>العربية</li>
                  </nuxt-link>
                  <nuxt-link :to="switchLocalePath('en')">
                    <li>English</li>
                  </nuxt-link>
                  <nuxt-link :to="switchLocalePath('fr')">
                    <li>Français</li>
                  </nuxt-link>
                </ul>
              </div>
            </popper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('SET_NAV_HEIGHT', this.$refs.navbar.clientHeight)
  },
  methods: {
    async logout () {
      try {
        await this.$axios.$post('/users/logout')
        this.$cookies.remove('access_token')
        this.$cookies.remove('user')
        location = this.localePath('index')
      } catch (error) {
        console.dir(error)
      }
    }
  }
}
</script>

<style>
</style>