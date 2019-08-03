<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mini-variant
      permanent
      app
      fixed
    >
      <div class="logo">
        <v-icon large>
          menu
        </v-icon>
      </div>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon large>
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      permanent
      app
      fixed
      color="white"
      height="64px"
      flat
      tile
      class="navbar"
    >
      <v-text-field
        color="#c4c4c6"
        height="64px"
        label="Search"
        prepend-inner-icon="search"
        class="search"
        solo
        flat
        autofocus
        single-line
        hide-details
        clearable
      />
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>
    </main>
    <v-footer app>
      <span>All reights reserved &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: true,
      drawer: false,
      items: [
        {
          icon: 'account_circle',
          title: 'Account',
          to: '/account'
        },
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'movie',
          title: 'Movies',
          to: '/movies'
        },
        {
          icon: 'local_movies',
          title: 'Series',
          to: '/series'
        }
      ],
      miniVariant: false,
      title: '7UPTV'
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100%;
  height: 64px;
  background-color: #4b77f4;
  text-align: center;
  padding: 12px;
}
.logo .v-icon {
  color: white;
}
</style>
