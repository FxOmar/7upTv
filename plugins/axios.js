export default function ({ $axios, app, redirect }) {
    let token = app.$cookies.get('access_token')
    if (token) {
        $axios.setToken(token, 'Bearer')
    }

    $axios.onRequest(config => {
        config.params = { ... (config.query || {}), locale: app.i18n.locale }
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 404) {
            redirect('/404')
        }
        if (code === 401) {
            app.$cookies.remove('access_token')
            app.$cookies.remove('user')
            redirect(app.localePath('login'))
        }
    })
}