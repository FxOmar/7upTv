<template>
    <div class="container mx-auto px-3 py-5">
        <div class="flex justify-center">
            <div class="lg:w-1/3 w-full">
                <Notification :message="error" v-if="error" />
                <template v-if="$route.query.resetPasswordSuccess !== undefined">
                    <div class="px-5 py-2 border border-green-500 bg-green-300 text-green-700 rounded mb-5">
                        {{ $tc('reset password ok') }}
                    </div>
                </template>
                <div class="shadow rounded bg-white">
                    <div class="px-5 py-3 border-b">
                        <div class="text-xl font-bold text-gray-500">
                            {{ $t('login') }}
                        </div>
                    </div>
                    <div class="p-5">
                        <form method="post" @submit.prevent="login">
                            <app-text-input class="mb-3">
                                <input v-model="email" :placeholder="$t('email')" type="text">
                                <!-- <div v-if="errors.email" slot="helper">{{ errors.email[0] }}</div> -->
                            </app-text-input>
                            <app-text-input class="mb-3">
                                <input v-model="password" :placeholder="$t('password')" type="password">
                                <!-- <div v-if="errors.password" slot="helper">{{ errors.password[0] }}</div> -->
                            </app-text-input>
                            <div class="flex items-center justify-between mb-3">
                                <label class="flex items-center select-none">
                                    <input type="checkbox">
                                    <div class="ltr:ml-2 rtl:mr-2 text-sm">{{ $t('remember me') }}</div>
                                </label>
                                <nuxt-link :to="localePath('reset-password')" class="text-blue-500 underline text-sm">
                                    {{ $t('forgot password ?') }}
                                </nuxt-link>
                            </div>
                            <div class="mb-3">
                                <app-button :loading="submitLoading" class="w-full font-bold" color="blue">
                                    {{ $t('login') }}
                                </app-button>
                            </div>
                            <nuxt-link class="block" :to="localePath('register')">
                                <app-button class="w-full font-bold" color="blue" type="outline">
                                    {{ $t('or create new account') }}
                                </app-button>
                            </nuxt-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Notification from '~/components/common/Notification'

export default {
    middleware:['guest'],
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style>

</style>