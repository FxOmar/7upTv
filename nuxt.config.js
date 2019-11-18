require("dotenv").config();

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      },
      { 
        rel:"stylesheet", 
        href:"https://unpkg.com/swiper/css/swiper.min.css" 
      }
    ],
    script: [
      { src: "https://kit.fontawesome.com/89d14b18c9.js" },
      { src: "https://unpkg.com/swiper/js/swiper.min.js" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/no-ssr/ui", ssr: false },
    { src: "~/plugins/no-ssr/vue-infinite-loading", ssr: false },
    { src: "~/plugins/no-ssr/vue-textarea-autosize", ssr: false },
    { src: "~/plugins/ssr/util" },
    { src: "~/plugins/ssr/ui" },
    { src: "~/plugins/axios" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    '@nuxtjs/auth',
    "nuxt-i18n",
    "cookie-universal-nuxt",
    "@nuxtjs/sentry"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL
  },
  auth: {
  	strategies: {
  		local: {
  			endpoints: {
  				login: {
  					url: '/users/login',
  					method: 'POST',
  					propertyName: 'access_token',
  				},
  				logout: {
  					url: '/users/logout',
  					method: 'POST'
  				},
  				user: {
  					url: '/me',
  					method: 'get',
  					propertyName: false
  				}
  			}
  		}
  	}
  },
  /*
   ** nuxt.js server options
   ** (can be overrided by environment variables)
   */
  server: {
    port: process.env.APP_PORT,
    host: "0.0.0.0"
  },
  /*
   ** Sentry config.
   */
  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    config: {} // Additional config
  },
  /*
   ** i18n
   */
  i18n: require("./locales"),
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.config.js",
        "postcss-nested": {}
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
