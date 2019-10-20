import Vue from 'vue'
import moment from 'moment'

Vue.prototype.$catchValidationErrors = function (error) {
    if (error.response && error.response.status === 422) {
        let data = error.response.data
        if (data.message === 'messages.data_invalid')
        this.errors = data.errors
        else console.log(data.message)
    } else {
        let data = error.response.data
        console.log(data.message)
    }
}

Vue.prototype.$auth = function () {
    return this.$store.state.Auth.user
}

Vue.prototype.$avatar = function () {
    return '/img/avatar.png'
}

Vue.prototype.$moment = moment
Vue.prototype.$timeFromNow = (val) => {
    let now = moment()
    let created_at = moment(val)
    let diff = created_at.diff(now)
    return moment.duration(diff).humanize(true)
}