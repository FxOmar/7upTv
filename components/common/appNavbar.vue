<template>
  <div :style="{ marginBottom: $store.state.navHeight + 'px' }">
    <div
      ref="navbar"
      class="shadow-md bg-white py-2"
    >
      <div class="container mx-auto h-full">
        <nav class="flex justify-between h-full">
          <div class="flex items-center flex-shrink-0 mr-6">
            <nuxt-link :to="localePath('index')" class="px-3 flex items-center hover:bg-gray-100">
              <span class="font-semibold text-xl tracking-tight">7UPTV</span>
            </nuxt-link>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="lg:flex-grow">
              <dropdown drop_name="Discover">
              	<ul class="popup-box" slot-scope="{ onClose }" @click="onClose">
              		<nuxt-link to="/movies">
              			<li>Movies</li>
              		</nuxt-link>
              		<nuxt-link to="/tv-shows">
              			<li>Tv Shows</li>
              		</nuxt-link>
              	</ul>
              </dropdown>
              <dropdown drop_name="Movies">
              	<ul class="popup-box" slot-scope="{ onClose }" @click="onClose">
              		<nuxt-link to="/movies/movie-popular">
              			<li>Popular</li>
              		</nuxt-link>
              		<nuxt-link to="/movies/movie-now-playing">
              			<li>Now Playing</li>
              		</nuxt-link>
              		<nuxt-link to="/movies/top_rated">
              			<li>Top Rated</li>
              		</nuxt-link>
              		<nuxt-link to="/movies/upcoming">
              			<li>Upcoming</li>
              		</nuxt-link>
              	</ul>
              </dropdown>
              <dropdown drop_name="TV Shows">
              	<ul class="popup-box" slot-scope="{ onClose }" @click="onClose">
              		<nuxt-link to="/movies">
              			<li>Popular</li>
              		</nuxt-link>
              		<nuxt-link to="#">
              			<li>Top Rated</li>
              		</nuxt-link>
              		<nuxt-link to="#">
              			<li>Currently Airing</li>
              		</nuxt-link>
              		<nuxt-link to="#">
              			<li>Airing Today</li>
              		</nuxt-link>
              	</ul>
              </dropdown>
            </div>
            <div class="flex">
              <div class="flex items-center">
                <form class="w-full max-w-sm">
                  <div class="flex items-center border rounded py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 ml-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="search...">
                    <i class="fas fa-search flex-shrink-0 text-sm text-black py-2 px-4">
                    </i>
                  </div>
                </form>
              </div>
              <div class="px-3 flex items-center text-lg text-gray-500 cursor-pointer">
                <i class="fas fa-globe-africa hover:bg-gray-200 hover:text-gray-700 focus:bg-gray-200 p-3 rounded-lg"></i>
              </div>
              <popper>
                <div slot-scope="{ hide }" class="shadow-md rounded bg-white py-2 w-32 -mt-1">
                  <ul class="popup-menu" @click="hide">
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
              <div class="flex items-center">
                <template v-if="isAuthenticated">
                  <div class="px-3 flex items-center text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <i class="fa fa-bell"></i>
                  </div>
                  <div class="px-3 flex items-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 select-none cursor-pointer">
                    <i class="fas fa-plus"></i>
                  </div>
                  <popper>
                    <div
                      slot-scope="{ hide }"
                      class="shadow-md rounded bg-white py-2 w-32 mt-2"
                    >
                      <ul
                        class="popup-menu"
                        @click="hide"
                      >
                        <nuxt-link to="/new/movie">
                          <li>{{ $t('Movie') }}</li>
                        </nuxt-link>
                        <li class="divider"></li>
                        <nuxt-link to="/new/tv-show">
                          <li>{{ $t('Series') }}</li>
                        </nuxt-link>
                      </ul>
                    </div>
                  </popper>
                  <div class="border-l border-gray-200 my-3"></div>
                </template>
                <template v-if="isAuthenticated">
                  <div class="px-3 flex items-center hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer">
                    <center-img
                      class="h-8 w-8 rounded-full"
                      innerBorder
                    >
                      <img :src="(isAuthenticated || {}).avatar || $avatar()">
                    </center-img>
                    <i class="fa fa-caret-down rtl:mr-2 ltr:ml-2"></i>
                  </div>
                </template>
                <template v-if="isAuthenticated">
                  <popper>
                    <div
                      slot-scope="{ hide }"
                      class="shadow-md rounded bg-white py-2 w-32 -mt-1"
                    >
                      <ul
                        class="popup-menu"
                        @click="hide"
                      >
                        <nuxt-link to="/user/profile">
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
                  <nuxt-link class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-blue-500 hover:border-transparent rounded" :to="localePath('login')">
                    {{ $t('login') }}
                  </nuxt-link>
                  <nuxt-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :to="localePath('register')">
                    {{ $t('new account') }}
                  </nuxt-link>
                </template>
              </div>
            </div>
          </div>
        </nav>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dropdown from '~/components/ui/dropdown'

export default {
  components:{
    dropdown
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  }
}
</script>

<style scoped>
</style>
